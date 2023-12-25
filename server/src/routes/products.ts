import { Router } from "express";
import * as productController from "../controllers/products";

const router = Router();

router.get("/", productController.getAllProducts);
router.get("/:productId", productController.getProductById);
router.post("/", productController.createProduct);
router.put("/:productId", productController.updateProduct);
router.delete("/:productId", productController.deleteProduct);

export default router;
