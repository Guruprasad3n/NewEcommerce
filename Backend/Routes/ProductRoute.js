import express from "express";
import {
  createProductController,
  getAllProductsController,
  getSingleProductsController,
  getProductPhotoContorller,
} from "../Controllers/ProductController.js";
import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";

import formidable from "express-formidable";

const router = express.Router();

router.post(
  "/create-product",
  isAdmin,
  requireSignIn,
  formidable(),
  createProductController
);
router.get("/get-products", getAllProductsController);
router.get("/get-products/:slug", getSingleProductsController);

// get Photo
router.get("/product-photo/:id", getProductPhotoContorller);
// router.get("/update-product", updateProductController)
// router.get("/delete-product", deleteProductController)

export default router;
