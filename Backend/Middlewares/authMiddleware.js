import jwt from "jsonwebtoken";
import userModel from "../Models/userModel.js";

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;;
    next();
  } catch (e) {
    console.log(e);
  }
};

// Admin Access;

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res
        .status(401)
        .send({ success: false, message: "UnAuthoraized Access" });
    } else {
      next();
    }
  } catch (e) {
    console.log(e);
    res
      .status(401)
      .send({ success: false, message: "Error in Admin Middleware" });
  }
};
