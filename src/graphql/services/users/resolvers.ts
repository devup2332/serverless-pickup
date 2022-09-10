import { getUsersController } from "../../../controllers/services/users/getUsers";
import { registerUserController } from "../../../controllers/services/users/registerUser";
const resolvers = {
  Query: {
    getUsers: () => {
      return getUsersController();
    },
  },
  Mutation: {
    registerUser: async (_: any, { newUser }: any) => {
      const user = await registerUserController(newUser);
      return user;
    },
  },
};

export default resolvers;
