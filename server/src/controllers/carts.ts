import { Request, Response } from "express";
import CartItem from "../models/cart";

export const getCartItems = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId } = req.query;

    // Find all items in the cart for the specified user
    const cartItems = await CartItem.find({ userId });

    res.status(200).json({ cartItems });
  } catch (err: any) {
    res
      .status(500)
      .json({ message: "Failed to fetch cart items", error: err.message });
  }
};

export const addToCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, productId, quantity } = req.body;

    // Check if the item already exists in the cart for the user
    let cartItem = await CartItem.findOne({ userId, productId });

    if (cartItem) {
      // Update quantity if item already exists
      cartItem.quantity += quantity || 1;
    } else {
      // Create a new cart item if it doesn't exist
      cartItem = new CartItem({
        userId,
        productId,
        quantity: quantity || 1,
      });
    }

    await cartItem.save();
    res.status(200).json({ message: "Item added to cart", cartItem });
  } catch (err: any) {
    res
      .status(500)
      .json({ message: "Failed to add item to cart", error: err.message });
  }
};

export const removeFromCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, productId } = req.body;

    // Remove item from the cart
    await CartItem.deleteOne({ userId, productId });

    res.status(200).json({ message: "Item removed from cart" });
  } catch (err: any) {
    res
      .status(500)
      .json({ message: "Failed to remove item from cart", error: err.message });
  }
};

// ...existing imports and code

export const updateCartItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, productId, quantity } = req.body;

    // Find the item in the cart
    let cartItem = await CartItem.findOne({ userId, productId });

    if (!cartItem) {
      res.status(404).json({ message: "Item not found in cart" });
      return;
    }

    // Update quantity if provided in the request
    if (quantity !== undefined && quantity !== null) {
      cartItem.quantity = quantity;
    }

    await cartItem.save();
    res.status(200).json({ message: "Cart item updated", cartItem });
  } catch (err: any) {
    res
      .status(500)
      .json({ message: "Failed to update cart item", error: err.message });
  }
};
