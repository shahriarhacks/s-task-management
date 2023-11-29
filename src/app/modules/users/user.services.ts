import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserServices = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};
