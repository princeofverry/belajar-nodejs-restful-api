import express from "express";

export const web = express();
web.use(express.json()); // because all of that using json
