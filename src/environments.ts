export const environments = {
  DATABASE: {
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_USERNAME: process.env.DB_USERNAME || "root",
    DB_PASSWORD: process.env.DB_PASSWORD || "",
    DB_DATABASE: process.env.DB_DATABASE || "",
  },
  JSONWEBTOKENS: {
    JWT_SECRET: process.env.JWT_SECRET || "secret",
  },
};
