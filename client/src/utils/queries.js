import gql from 'graphql-tag';

export const GET_ME = gql`
  {
    me {
        _id
        username
        email
        bookCount
        friends
        savedBooks {
            bookId
            authors
            description
            title
            link
            image }
        }
    }
`;