import { gql } from "apollo-server-lambda";

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    registerUser(email: String, password: String): User!
  }

  type Image {
    id: ID!
    imageUrl: String
    likes: Int
  }
`;

export default typeDefs;
