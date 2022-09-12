import { APIGatewayProxyHandler } from "aws-lambda";
import { prisma } from "../../database/connection";

export const validateEmail: APIGatewayProxyHandler = async (e) => {
  const { email } = JSON.parse(e.body!);
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  const validate = user ? false : true;
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      validate,
    }),
  };
};
