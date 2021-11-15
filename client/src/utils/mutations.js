import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($saveBook: String!) {
    saveBook(saveBook: $saveBook) {
      _id
      saveBook
      createdAt
      username
      removeBook
      addBook {
        bookId
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($removeBook: ID!, $removeBook: String!) {
    removeBook(removeBook: $removeBook, removeBook: $removeBook) {
        _id
        saveBook
        createdAt
        username
        removeBook
        addBook {
          bookId
        }
      }
    }
`;