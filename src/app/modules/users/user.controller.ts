import { RequestHandler } from "express";
import { createUserServices } from "./user.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IUser } from "./user.interface";

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { ...user } = req.body;
    const result = await createUserServices(user);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Create User Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
