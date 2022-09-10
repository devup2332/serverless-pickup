import { prisma } from "../../../database/connection";
import { comparePasswords } from "../../../utils/auth/comparePasswords";
import { generateToken } from "../../../utils/auth/generateToken";

export const signinUserController = async (email: string, password: string) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (!user) return { message: "Email dosent exist", statusCode: 401 };

  const match = await comparePasswords(user.password, password);

  if (!match) return { message: "Password dosent match", statusCode: 401 };

  const token = generateToken(user);

  return {
    message: "User logged successfully in serverless",
    statusCode: 200,
    user: { email, id: user.id },
    token,
  };
};
