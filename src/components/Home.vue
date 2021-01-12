<template lang="">
    <div class="home">    
        <ul v-if="companies">
            <li v-for="(company, index) in companies" :key="company.id" @click="gotoCompany(company.id,index)">
                {{ company.name }} 
            </li>
        </ul>
    </div>
</template>
<script>
import { useQuery, useResult } from '@vue/apollo-composable'
import getCompaniesQuery from '../graphql/getCompanies.query.gql'
import router from '../router'
export default {
    
    name: 'Home',
    methods: {
            gotoCompany(id, index) {
                // Sending data directly here so no api call needed. 
                let comparisonData;
                if(index === 0) {
                    comparisonData = this.companies.slice(0,3);
                } else if(index === this.companies.length-1) {
                    // No checking here, so let's keep atleast 3 companies in the data
                    comparisonData = this.companies.slice(this.companies.length - 3)
                } else {
                    comparisonData = this.companies.slice(index-1,index+2);
                }
                router.push({ name: 'CompanyDetail', params: { companyId: id, companiesData: JSON.stringify(comparisonData) } })
            }
        },
    setup() {
        const { result } = useQuery(getCompaniesQuery)
        const companies = useResult(result, null , data => data.company)

        return {
            companies
        }
        
    }
    
}
</script>
<style >
    .home {
        display: flex;
        justify-content: center;
    }
  .home  ul {
        list-style: none;
    }

   .home   li:hover {
        cursor: pointer;
    }
</style>