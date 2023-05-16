import { Router } from "express";
import * as teamsCont from "../controllers/teams.controller";

const router = Router();

router.get("/", teamsCont.getAll);
router.get("/:id", teamsCont.getById);

export default router;
