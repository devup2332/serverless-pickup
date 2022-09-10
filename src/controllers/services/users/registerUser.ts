import { prisma } from "../../../database/connection";
import { v4 } from "uuid";
import { hashPassword } from "../../../utils/auth/hashPassword";
import { NewUser } from "../../../models/NewUser";
import { Prisma } from "@prisma/client";

export const registerUserController = async (payload: NewUser) => {
  const { password, email, firstName, lastName, phone } = payload;
  const id = v4();
  const hash = await hashPassword(password);
  const user: Prisma.UserCreateInput = {
    id,
    email,
    firstName,
    lastName,
    phone,
    password: hash,
  };
  const response = await prisma.user.create({
    data: user,
  });
  return response;
};
