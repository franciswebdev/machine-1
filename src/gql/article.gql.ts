import { gql } from "graphql-request";

export const ARTICLE_QUERY = gql`
  {
    article(where: {id: "cl2wo8v3u1dc00b1fralok1er"}) {
      id
      headline
      contents {
        html
        text
      }
    }
  }`;