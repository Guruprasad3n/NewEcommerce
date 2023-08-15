import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors"
import connectDB from "./Config/db.js";
import authRoute from "./Routes/authRoute.js";

const app = express();

// Configuration Evnironmental data
dotenv.config();

// Middlewares

app.use(cors())
app.use(express.json());
app.use(urlencoded({ extended: true }));

connectDB();
const PORT = process.env.PORT || 8080;

// Routes

app.use("/api/v1/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.listen(PORT, (req, res) => {
  console.log(`Server Running on Port No  http://localhost:${PORT}`);
});


// http://localhost:8080/api/v1/auth