import type { Express } from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

export function applySecurity(app: Express, opts: { corsOrigin: string }) {
  app.set("trust proxy", 1);

  app.use(helmet());

  const origin = opts.corsOrigin === "*"
    ? opts.corsOrigin
    : opts.corsOrigin.split(",").map((o) => o.trim());

  app.use(
    cors({
      origin,
      credentials: true,
    }),
  );

  app.use(
    rateLimit({
      windowMs: 60 * 1000,
      limit: 300,
      standardHeaders: true,
      legacyHeaders: false,
    }),
  );
}


