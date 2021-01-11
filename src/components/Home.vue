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
import { apolloClient, getCompaniesQuery } from '../graph.service'
import router from '../router'

export default {
    
    name: 'Home',
     data: function () {
                return {
                companies: []
                }
  },
    mounted () {
        this.getCompanies();
    },
  methods: {
        async getCompanies() {
                const data1 = await apolloClient.query({ query: getCompaniesQuery});
                const companyData = data1.data.company
                this.companies =[...data1.data.company]
                this.companies = companyData
        },
        gotoCompany(id) {
            router.push({ name: 'CompanyDetail', params: { companyId: id } })
        }
    }
    
}
</script>
<style >
    ul {
        list-style: none;
    }
</style>