import type { Request, Response, NextFunction } from "express";
import { logger } from "../logger";

type Problem = {
  type: string;
  title: string;
  status: number;
  detail?: string;
};

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  const status = typeof err?.status === "number" ? err.status : 500;
  const problem: Problem = {
    type: "about:blank",
    title: status >= 500 ? "Internal Server Error" : (err?.title || "Bad Request"),
    status,
    detail: process.env.NODE_ENV === "development" ? (err?.message || String(err)) : undefined,
  };

  logger.error({ err }, "request failed");
  res.status(status).type("application/problem+json").json(problem);
}


