import gql from "graphql-tag";
export const ALL_WORDS = gql`
  {
    getWords {
      id
      title
      examples {
        text
      }
      definitions
      lexicalCategory
      audioFile
    }
  }
`;
