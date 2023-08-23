import router from "express";
import { createProductController } from "../Controllers/ProductController";
import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware";

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
