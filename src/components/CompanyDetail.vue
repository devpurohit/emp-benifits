<template lang="" >
    <div class="short-width mx-auto" v-if="currentCompany">
        <h3>{{currentCompany.name}}</h3>

        <div class="company-details">
            <p>Website: {{currentCompany.website}}</p>
            <p>Employee Count: {{currentCompany.employeeCount}}</p>
        </div>
        <hr>

        
        <h5>Employee Benifits</h5>
        <div class="company-benifits">
            <p>Health Insurance: {{currentCompany.benifits.healthInsurance.isProvided? 'Yes' : 'No'}}</p>
                <div class="health-benifits1" v-if="currentCompany.benifits.healthInsurance.isProvided">
                    <p>Maternity Assistance: {{currentCompany.benifits.healthInsurance.maternityAssist ? 'Yes' : 'No'}}</p>
                    <p>Family Covered: {{currentCompany.benifits.healthInsurance.familyCovered ? 'Yes' : 'No'}}</p>
                    <p>Parents Covered: {{currentCompany.benifits.healthInsurance.parentsCovered ? 'Yes' : 'No'}}</p>
                    <p>Amount Covered: {{currentCompany.benifits.healthInsurance.sumCovered}}</p>
                </div>
            <p>Gym Membership: {{currentCompany.benifits.gymMembership ? 'Yes' : 'No'}}</p>
            <p>Free Doctor on call: {{currentCompany.benifits.freeDOC ? 'Yes' : 'No'}}</p>
            <p>Flexible Work Timings: {{currentCompany.benifits.isWorkTimingFlexible ? 'Yes' : 'No'}}</p>
            <p>Remote Friendly: {{currentCompany.benifits.isRemoteFriendly ? 'Yes' : 'No'}}</p>
            <p>Paid Leaves: {{currentCompany.benifits.numberOfPaidLeaves}}</p>
        </div>


        <hr>
        </div>

        <div class='wrapper mx-auto' v-if="state.comparisonData && currentCompany" >
            <div class='package' v-for="company of state.comparisonData" :key="company.id">
                <div class='name'>{{company.name}}</div>
                <div class='price'>{{company.website}}</div>
                <div class='price'><strong>{{company.employeeCount}}</strong> employees</div>
                <hr>
                <ul>
                <li>
                    Health Insurance  <strong>{{company.benifits.healthInsurance.isProvided ? '&check;' : 'X'}}</strong>
                </li>
                <li>
                    Family Covered  <strong>{{company.benifits.healthInsurance.familyCovered ? '&check;' : 'X'}}</strong>
                </li>
                <li>
                    Parents Covered  <strong>{{company.benifits.healthInsurance.parentsCovered ? '&check;' : 'X'}}</strong>
                </li>
                <li>
                    Maternity Assistance <strong>{{company.benifits.healthInsurance.maternityAssist ? '&check;' : 'X'}}</strong>
                </li>
                <li>
                    Sum Covered  <strong>{{company.benifits.healthInsurance.sumCovered || 0}}</strong>
                </li>
                <li>
                    Gym Membership  <strong>{{company.benifits.gymMembership ? '&check;' : 'X'}}</strong>
                </li>
                <li>
                    Free Doctor on call  <strong>{{company.benifits.freeDOC ? '&check;' : 'X'}}</strong>
                </li>
                <li>
                    Flexible Worktimings  <strong>{{company.benifits.isWorkTimingFlexible ? '&check;' : 'X'}}</strong>
                </li>
                <li>
                    Remote Friendly  <strong>{{company.benifits.isRemoteFriendly ? '&check;' : 'X'}}</strong>
                </li>
                <li>
                    Paid Leaves  <strong>{{company.benifits.numberOfPaidLeaves || 0}}</strong>
                </li>
                
                
                </ul>
            </div>
    </div>
    
</template>
<script>
import { useQuery, useResult } from '@vue/apollo-composable'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'

import getCompanyQuery from '../graphql/getCompany.query.gql'

export default {
    name: 'CompanyDetail',
    setup() {
        const state = reactive({
            companyId: '',
            comparisonData: null
            });
        const route = useRoute();
        state.companyId = route.params.companyId;
        const { result } = useQuery(getCompanyQuery, () => ({
              id: state.companyId,
        }));
        const currentCompany = useResult(result, null , data => data.getCompany);
        if(route.params.companiesData) {
            state.comparisonData = JSON.parse(route.params.companiesData);
        }
        return {
            state,
            currentCompany
        }
        
    }
    
}
</script>
<style >
    .short-width {
        max-width: 30%;
        margin-top: 50px;
    }

/*
 * Developer: Alireza Eskandarpour Shoferi
 * Designer: Wouter de Bres (dribbble.com/wdeb)
 *
 * Distributed under the terms of the MIT license
 * https://opensource.org/licenses/MIT
 */
.wrapper {
  
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  color: #9f9f9f;
  font-size: 15px;
  display: flex;
justify-content: center;
margin-bottom: 50px;
}

.package {
  box-sizing: border-box;
  width: 301px;
  border: 3px solid #e8e8e8;
  border-radius: 7px;
  display: inline-block;
  padding: 24px;
  text-align: center;
  float: left;
  transition: margin-top 0.5s linear;
  position: relative;
  margin-right: 11px;
}
.package:hover {
  margin-top: -30px;
  transition: margin-top 0.3s linear;
}

.name {
  color: #565656;
  font-weight: 300;
  font-size: 3rem;
  margin-top: -5px;
}

.price {
  margin-top: 7px;
  font-weight: bold;
}


hr {
  background-color: #dedede;
  border: none;
  height: 1px;
}

.trial {
  font-size: 0.9rem;
  font-weight: 600;
  padding: 2px 21px 2px 21px;
  color: #33c4b6;
  border: 1px solid #e4e4e4;
  display: inline-block;
  border-radius: 15px;
  background-color: white;
  position: relative;
  bottom: -20px;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 29px;
}

li {
  margin-bottom: 15px;
}



.brilliant {
  border-color: #33c4b6;
}
.brilliant::before {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 64px 64px 0 0;
  border-color: #3bc6b8 transparent transparent transparent;
  position: absolute;
  left: 0;
  top: 0;
  content: "";
}
.brilliant::after {
  color: white;
  position: absolute;
  left: 9px;
  top: 6px;
  text-shadow: 0 0 2px #37c5b6;
  font-size: 1.4rem;
}
</style>