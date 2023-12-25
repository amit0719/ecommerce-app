import express from "express";
import {
  addToCart,
  getCartItems,
  removeFromCart,
  updateCartItem,
} from "../controllers/carts";

const router = express.Router();

router.get("/", getCartItems);
router.post("/add", addToCart);
router.post("/remove", removeFromCart);
router.post("/update", updateCartItem);

export default router;
