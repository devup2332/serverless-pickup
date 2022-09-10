import { APIGatewayProxyHandler } from "aws-lambda";
import { signinUserController } from "../../controllers/services/users/signinUser";
export const signinUser: APIGatewayProxyHandler = async (e) => {

  try {
    const { email, password } = JSON.parse(e.body!);
    if (!email || !password)
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ message: "Error credentials not found" }),
      };

    const res = await signinUserController(email, password);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(res),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  }
};
