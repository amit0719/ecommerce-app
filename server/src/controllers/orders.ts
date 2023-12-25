import { Request, Response } from "express";
import Order from "../models/order";

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
