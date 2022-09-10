import { APIGatewayProxyHandler } from "aws-lambda";
import { prisma } from "../../database/connection";
export const getUsers: APIGatewayProxyHandler = async (e) => {
  const res = await prisma.user.findMany();
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ message: "Works Fine", res, e }),
  };
};
