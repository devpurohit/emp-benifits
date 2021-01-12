<template lang="">
    <div>    
        <ul v-if="companies">
            <li v-for="item in companies" :key="item.id" @click="gotoCompany(item.id)">
                {{ item.name }} - {{ item.employeeCount }} - {{ item.website }}
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
            gotoCompany(id) {
                router.push({ name: 'CompanyDetail', params: { companyId: id } })
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
    ul {
        list-style: none;
    }

    li:hover {
        cursor: pointer;
    }
</style>