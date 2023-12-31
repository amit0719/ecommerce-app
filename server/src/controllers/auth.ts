import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user";
import { generateOTP } from "../utils/helper";
import { OTP_EXPIRATION_TIME } from "../config";
import { sendEmail } from "../utils/emailUtils";

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Validate password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate and send OTP
    const OTP = generateOTP(6); // Your OTP generation function

    user.otpExpiration = new Date(Date.now() + OTP_EXPIRATION_TIME);
    user.otp = OTP;

    await user.save();
    await sendEmail(user.email, `Your OTP is: ${OTP}`); // Your email sending function

    return res.status(200).json({ message: "OTP sent to your email" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const verifyOTP = async (req: Request, res: Response) => {
  try {
    const { username, otp } = req.body;

    // Find the user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (
      user.otp !== otp ||
      !user.otpExpiration ||
      user.otpExpiration < new Date()
    ) {
      return res.status(401).json({ message: "Invalid or expired OTP" });
    }

    // Clear OTP and expiration time
    user.otp = null;
    user.otpExpiration = null;
    await user.save();

    const token = jwt.sign({ userId: user._id }, "secret_key"); // Replace with your secret key
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      username,
      password: hashedPassword,
      email,
    });

    await user.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
