import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import User from "../users/user.model";
import { IAuthUser } from "./auth.interface";
import { jwtHelpers } from "../../../helpers/jwtHelper";
import config from "../../../config";
import { Secret } from "jsonwebtoken";

export const loginUserServices = async (payload: IAuthUser) => {
  const { email, role } = payload;
  const isUserExist = await User.findOne({ email });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User Not Found");
  }
  const token = jwtHelpers.createToken(
    { email, role },
    config.sec as Secret,
    config.exp as string
  );
  return token;
};
