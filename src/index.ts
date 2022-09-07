import server from "./graphql/apolloServer";
import cors from "cors";
cors();
export const handler = server.createHandler();
