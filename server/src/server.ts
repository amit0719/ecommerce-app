import dotenv from "dotenv";
import express from "express";
import connectDB from "./utils/db";
import productRoutes from "./routes/products";
import userRoutes from "./routes/users";
import cartRoutes from "./routes/carts";
import categoryRoutes from "./routes/categories";
import orderRoutes from "./routes/orders";
import authRoutes from "./routes/auth";
import cors from "cors";

// Bypass SSL certificate validation (not recommended in production)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

dotenv.config({ path: "./.env" });

//database config

connectDB();

const app = express();
// Enable CORS for all routes
app.use(cors());

// OR specify options for CORS
// Replace allowedOrigins with your client's URL or '*' to allow all origins (not recommended in production)
const corsOptions = {
  //origin: "http://localhost:3000/", // Replace with your client's URL
  //origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  //credentials: true, // Enable CORS credentials if required (e.g., cookies, authorization headers)
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

const port = process.env.PORT;

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log("server running on port", port);
});
