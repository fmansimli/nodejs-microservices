import { RequestHandler } from "express";
import { DI } from "../ioc/di";
import { Team } from "../models/team";

export const getAll: RequestHandler = async (req, res, next) => {
  try {
    const teams = await DI.em.find(Team, {});

    res.status(200).json({ teams });
  } catch (error) {
    next(error);
  }
};

export const getById: RequestHandler = async (req, res, next) => {
  try {
    const team = await DI.em.find(Team, {});

    if (!team) {
      throw new Error("Team not found");
    }

    res.status(200).json({ team: { id: req.params.id } });
  } catch (error) {
    next(error);
  }
};

export const create: RequestHandler = async (req, res, next) => {
  const { name, about } = req.body;
  try {
    const team = new Team({ about, name });

    await DI.em.persistAndFlush(team);

    res.status(200).json({ team });
  } catch (error) {
    next(error);
  }
};
