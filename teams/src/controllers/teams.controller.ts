import { RequestHandler } from "express";
import { Team } from "../models/team";

import type { MikroORM } from "@mikro-orm/core";

export const getAll: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({ teams: [] });
  } catch (error) {
    next(error);
  }
};

export const getById: RequestHandler = (req, res, next) => {
  const { name, about } = req.body;
  try {
    res.status(200).json({ team: { id: req.params.id } });
  } catch (error) {
    next(error);
  }
};

export const create: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({ team: req.body });
  } catch (error) {
    next(error);
  }
};
