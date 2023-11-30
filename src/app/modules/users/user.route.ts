import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { createUserZodSchema } from "./user.validation";
import { createUser, getSingleUser } from "./user.controller";

const router = express.Router();

router.post("/create", validateRequest(createUserZodSchema), createUser);
router.get("/:email", getSingleUser);

export default router;
