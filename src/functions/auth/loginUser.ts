import { APIGatewayProxyHandler } from "aws-lambda";
import { loginUserController } from "../../controllers/services/users/loginUser";
const ALLOWED_HOSTS = ["https://pickup-pi.vercel.app"];
export const loginUser: APIGatewayProxyHandler = async (e) => {
  const origin = e.headers.origin!;
  let host = "";
  if (ALLOWED_HOSTS.includes(origin)) {
    host = origin;
  }
  const { email, password } = JSON.parse(e.body!);
  const res = await loginUserController(email, password);
  return {
    statusCode: 200,
    body: JSON.stringify(res),
    headers: {
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Credentials": true,
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  };
};
