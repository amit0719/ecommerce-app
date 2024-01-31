import { Request, Response } from "express";
import Order from "../models/order";
import stripe from "stripe";
import { generateOrderId } from "../utils/helper";

const stripeClient = new stripe(
  "sk_test_51OdBm3SAISpOZ71vHekzrnTbMMqC4zTZsdhJLbtPzGRJbWAuMdlrQRZSvcFd74BJSfNDnHvByXNduqRcYXPigUJH00qTBz7P2T"
);

export const processPayment = async (req: Request, res: Response) => {
  const { totalAmount } = req.body;

  try {
    //Use Stripe API to confirm the payment with the paymentMethodId
    const paymentIntent = await stripeClient.paymentIntents.create({
      amount: totalAmount,
      currency: "inr",
      description: "payment",
      payment_method_types: ["card"],
      confirm: true,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    // respond with the client secret and id of the new paymentintent
    if (paymentIntent.client_secret) {
    }

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error occurred while processing payment:", error);
    return res.status(500).json({
      error: "An error occurred while processing payment",
      error1: error,
    });
  }
};

// Controller to create a new order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId, items, totalAmount } = req.body;
    const orderId = generateOrderId();

    const newOrder = new Order({
      userId,
      items,
      totalAmount,
    });

    const savedOrder = await newOrder.save();

    res.status(200).json(savedOrder._id);
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
