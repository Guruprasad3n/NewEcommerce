import express from "express";
import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
  allCategoryController,
  singleCategoryController,
  deleteCategoryController
} from "../Controllers/CategoryController.js";
const router = express.Router();

// Create Category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// Update Category

router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// Get All Category

router.get("/get-all-category", allCategoryController )

// Signle Category
router.get("/signle-category/:slug", singleCategoryController )

router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategoryController)



export default router;
