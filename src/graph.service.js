import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


const apolloClient = new ApolloClient({
    uri: 'http://localhost:8500/graphql', 
    cache: new InMemoryCache()
});

const getCompaniesQuery = gql`
        query {
  company {
    id
    name
    website
    employeeCount
    benifits {
      gymMembership
      freeDOC
      numberOfPaidLeaves
      isWorkTimingFlexible
      isRemoteFriendly
      healthInsurance {
        isProvided
        sumCovered
        familyCovered
        parentsCovered
        maternityAssist
      }
    }
  }
}`;

export { apolloClient, getCompaniesQuery}