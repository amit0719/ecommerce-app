import express from "express";
import * as authController from "../controllers/auth";

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/verifyOTP", authController.verifyOTP);
router.post("/resetPassword", authController.resetPassword);
router.post("/updatePassword", authController.updatePassword);

export default router;
