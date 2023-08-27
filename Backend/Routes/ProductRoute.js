import express from "express";
import { createProductController } from "../Controllers/ProductController.js";
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

export default router;
