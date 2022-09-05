import { db } from "../../../database/connection";
import { v4 } from "uuid";
import { hashPassword } from "../../../utils/auth/hashPassword";

export const registerUserController = async (
  email: string,
  password: string
) => {
  const id = v4();
  const hash = await hashPassword(password);
  await db.query("INSERT INTO users SET ?", [
    {
      email,
      password: hash,
      id,
    },
  ]);
  return id;
};
