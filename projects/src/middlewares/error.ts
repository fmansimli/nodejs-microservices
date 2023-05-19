import { RequestHandler, ErrorRequestHandler } from "express";
import { CustomError } from "../errors/custom-error";

export const get404: RequestHandler = (req, res, _next) => {
  try {
    res.status(404).json({
      httpCode: 404,
      message: "Not Found!",
    });
  } catch (error) {
    _next(error);
  }
};

export const handleError: ErrorRequestHandler = (err, req, res, _next) => {
  try {
    if (err instanceof CustomError) {
      return res.status(err.httpCode).json({
        httpCode: err.httpCode,
        errors: err.serialize(),
      });
    }
  } catch (error) {
    res.status(500).json({
      httpCode: 500,
      message: "unknown error.",
      errors: [],
    });
  }
};
