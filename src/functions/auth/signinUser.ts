import { APIGatewayProxyHandler } from "aws-lambda";
import { loginUserController } from "../../controllers/services/users/loginUser";
export const signinUser: APIGatewayProxyHandler = async (e) => {
  const { email, password } = JSON.parse(e.body!);
  const res = await loginUserController(email, password);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": '*',
    },
    body: JSON.stringify(res),
  };
};
