import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { loginZodSchema } from "./auth.validation";
import { loginGenerate } from "./auth.controller";

const router = express.Router();

router.post("/jwt", validateRequest(loginZodSchema), loginGenerate);

export default router;
