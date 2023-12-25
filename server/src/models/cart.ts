import { Schema, Document, model } from "mongoose";

export interface CartItem extends Document {
  userId: string;
  productId: string;
  quantity: number;
}

const cartItemSchema: Schema = new Schema({
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  quantity: { type: Number, default: 1 },
});

export default model<CartItem>("CartItem", cartItemSchema);
