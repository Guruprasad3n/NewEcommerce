import { comparePassword, hashPassword } from "../Helpers/authHelper.js";
import jwt from "jsonwebtoken";
import userModel from "../Models/userModel.js";

// Signup Request
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "E-mail is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone Number is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    // Check Existing User
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res
        .status(200)
        .send({ success: false, message: "User Already Exist Please Login" });
    }
    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    });
    user.save();
    return res
      .status(200)
      .send({ success: true, message: "User Register Successful", user });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ success: false, message: "Error in Registaration", error });
  }
};

// Login Request
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid Email or Password",
      });
    }
    // Check User
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "Email is not registered" });
    }
    const matchPassword = await comparePassword(password, user.password);
    if (!matchPassword) {
      return res
        .status(200)
        .send({ success: false, message: "Invalid User I'd or Password" });
    }
    // JSON WEB TOKEN
    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return res.status(200).send({
      success: true,
      message: "Login Success",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Login Failed You are getting Error",
      error,
    });
  }
};

export const testController = (req, res) => {
  res.send("Protected Route");
};

// export default { registerController };
