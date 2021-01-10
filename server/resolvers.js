import companyModel from './models/company';
import { nanoid } from 'nanoid';

const resolvers = {

  Query: {
    company() {
      return companyModel.list()
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
      }
   }
  }

export default resolvers;