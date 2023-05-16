import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import router from "./routes";

import { get404, handleError } from "./middlewares/error";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/projects", router);

app.use(get404);
app.use(handleError);

export default app;
