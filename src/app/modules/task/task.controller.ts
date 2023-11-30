import { RequestHandler } from "express";
import {
  createTaskServices,
  deleteTaskServices,
  getAllTaskServices,
  getCompleteServices,
  getSingleTaskServices,
  updateTaskServices,
} from "./task.services";
import sendResponse from "../../../shared/sendResponse";
import { ITask } from "./task.interface";
import httpStatus from "http-status";
import pick from "../../../shared/pick";
import { taskFilterableFields } from "./task.constant";
import { paginationFields } from "../../../constants/paginationFields";

export const createTask: RequestHandler = async (req, res, next) => {
  try {
    const { ...task } = req.body;
    const result = await createTaskServices(task);
    sendResponse<ITask>(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Task Created Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { ...updatedDoc } = req.body;
    const result = await updateTaskServices(id, updatedDoc);
    sendResponse<ITask>(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Task Updated Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllTask: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.query;
    const result = await getAllTaskServices(email);
    sendResponse<ITask[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All Task Retrieve Successfully",
      data: result.data,
    });
  } catch (error) {
    next(error);
  }
};

export const completeAllTask: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.query;
    const result = await getCompleteServices(email);
    sendResponse<ITask[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All Task Retrieve Successfully",
      data: result.data,
    });
  } catch (error) {
    next(error);
  }
};

export const getSingleTask: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getSingleTaskServices(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Single Task Retrieve Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTask: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteTaskServices(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Task Deleted Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
