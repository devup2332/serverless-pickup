import bcrypt from "bcryptjs";

export const comparePasswords = async (hash: string, password: string) => {
  return await bcrypt.compare(password, hash);
};
