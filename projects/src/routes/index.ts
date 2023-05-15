import { Router } from "express";
import * as projectCont from "../controllers/projects.controller";

const router = Router();

router.get("/", projectCont.getAll);
router.get("/:id", projectCont.getById);

export default router;
