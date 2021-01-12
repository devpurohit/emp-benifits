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
    sumCovered: String
    familyCovered: Boolean
    parentsCovered: Boolean
    maternityAssist: Boolean
  }

  type Benifits {
        healthInsurance: HealthInsurance
        gymMembership: Boolean
        freeDOC: Boolean
        numberOfPaidLeaves: String
        isWorkTimingFlexible: Boolean
        isRemoteFriendly: Boolean
    }

  type Company {
    id: ID!
    name: String
    website: String
    employeeCount: String
    benifits: Benifits
    industry: Industry
  }

  input CompanyInput {
    name: String!
    website: String
    employeeCount: String
    benifits: InputBenifits
    industry: Industry
  }

  input InputHealthInsurance {
     isProvided: Boolean
    sumCovered: String
    familyCovered: Boolean
    parentsCovered: Boolean
    maternityAssist: Boolean
  }

  input InputBenifits {
    healthInsurance: InputHealthInsurance
        gymMembership: Boolean
        freeDOC: Boolean
        numberOfPaidLeaves: String
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
    getCompany(companyId: String): Company
  }
  
  type Mutation {
    createCompany(company: CompanyInput!): Company
    createUser(user: UserInput!): User
  }
`


export default typeDefs;
