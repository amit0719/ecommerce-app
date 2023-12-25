import User from "../models/user";
import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    console.log(users);
    res.json(users);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
