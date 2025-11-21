import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { loadConfig } from "./config";
import { applySecurity } from "./middleware/security";
import { errorHandler } from "./middleware/error";
import { logger } from "./logger";

const app = express();
const config = loadConfig();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// basic request logging
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    logger.info({ method: req.method, path: req.path, status: res.statusCode, durationMs: duration }, "request");
  });
  next();
});

applySecurity(app, { corsOrigin: config.corsOrigin });

(async () => {
  const server = await registerRoutes(app);

  // Health check - must be before Vite catch-all
  app.get("/healthz", (_req: Request, res: Response) => {
    res.status(200).json({ status: "ok" });
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (config.isDev) {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Error handler must come after all routes including Vite catch-all
  app.use(errorHandler);

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = config.port;
  const isWindows = process.platform === "win32";
  server.listen({
    port,
    host: "0.0.0.0",
    ...(isWindows ? {} : { reusePort: true }),
  }, () => {
    log(`serving on port ${port}`);
    
  });
})();
