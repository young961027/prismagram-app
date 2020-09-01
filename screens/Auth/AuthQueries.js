import { gql } from "apollo-boost";

export const LOG_IN = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $user: String!
    $email: String!
    $firstName: String
    $lastName: String
  ) {
    createAccount(
      user: $user
      email: $email
      firstName: $firstName
      lastName: $lastName
    )
  }
`;

export const CONFIRM_SECRET = gql`
  mutation confirmSecret($secret: String!, $email: String!) {
    confirmSecret(secret: $secret, email: $email)
  }
`;
