import { gql } from "apollo-boost";

const LOG_IN = gql`
    mutation requestSecret(email:$String){
        requestSecret(email: $email)
    }
`;
