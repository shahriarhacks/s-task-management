import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwtHelper";
import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserServices = async (payload: IUser) => {
  const { email, role } = payload;
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
