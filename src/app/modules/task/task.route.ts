import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { createTaskZodSchema, updateTaskZodSchema } from "./task.validation";
import auth from "../../middlewares/auth";
import {
  completeAllTask,
  createTask,
  getAllTask,
  getSingleTask,
  updateTask,
} from "./task.controller";

const router = express.Router();

router.post(
  "/create",
  validateRequest(createTaskZodSchema),
  auth("user"),
  createTask
);
router.patch(
  "/:id",
  validateRequest(updateTaskZodSchema),
  auth("user"),
  updateTask
);
router.get("/:id", auth("user"), getSingleTask);

router.get("/", auth("user"), getAllTask);
router.get("/complete", auth("user"), completeAllTask);

export default router;
