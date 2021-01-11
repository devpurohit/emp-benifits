import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type User {
    id: ID!
    name: String
    email: String
    company: String
  }

  input UserInput {
    name: String
    email: String
    company: String
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
    name: String
    website: String
    employeeCount: Int
    benifits: Benifits
    industry: Industry
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

  enum Industry {
    IT
    HEALTH
    AUTO
    FINANCE
  }

  type Query {
    user: [User]
    company: [Company]
  }
  
  type Mutation {
    createCompany(company: CompanyInput!): Company
    createUser(user: UserInput!): User
  }
`


export default typeDefs;
