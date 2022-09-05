import mysql from "mysql2/promise";
import { environments } from "../environments";

export const db = mysql.createPool({
  host: environments.DATABASE.DB_HOST,
  user: environments.DATABASE.DB_USERNAME,
  password: environments.DATABASE.DB_PASSWORD,
  database: environments.DATABASE.DB_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
});
