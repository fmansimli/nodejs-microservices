import { RequestHandler } from "express";

export const getAll: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({ projects: [] });
  } catch (error) {
    next(error);
  }
};

export const getById: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({ post: { id: req.params.id } });
  } catch (error) {
    next(error);
  }
};
