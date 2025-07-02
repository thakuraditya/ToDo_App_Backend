import express from "express";
import {
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controller/taskController.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", getTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
