import jwt from "jsonwebtoken";
import { environments } from "../../environments";

export const generateToken = (user: any) => {
  return jwt.sign(
    { email: user.email },
    environments.JSONWEBTOKENS.JWT_SECRET,
    {
      expiresIn: 86400,
    }
  );
};
