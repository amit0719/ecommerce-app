import express from "express";
import {
  createOrder,
  updateOrderStatus,
  getAllOrders,
  getOrderById,
  cancelOrder,
  processPayment,
} from "../controllers/orders";

const router = express.Router();

// Routes for orders
router.get("/", getAllOrders); // Get all orders
router.get("/orders/:id", getOrderById); // Get order by ID
router.put("/orders/:id/cancel", cancelOrder); // Cancel an order
router.post("/", createOrder); // Create a new order
router.put("/orders/:id", updateOrderStatus); // Update order status
router.post("/payment", processPayment);

export default router;
