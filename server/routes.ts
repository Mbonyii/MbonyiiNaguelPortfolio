import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { portfolioDataSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/v1/portfolio", async (_req, res) => {
    try {
      const portfolioData = await storage.getPortfolioData();
      const parsed = portfolioDataSchema.safeParse(portfolioData);
      if (!parsed.success) {
        console.error("Portfolio validation errors:", JSON.stringify(parsed.error.errors, null, 2));
        return res.status(500).json({ 
          error: "Invalid portfolio data format",
          details: process.env.NODE_ENV === "development" ? parsed.error.errors : undefined
        });
      }
      res.json(parsed.data);
    } catch (error) {
      console.error("Portfolio fetch error:", error);
      res.status(500).json({ error: "Failed to fetch portfolio data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
