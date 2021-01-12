import companyModel from './models/company';
import userModel from './models/user';
import { nanoid } from 'nanoid';
import user from './models/user';

const resolvers = {

  Query: {
    company() {
      return companyModel.list()
    },
    user() {
      return userModel.list()
    },
    getCompany(source, args) {
      return companyModel.find(args.companyId)
    }
   },
   Mutation: {
      createCompany(source, args) {
        const newCompany = {
          id: nanoid(),
          name: args.company.name,
          website: args.company.website,
          employeeCount: args.company.employeeCount,
          benifits: {
            gymMembership: args.company.benifits.gymMembership,
            freeDOC: args.company.benifits.freeDOC,
            numberOfPaidLeaves: args.company.benifits.numberOfPaidLeaves,
            isWorkTimingFlexible: args.company.benifits.isWorkTimingFlexible,
            isRemoteFriendly: args.company.benifits.isRemoteFriendly,
            healthInsurance: {
              isProvided: args.company.benifits.healthInsurance.isProvided,
              sumCovered: args.company.benifits.healthInsurance.sumCovered,
              familyCovered: args.company.benifits.healthInsurance.familyCovered,
              parentsCovered: args.company.benifits.healthInsurance.parentsCovered,
              maternityAssist: args.company.benifits.healthInsurance.maternityAssist
            }
          }
        }
        return companyModel.create(newCompany);
      },
      createUser(source, args) {
        const newUser = {
          id: nanoid(),
          name: args.user.name,
          email: args.user.email,
          company: args.user.company
        }
        return userModel.create(newUser);
      }
   }
  }

export default resolvers;