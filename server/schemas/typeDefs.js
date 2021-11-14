const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
    friends: [User]
  }

  type Book {
    bookId: ID
    authors: String
    description: String
    title: String
    link: String
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    savedBooks: [__Schema]
    book: [Book]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: String!): User
    removeBook(bookId: ID!, body: String!): User
    addBook(bookId: ID!, body: String!): User
  }
`;

module.exports = typeDefs;