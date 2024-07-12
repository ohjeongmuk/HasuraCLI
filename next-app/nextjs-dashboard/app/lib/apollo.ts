// app/lib/apollo.ts

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql', // 본인의 GraphQL Endpoint URL을 넣어주세요
  cache: new InMemoryCache(),
});

export default client;
