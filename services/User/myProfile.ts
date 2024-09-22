import { gql } from "@apollo/client";

export const Profile = gql`
query {
  myProfile {
    id
    name
    avatar
  }
}
`;