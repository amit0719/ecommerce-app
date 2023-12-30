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
