import { Request, Response } from "express";
import Order from "../models/order";
import stripe from "stripe";

const stripeClient = new stripe("YOUR_SECRET_KEY", {
  apiVersion: "2020-08-27" as any,
});

export const processPayment = async (req: Request, res: Response) => {
  const { paymentMethodId, orderId } = req.body;

  try {
    // Use Stripe API to confirm the payment with the paymentMethodId
    const payment = await stripeClient.paymentIntents.create({
      amount: 1000, // Replace with the actual amount in cents
      currency: "usd", // Replace with the desired currency
      payment_method: paymentMethodId,
      confirm: true,
    });

    if (payment.status === "succeeded") {
      // Update order status to 'paid' in your database (simulated in this example)
      const updatedOrder = {
        _id: orderId,
        paymentStatus: "Paid",
      };

      // Simulated logic to update order status, replace with your DB logic
      await Order.findByIdAndUpdate(orderId, { paymentStatus: "Paid" });

      return res
        .status(200)
        .json({ message: "Payment successful", updatedOrder });
    } else {
      return res.status(400).json({ error: "Payment failed" });
    }
  } catch (error) {
    console.error("Error occurred while processing payment:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while processing payment" });
  }
};

// Controller to create a new order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const { orderID, customer, items, totalAmount, status } = req.body;
    const newOrder = new Order({
      orderID,
      customer,
      items,
      totalAmount,
      status,
    });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update order status
export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.json(updatedOrder);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get all orders
export const getAllOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to cancel an order
export const cancelOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cancelledOrder = await Order.findByIdAndUpdate(
      id,
      { status: "Cancelled" },
      { new: true }
    );
    if (!cancelledOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(cancelledOrder);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
