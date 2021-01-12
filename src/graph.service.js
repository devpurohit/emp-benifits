import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const apolloClient = new ApolloClient({
    uri: 'http://localhost:8500/graphql', 
    cache: new InMemoryCache()
});

const createUserQuery = gql`
mutation createUser($user: UserInput!) {
  createUser(user: $user) {
    name
    email
  }
}`

export { apolloClient, createUserQuery}