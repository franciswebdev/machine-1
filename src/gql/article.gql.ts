import { gql } from "graphql-request";

export const ARTICLE_QUERY = gql`
  {
    article(where: {id: "clmlc7ku042pm0a194hup452z"}) {
    # article(where: {id: "cl2wo8v3u1dc00b1fralok1er"}) {
      id
      headline
      contents {
        html
        text
      }
    }
  }`;