import { RequestHandler } from "express";
import { loginUserServices } from "./auth.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

export const loginGenerate: RequestHandler = async (req, res, next) => {
  try {
    const { ...user } = req.body;
    const result = await loginUserServices(user);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Token Generated Successfully",
      token: result,
    });
  } catch (error) {
    next(error);
  }
};
