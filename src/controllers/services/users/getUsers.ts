import { db } from "../../../database/connection";

export const getUsersController = async () => {
  const res = (await db.query("SELECT * FROM users")) as any;
  return res[0];
};