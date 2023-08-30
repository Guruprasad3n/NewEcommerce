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
    console.log(e, "Expaired");
    return res.status(500).send({success:false, message:"Error in Admin Signin Or JWT Expaired"})
  }
};

// Admin Access;

export const isAdmin = async (req, res, next) => {
  try {
    // const user = await userModel.findById(req.user._id);
    // if (!req.user || !req.user._id) {
    //   return res
    //     .status(401)
    //     .send({ success: false, message: "User not authenticated" });
    // }

    const user = await userModel.findById(req.user._id);

    // if (!user) {
    //   return res
    //     .status(401)
    //     .send({ success: false, message: "User not found" });
    // }
    if (user.role !== 1) {
      return res
        .status(401)
        .send({ success: false, message: "UnAuthoraized Access" });
    } else {
      next();
    }
  } catch (e) {
    console.log(e);
   return res
      .status(401)
      .send({ success: false, message: "Error in Admin Middleware" });
  }
};

