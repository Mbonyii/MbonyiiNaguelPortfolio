import { cleanEnv, num, str, url } from "envalid";

export type AppConfig = ReturnType<typeof loadConfig>;

export function loadConfig() {
  const env = cleanEnv(process.env, {
    NODE_ENV: str({ choices: ["development", "test", "production"] }),
    PORT: num({ default: 5000 }),
    CORS_ORIGIN: str({ default: "*" }),
    DATABASE_URL: str({ default: "" }),
    PUBLIC_BASE_URL: url({ default: "http://localhost:5000" }),
  });

  return {
    nodeEnv: env.NODE_ENV,
    port: env.PORT,
    corsOrigin: env.CORS_ORIGIN,
    databaseUrl: env.DATABASE_URL,
    publicBaseUrl: env.PUBLIC_BASE_URL,
    isDev: env.NODE_ENV === "development",
    isProd: env.NODE_ENV === "production",
  } as const;
}


