import { sendEmail } from "./emailUtils";

export function generateOTP(length: number): string {
  const digits = "0123456789";
  let OTP = "";

  for (let i = 0; i < length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }

  return OTP;
}

export const sendOtpEmailToUser = async (userEmail: string, otp: number) => {
  const subject = "Your One-Time Password (OTP) for Authentication";
  const message = `Your OTP: ${otp}. This OTP is valid for a limited time and is for your use only. Please do not share it with anyone for security reasons.`;

  await sendEmail(userEmail, subject, message);
};

export const generateOrderId = () => {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base36 string
  const randomStr = Math.random().toString(36).substring(2, 8); // Generate random string
  const orderId = `${timestamp}-${randomStr}`.toUpperCase(); // Combine and format the strings

  return orderId;
};
