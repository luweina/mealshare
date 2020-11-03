import express from "express";

const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview
} from "../controllers/productController.js";
import { protect, merchant } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, merchant, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, merchant, deleteProduct)
  .put(protect, merchant, updateProduct);

export default router;
