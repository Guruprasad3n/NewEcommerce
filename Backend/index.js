import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Config/db.js";
import authRoute from "./Routes/authRoute.js";
import categoryRoute from "./Routes/CategoryRoute.js";

const app = express();
app.use(cors());

// Configuration Evnironmental data
dotenv.config();

// Middlewares

app.use(express.json());
app.use(urlencoded({ extended: true }));

connectDB();
const PORT = process.env.PORT || 8080;

// Routes

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.listen(PORT, (req, res) => {
  console.log(`Server Running on Port No  http://localhost:${PORT}`);
});

// http://localhost:8000/api/v1/auth
// http://localhost:8000/api/v1/category
