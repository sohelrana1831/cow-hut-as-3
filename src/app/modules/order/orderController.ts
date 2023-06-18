// orders control

import { RequestHandler } from "express";
import { OrderServices } from "./orderServices";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";

const createOrders: RequestHandler = catchAsync(async (req, res, next) => {
  const data = req.body;
  const result = await OrderServices.createOrders(data);
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Create Order successfully!",
    data: result,
  });
  next();
});

const getOrders: RequestHandler = catchAsync(async (req, res) => {
  const result = await OrderServices.getOrders();

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Orders retrieved successfully",
    data: result,
  });
});

export const OrderController = {
  createOrders,
  getOrders,
};
