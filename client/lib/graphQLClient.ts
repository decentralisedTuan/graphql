import { GraphQLClient } from "graphql-request";

const endpoint = "http://localhost:3001/graphql";

export const graphQLClient = new GraphQLClient(endpoint, {
  method: `GET`,
  jsonSerializer: {
    parse: JSON.parse,
    stringify: JSON.stringify,
  },
});
