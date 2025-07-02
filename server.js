import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import taskRouts from "./routes/taskRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");
} catch (err) {
  console.error("MongoDB connection error:", err);
}

app.use("/api/tasks/", taskRouts);

app.listen(PORT, () => console.log(`Server Running at PORT ${PORT}`));
