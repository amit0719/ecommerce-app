import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });
const URI = process.env.MONGO_DB_URL as string;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connected");
  } catch (error) {
    console.log("error in Database connection", error);
  }
};

export default connectDB;
