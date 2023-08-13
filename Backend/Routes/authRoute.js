import express from "express";
const router = express.Router();
import { registerController } from "../Controllers/authController.js";

router.post("/register", registerController);

export default router;
