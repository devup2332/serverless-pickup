import server from "./graphql/apolloServer";
import express from "express";
import cors from "cors";
export const handler = server.createHandler({
  expressAppFromMiddleware: (middleware) => {
    const app = express();
    app.use(
      cors({
        origin: "*",
      })
    );
    app.use(middleware);
    return app;
  },
});
