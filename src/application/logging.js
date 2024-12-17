import winston, { format, transport } from "winston";

export const logger = winston.logger({
  level: "info",
  format: winston.format.json(),
  transport: [new winston.transports.Console({})],
});
