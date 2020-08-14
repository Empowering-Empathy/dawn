import { gql } from "@apollo/client";

export const query = gql`
  {
    planets {
      id
      name
      cuisine
    }
  }
`;
