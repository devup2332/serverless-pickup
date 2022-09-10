import { prisma } from "../../../database/connection";

export const getUsersController = async () => {
  const response = await prisma.user.findMany();
  return response;
};
