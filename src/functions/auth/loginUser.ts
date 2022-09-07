import { APIGatewayProxyHandler } from "aws-lambda";
import { loginUserController } from "../../controllers/services/users/loginUser";

export const loginUser: APIGatewayProxyHandler = async (e) => {
  const { email, password } = JSON.parse(e.body!);
  const res = await loginUserController(email, password);
  return {
    statusCode: 200,
    body: JSON.stringify(res),
    headers: {
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Accept": "*/*",
      "Content-Type": "application/json",
    },
  };
};
