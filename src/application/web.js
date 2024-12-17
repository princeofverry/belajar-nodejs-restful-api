import express from "express";
import { publicRouter } from "../route/public-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";

export const web = express();
web.use(express.json()); // because all of that using json
web.use(publicRouter);
web.use(errorMiddleware);
