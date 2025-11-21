// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  portfolioData;
  constructor() {
    this.portfolioData = {
      about: {
        name: "Mbonyingabo",
        title: "Software Engineer",
        bio: "Passionate developer with expertise in building innovative solutions using modern technologies. Experienced in full-stack development, artificial intelligence, and cloud computing. Always eager to learn and tackle challenging problems.",
        location: "Kigali, Rwanda",
        email: "mbonyiiinaguel@gmail.com",
        linkedin: "https://www.linkedin.com/in/mbonyingabo-naguel-8a9bb6317/",
        github: "https://github.com/Mbonyii",
        photo: "/images/Nagz.jpeg"
      },
      projects: [
        {
          id: "1",
          title: "Smart Resource Monitoring Dashboard",
          description: "A web-based dashboard designed to collect, visualize, and analyze data on community resources such as water, electricity, and waste usage. The platform allows users and administrators to monitor consumption trends and make data-driven decisions to optimize resource use.",
          technologies: ["Python", "Flask/Django", "JavaScript", "React/Vue", "HTML", "CSS", "REST APIs", "MQTT", "JSON"],
          github: "https://github.com/Mbonyii/resource-monitoring",
          link: "https://resource-monitoring-demo.vercel.app"
        },
        {
          id: "2",
          title: "Cyber Hygiene Awareness Platform",
          description: "A simple, interactive web platform that educates users on safe online practices, including password management, phishing awareness, and digital privacy protection. The system provides quizzes, real-world examples, and daily security tips.",
          technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Flask/Django", "SQLite", "Firebase"],
          github: "https://github.com/Mbonyii/cyber-hygiene",
          link: "https://cyber-hygiene-demo.vercel.app"
        },
        {
          id: "3",
          title: "Data-Driven Youth Employment Insights App",
          description: "A data visualization platform that uses open datasets to display youth employment and education trends across regions. It provides interactive charts and insights to help policymakers, educators, and youth identify areas for improvement.",
          technologies: ["Python", "Pandas", "NumPy", "Plotly", "D3.js", "HTML", "CSS", "JavaScript", "REST APIs"],
          github: "https://github.com/Mbonyii/youth-employment-insights",
          link: "https://youth-employment-demo.vercel.app"
        },
        {
          id: "4",
          title: "Community Problem-Solving Platform",
          description: "A collaborative online platform that allows users to post community challenges (like waste management or water shortages) and enables volunteers or developers to propose innovative solutions. It includes voting features to prioritize issues and track progress.",
          technologies: ["MongoDB", "Express", "React", "Node.js", "PostgreSQL", "Django", "Tailwind CSS"],
          github: "https://github.com/Mbonyii/community-platform",
          link: "https://community-platform-demo.vercel.app"
        },
        {
          id: "5",
          title: "AI-Enhanced Student Learning Recommender",
          description: "An intelligent system that recommends personalized learning materials based on students' interests, progress, and weaknesses. The model uses data-driven insights to guide learners toward suitable courses, books, or resources.",
          technologies: ["Python", "scikit-learn", "TensorFlow Lite", "Flask", "HTML", "CSS", "PostgreSQL"],
          github: "https://github.com/Mbonyii/learning-recommender",
          link: "https://learning-recommender-demo.vercel.app"
        }
      ],
      skills: [
        {
          category: "Programming Languages",
          items: ["JavaScript/TypeScript", "Python", "Java", "Go", "SQL"]
        },
        {
          category: "Frontend Development",
          items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML/CSS", "Responsive Design"]
        },
        {
          category: "Backend Development",
          items: ["Node.js", "Express", "Django", "FastAPI", "GraphQL", "REST APIs"]
        },
        {
          category: "Databases & Storage",
          items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"]
        },
        {
          category: "DevOps & Cloud",
          items: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "GitHub Actions"]
        },
        {
          category: "AI & Machine Learning",
          items: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "LangChain"]
        }
      ],
      experience: [
        {
          id: "1",
          title: "Software Engineer",
          company: "Rwanda Revenue Authority (RRA)",
          period: "Summer 2024",
          description: "Developed web applications using Spring Boot and React for revenue management systems.",
          achievements: [
            "Built robust backend APIs using Spring Boot framework",
            "Developed responsive frontend interfaces with React",
            "Contributed to revenue management system improvements"
          ]
        }
      ],
      education: [
        {
          id: "1",
          degree: "Bachelor of Science in Software Engineering",
          institution: "Adventist University of Central Africa",
          period: "2022 - 2026"
        }
      ],
      certifications: [
        {
          id: "1",
          name: "Responsive Web Design",
          issuer: "freeCodeCamp",
          date: "2022",
          link: "https://www.freecodecamp.org/"
        },
        {
          id: "2",
          name: "Oracle Cloud Infrastructure Certified AI Foundations Associate",
          issuer: "Oracle",
          date: "2025",
          link: "https://www.oracle.com/cloud/certification/"
        },
        {
          id: "3",
          name: "Oracle Cloud Infrastructure Certified Data Science Professional",
          issuer: "Oracle",
          date: "2025",
          link: "https://www.oracle.com/cloud/certification/"
        },
        {
          id: "4",
          name: "Professional Foundation Certificate",
          issuer: "ALX",
          date: "2025"
        },
        {
          id: "5",
          name: "ALX Prodev Frontend Developer",
          issuer: "ALX",
          date: "2025"
        },
        {
          id: "6",
          name: "JavaScript Algorithms and Data Structures",
          issuer: "freeCodeCamp",
          date: "2023",
          link: "https://www.freecodecamp.org/"
        },
        {
          id: "7",
          name: "Java Programming and Software Engineering Fundamentals Specialization",
          issuer: "Coursera",
          date: "2024",
          link: "https://www.coursera.org/"
        },
        {
          id: "8",
          name: "Python for Everybody",
          issuer: "Coursera",
          date: "2024",
          link: "https://www.coursera.org/"
        }
      ],
      leadership: [
        {
          id: "1",
          role: "Tech Lead - Open Source Initiative",
          organization: "Local Developer Community",
          period: "2021 - Present",
          description: "Leading open-source projects and organizing hackathons to promote collaborative development."
        },
        {
          id: "2",
          role: "Mentor",
          organization: "Code for Good",
          period: "2020 - Present",
          description: "Mentoring aspiring developers and helping them build their first projects."
        },
        {
          id: "3",
          role: "Chapter President",
          organization: "Association for Computing Machinery (ACM)",
          period: "2017 - 2018",
          description: "Organized technical workshops and coding competitions for university students."
        }
      ]
    };
  }
  async getPortfolioData() {
    return this.portfolioData;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { z } from "zod";
var projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  link: z.string().optional(),
  github: z.string().optional()
});
var skillSchema = z.object({
  category: z.string(),
  items: z.array(z.string())
});
var experienceSchema = z.object({
  id: z.string(),
  title: z.string(),
  company: z.string(),
  period: z.string(),
  description: z.string(),
  achievements: z.array(z.string()).optional()
});
var educationSchema = z.object({
  id: z.string(),
  degree: z.string(),
  institution: z.string(),
  period: z.string(),
  details: z.string().optional()
});
var certificationSchema = z.object({
  id: z.string(),
  name: z.string(),
  issuer: z.string(),
  date: z.string(),
  link: z.string().optional()
});
var leadershipSchema = z.object({
  id: z.string(),
  role: z.string(),
  organization: z.string(),
  period: z.string(),
  description: z.string()
});
var aboutSchema = z.object({
  name: z.string(),
  title: z.string(),
  bio: z.string(),
  location: z.string().optional(),
  email: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  website: z.string().optional(),
  photo: z.string().optional()
});
var portfolioDataSchema = z.object({
  about: aboutSchema,
  projects: z.array(projectSchema),
  skills: z.array(skillSchema),
  experience: z.array(experienceSchema),
  education: z.array(educationSchema),
  certifications: z.array(certificationSchema),
  leadership: z.array(leadershipSchema)
});

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/v1/portfolio", async (_req, res) => {
    try {
      const portfolioData = await storage.getPortfolioData();
      const parsed = portfolioDataSchema.safeParse(portfolioData);
      if (!parsed.success) {
        console.error("Portfolio validation errors:", JSON.stringify(parsed.error.errors, null, 2));
        return res.status(500).json({
          error: "Invalid portfolio data format",
          details: process.env.NODE_ENV === "development" ? parsed.error.errors : void 0
        });
      }
      res.json(parsed.data);
    } catch (error) {
      console.error("Portfolio fetch error:", error);
      res.status(500).json({ error: "Failed to fetch portfolio data" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
var vite_config_default = defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url2 = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url2, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/config.ts
import { cleanEnv, num, str, url } from "envalid";
function loadConfig() {
  const env = cleanEnv(process.env, {
    NODE_ENV: str({ choices: ["development", "test", "production"] }),
    PORT: num({ default: 5e3 }),
    CORS_ORIGIN: str({ default: "*" }),
    DATABASE_URL: str({ default: "" }),
    PUBLIC_BASE_URL: url({ default: "http://localhost:5000" })
  });
  return {
    nodeEnv: env.NODE_ENV,
    port: env.PORT,
    corsOrigin: env.CORS_ORIGIN,
    databaseUrl: env.DATABASE_URL,
    publicBaseUrl: env.PUBLIC_BASE_URL,
    isDev: env.NODE_ENV === "development",
    isProd: env.NODE_ENV === "production"
  };
}

// server/middleware/security.ts
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
function applySecurity(app2, opts) {
  app2.set("trust proxy", 1);
  app2.use(helmet());
  const origin = opts.corsOrigin === "*" ? opts.corsOrigin : opts.corsOrigin.split(",").map((o) => o.trim());
  app2.use(
    cors({
      origin,
      credentials: true
    })
  );
  app2.use(
    rateLimit({
      windowMs: 60 * 1e3,
      limit: 300,
      standardHeaders: true,
      legacyHeaders: false
    })
  );
}

// server/logger.ts
import pino from "pino";
var logger = pino({
  level: process.env.LOG_LEVEL || (process.env.NODE_ENV === "production" ? "info" : "debug"),
  transport: process.env.NODE_ENV === "production" ? void 0 : {
    target: "pino-pretty",
    options: { colorize: true, translateTime: "SYS:standard" }
  }
});

// server/middleware/error.ts
function errorHandler(err, _req, res, _next) {
  const status = typeof err?.status === "number" ? err.status : 500;
  const problem = {
    type: "about:blank",
    title: status >= 500 ? "Internal Server Error" : err?.title || "Bad Request",
    status,
    detail: process.env.NODE_ENV === "development" ? err?.message || String(err) : void 0
  };
  logger.error({ err }, "request failed");
  res.status(status).type("application/problem+json").json(problem);
}

// server/index.ts
var app = express2();
var config = loadConfig();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
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
  app.get("/healthz", (_req, res) => {
    res.status(200).json({ status: "ok" });
  });
  if (config.isDev) {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  app.use(errorHandler);
  const port = config.port;
  const isWindows = process.platform === "win32";
  server.listen({
    port,
    host: "0.0.0.0",
    ...isWindows ? {} : { reusePort: true }
  }, () => {
    log(`serving on port ${port}`);
  });
})();
