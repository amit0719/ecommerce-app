import { Schema, Document, model } from "mongoose";

export interface User extends Document {
  username: string;
  password: string;
  email: string;
  phone: number;
  address: string;
  otp: number | null;
  otpExpiration: Date | null;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  otp: { type: Number, default: null },
  otpExpiration: { type: Date, default: null },
});

export default model<User>("User", UserSchema);
