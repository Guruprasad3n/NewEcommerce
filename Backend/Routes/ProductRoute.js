import express from "express";
import { createProductController, getAllProductsController, getSingleProductsController } from "../Controllers/ProductController.js";
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
router.get("/get-products", getAllProductsController)
router.get("/get-products/:slug", getSingleProductsController)
// router.get("/")

export default router;
