import { Types } from "mongoose";
import { IUser } from "../users/user.interface";

export interface ITask {
  title: string;
  description: string;
  status: boolean;
  email: string;
}

export interface ITaskFIlters {
  search?: string;
  status?: string | boolean;
}
