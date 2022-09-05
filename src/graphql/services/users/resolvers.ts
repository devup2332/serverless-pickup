import { getUsersController } from "../../../controllers/services/users/getUsers";
import { registerUserController } from "../../../controllers/services/users/registerUser";

interface Credentials {
  email: string;
  password: string;
}
const resolvers = {
  Query: {
    getUsers: () => {
      return getUsersController();
    },
  },
  Mutation: {
    registerUser: async (_: any, { email, password }: Credentials) => {
      const id = await registerUserController(email, password);
      return { email, password, id };
    },
  },
};

export default resolvers;
