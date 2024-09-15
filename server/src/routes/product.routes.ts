import { Router } from "express";
import { ProductController } from "../controllers";

const productController = new ProductController();

const router = Router();
router.get("/", productController.getProducts);
router.post("/", productController.createProduct);

export default router;
