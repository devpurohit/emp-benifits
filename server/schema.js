import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type User {
    id: ID!
    name: String
    email: String
    company: Company
  }

  type HealthInsurance {
    isProvided: Boolean
    sumCovered: Int
    familyCovered: Boolean
    parentsCovered: Boolean
    maternityAssist: Boolean
  }

  type Benifits {
        healthInsurance: HealthInsurance
        gymMembership: Boolean
        freeDOC: Boolean
        numberOfPaidLeaves: Int
        isWorkTimingFlexible: Boolean
        isRemoteFriendly: Boolean
    }

  type Company {
    id: ID!
    name: String
    website: String
    employeeCount: Int
    benifits: Benifits
  }

  input CompanyInput {
    name: String!
    website: String
    employeeCount: Int
    benifits: InputBenifits
  }

  input InputHealthInsurance {
     isProvided: Boolean
    sumCovered: Int
    familyCovered: Boolean
    parentsCovered: Boolean
    maternityAssist: Boolean
  }

  input InputBenifits {
    healthInsurance: InputHealthInsurance
        gymMembership: Boolean
        freeDOC: Boolean
        numberOfPaidLeaves: Int
        isWorkTimingFlexible: Boolean
        isRemoteFriendly: Boolean
  }

  type Query {
    user: [User]
    company: [Company]
  }
  
  type Mutation {
    createCompany(company: CompanyInput!): Company
  }
`


export default typeDefs;
