import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import { RequestContext } from "@mikro-orm/core";
import { DI } from "./ioc/di";

import router from "./routes";
import { get404, handleError } from "./middlewares/error";
import { Config } from "./config/config";

Config.init();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((_req, _res, next) => RequestContext.create(DI.em, next));

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/teams", router);

app.use(get404);
app.use(handleError);

export default app;
