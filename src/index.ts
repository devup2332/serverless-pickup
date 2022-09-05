import server from "./graphql/apolloServer";

export const handler = server.createHandler();
