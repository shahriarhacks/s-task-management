import { RequestHandler } from "express";
import { createUserServices, getSingleUserServices } from "./user.services";
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
      token: result.token,
      data: result.result,
    });
  } catch (error) {
    next(error);
  }
};

export const getSingleUser: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.params;
    const result = await getSingleUserServices(email);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User Retrieve Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
