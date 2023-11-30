import httpStatus from "http-status";
import config from "../../../config";
import ApiError from "../../../errors/ApiError";
import { jwtHelpers } from "../../../helpers/jwtHelper";
import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserServices = async (payload: IUser) => {
  const { email, role } = payload;
  const existUer = await User.findOne({ email });
  if (existUer) {
    throw new ApiError(httpStatus.CONFLICT, "User Already Exist");
  }
  const token = jwtHelpers.createToken(
    { email, role },
    config.sec as string,
    config.exp as string
  );
  const result = await User.create(payload);
  return {
    result,
    token,
  };
};

export const getSingleUserServices = async (email: string) => {
  const result = await User.findOne({ email });
  return result;
};
