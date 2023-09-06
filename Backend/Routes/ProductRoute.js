import express from "express";
import {
  createProductController,
  getAllProductsController,
  getSingleProductsController,
  getProductPhotoContorller,
  deleteProductController,
  updateProductController,
} from "../Controllers/ProductController.js";
import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";

import formidable from "express-formidable";

const router = express.Router();

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
router.get("/get-products", getAllProductsController);
router.get("/get-product/:slug", getSingleProductsController);

// get Photo
router.get("/product-photo/:id", getProductPhotoContorller);
router.delete("/delete-product/:id", deleteProductController);
router.put(
  "/update-product/:id",
  isAdmin,
  requireSignIn,
  formidable(),
  updateProductController
);

export default router;
