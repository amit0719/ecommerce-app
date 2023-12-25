import dotenv from "dotenv";
import express from "express";
import connectDB from "./utils/db";
import productRoutes from "./routes/products";
import userRoutes from "./routes/users";
import cartRoutes from "./routes/carts";
import categoryRoutes from "./routes/categories";

dotenv.config({ path: "./.env" });

//database config

connectDB();

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/categories", categoryRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log("server running on port", port);
});
