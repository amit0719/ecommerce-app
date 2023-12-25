import express from "express";
import * as categoryController from "../controllers/categories";

const router = express.Router();

router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);
router.post("/create", categoryController.createCategory);
router.put("/:id/update", categoryController.updateCategory);
router.delete("/:id/delete", categoryController.deleteCategory);

export default router;
