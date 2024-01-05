import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user";
import { generateOTP, sendOtpEmailToUser } from "../utils/helper";
import { OTP_EXPIRATION_TIME } from "../config";
import { sendEmail } from "../utils/emailUtils";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Validate password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate and send OTP
    const OTP = generateOTP(6);

    const currentTime = new Date(); // Current time
    user.otpExpiration = new Date(currentTime.getTime() + OTP_EXPIRATION_TIME); // Add 5 minutes

    user.otp = 1234; //Number(OTP);

    await user.save();
    //  await sendOtpEmailToUser(user.email, user.otp);

    return res.status(200).json({ message: "OTP sent to your email", OTP });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const verifyOTP = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;

    // Find the user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.otp !== Number(otp)) {
      return res.status(401).json({ message: "Invalid OTP" });
    }

    const userDate = new Date(user.otpExpiration as Date);
    const currentDate = new Date();

    if (userDate < currentDate) {
      return res.status(401).json({ message: "Expired OTP" });
    }

    // Clear OTP and expiration time
    user.otp = null;
    user.otpExpiration = null;
    await user.save();

    const token = jwt.sign({ userId: user._id }, "secret_key"); // Replace with your secret key

    return res.status(200).json({ message: "User login successfully", token });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
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

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate and send OTP
    const OTP = generateOTP(6);

    const currentTime = new Date(); // Current time
    user.otpExpiration = new Date(currentTime.getTime() + OTP_EXPIRATION_TIME); // Add 5 minutes

    user.otp = 1234; //Number(OTP);

    await user.save();
    //  await sendOtpEmailToUser(user.email, user.otp);

    return res.status(200).json({ message: "OTP sent to your email", OTP });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updatePassword = async (req: Request, res: Response) => {
  const { email, password, otp } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.otp !== Number(otp)) {
      return res.status(401).json({ message: "Invalid OTP" });
    }

    const userDate = new Date(user.otpExpiration as Date);
    const currentDate = new Date();

    if (userDate < currentDate) {
      return res.status(401).json({ message: "Expired OTP" });
    }

    // Clear OTP and expiration time
    user.otp = null;
    user.otpExpiration = null;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword; // Set the new password
    await user.save(); // Save the updated user

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
