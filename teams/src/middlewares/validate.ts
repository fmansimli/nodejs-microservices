import { plainToInstance } from "class-transformer";
import { validate as validateBody } from "class-validator";

import { Request, Response, NextFunction } from "express";

export const validate = (dto: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teamDto = plainToInstance(dto, req.body);
      const errors = await validateBody(teamDto);

      if (errors.length) {
        return next(errors);
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};
