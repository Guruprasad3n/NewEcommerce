import express from "express";
const router = express.Router();
import {
  registerController,
  loginController,
  testController,
} from "../Controllers/authController.js";
import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";

router.post("/register", registerController);
router.post("/login", loginController);

// Test Router
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
