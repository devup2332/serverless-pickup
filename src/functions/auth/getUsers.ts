import { APIGatewayProxyHandler } from "aws-lambda";
export const getUsers: APIGatewayProxyHandler = async (e) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ message: "Works Fine", e }),
  };
};
