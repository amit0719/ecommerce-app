import { Document, Schema, model } from "mongoose";

// Define an interface for the Order document
interface IOrder extends Document {
  orderID: string;
  userId: string;
  items: {
    productId: string; // You might reference a Product schema here
    quantity: number;
    // Other item details can be added here
  }[];
  totalAmount: number;
  status: string;
  paymentStatus: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema for the Order
const OrderSchema: Schema = new Schema(
  {
    orderID: {
      type: String,
      required: true,
      unique: true,
    },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    items: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "Product" }, // Assuming a Product schema
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"], // Example status options
      default: "Pending",
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed", "Refunded"],
      default: "Pending",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields automatically
);

// Create and export the Order model
const Order = model<IOrder>("Order", OrderSchema);
export default Order;
