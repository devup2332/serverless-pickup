import { db } from "../../../database/connection";
import { comparePasswords } from "../../../utils/auth/comparePasswords";
import { generateToken } from "../../../utils/auth/generateToken";

export const loginUserController = async (email: string, password: string) => {
  const res = (await db.query("SELECT * FROM users WHERE email=?", [
    email,
  ])) as any;
  const user = res[0][0];
  if (!user) return { message: "Email dosent exist", statusCode: 401 };

  const match = await comparePasswords(user.password, password);

  if (!match) return { message: "Password dosent match", statusCode: 401 };

  const token = generateToken(user);

  return {
    message: "User logged successfully",
    statusCode: 200,
    user: { email, id: user.id },
    token,
  };
};
