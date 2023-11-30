import { ITask } from "./task.interface";
import Task from "./task.model";

export const createTaskServices = async (payload: ITask) => {
  const result = await Task.create(payload);
  return result;
};

export const updateTaskServices = async (
  id: string,
  payload: Partial<ITask>
) => {
  const result = await Task.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

export const getAllTaskServices = async (email: any) => {
  const result = await Task.find({ email, status: false }).sort({
    createdAt: 1,
  });

  return {
    data: result,
  };
};

export const getCompleteServices = async (email: any) => {
  const result = await Task.find({ email, status: true }).sort({
    updatedAt: 1,
  });

  return {
    data: result,
  };
};

export const getSingleTaskServices = async (id: string) => {
  const result = await Task.findOne({ _id: id });
  return result;
};
export const deleteTaskServices = async (id: string) => {
  const result = await Task.deleteOne({ _id: id });
  return result;
};
