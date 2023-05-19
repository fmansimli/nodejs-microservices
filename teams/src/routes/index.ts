import { Router } from "express";
import * as teamsCont from "../controllers/teams.controller";

import { validate } from "../middlewares/validate";
import { CreateTeamDto } from "../validations/create-team.dto";

const router = Router();

router.get("/", teamsCont.getAll);
router.get("/:id", teamsCont.getById);

router.post("/", validate(CreateTeamDto), teamsCont.create);

export default router;
