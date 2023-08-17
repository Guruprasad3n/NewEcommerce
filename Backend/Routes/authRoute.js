import express from "express";
const router = express.Router();
import {
  registerController,
  loginController,
  testController,
  userAuthController,
} from "../Controllers/authController.js";
import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";

router.post("/register", registerController);
router.post("/login", loginController);

// Test Router
router.get("/test", requireSignIn, isAdmin, testController);

router.get("/user-auth", requireSignIn, userAuthController)



export default router;
