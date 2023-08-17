import express from "express";
const router = express.Router();
import {
  registerController,
  loginController,
  testController,
  userAuthController,
  forgotPasswordController,
  adminAuthController
} from "../Controllers/authController.js";
import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";

router.post("/register", registerController);
router.post("/login", loginController);

// Forgot Password
router.post('/forgot-password', forgotPasswordController)

// Test Router
router.get("/test", requireSignIn, isAdmin, testController);

router.get("/user-auth", requireSignIn, userAuthController)
router.get("/admin-auth", requireSignIn, isAdmin, adminAuthController)



export default router;
