import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db";

const app = express();

// Configuration Evnironmental data
dotenv.config();

// Middlewares

app.use(express.json());
app.use(urlencoded({ extended: true }));

connectDB();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.listen(PORT, (req, res) => {
  console.log(`Server Running on Port No  http://localhost:${PORT}`);
});
