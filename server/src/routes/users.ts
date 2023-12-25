import express from "express";
const router = express.Router();
import * as userController from "../controllers/users";

// Routes for user-related operations

router.get("/", userController.getAllUsers);

// Other routes: getUserById, createUser, updateUser, deleteUser, etc.

export default router;
