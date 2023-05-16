import { RequestHandler, ErrorRequestHandler } from "express";

export const get404: RequestHandler = (req, res, _next) => {
  try {
    res.status(404).json({ httpCode: 404 });
  } catch (error) {
    res.status(404).json({ httpCode: 404 });
  }
};

export const handleError: ErrorRequestHandler = (err, req, res, _next) => {
  try {
    res.status(500).json({ httpCode: 500 });
  } catch (error) {
    res.status(500).json({ httpCode: 500 });
  }
};
