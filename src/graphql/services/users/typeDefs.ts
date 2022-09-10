import { gql } from "apollo-server-lambda";

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    phone: String!
    updatedAt: String
    createdAt: String
  }

  input NewUserInput {
    email: String!
    password: String!
    phone: String!
    firstName: String!
    lastName: String!
  }
  type Query {
    getUsers: [User]
  }

  type Mutation {
    registerUser(newUser: NewUserInput): User!
  }

  type Image {
    id: ID!
    imageUrl: String
    likes: Int
  }
`;

export default typeDefs;
