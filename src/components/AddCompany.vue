<template lang="">
    <div class="short-width mx-auto" >
        <form @submit.prevent="enterUser" v-if="state.onStep1">
            <div class="form-group">
                <input type="text" class="form-control" id="userName" placeholder="Name" v-model="state.user.name">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="userCompany" placeholder="Company" v-model="state.user.company">
            </div>
            <div class="form-group">
                <input type="email" class="form-control" id="userEmail" placeholder="Email" v-model="state.user.email">
            </div>
            <button class="btn btn-primary" >Submit</button>
        </form>
        <form @submit.prevent="enterCompany" v-if="state.onStep2">
            <div class="form-group">
                <input type="text" class="form-control" id="name" placeholder="Name" v-model="state.company.name">
            </div>
            <div class="form-group">
                <input type="text" class="form-control " id="website" placeholder="Website" 
                       v-model="state.company.website"
                       v-bind:class="{ 'is-invalid': state.company.website !== '' && (state.user.email.split('@')[1] !== state.company.website.split('www.')[1])}"
                       >
                <div class="invalid-feedback" >
                Company's domain doesn't match with the user's email.
                </div>
            </div>
            <div class="form-group">
                <input type="number" class="form-control" id="employeeCount" placeholder="Employee Count" v-model="state.company.employeeCount">
            </div>
            <div class="form-group">
                <select class="form-control" id="industrySelect">
                    <option disabled selected="selected"> Select Industry</option>
                    <option value='IT'>IT</option>
                    <option value='HEALTH'>Health</option>
                    <option value='AUTO'>Automobile</option>
                    <option value='FINANCE'>Finance</option>
                </select>
                
            </div>

            <hr>

            <h5>Employee Benifits</h5>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="healthInsurance" v-model="state.company.benifits.healthInsurance.isProvided">
                <label class="form-check-label" for="healthInsurance">Health Insurance</label>
            </div>
                    <div class="health-benifits" v-if="state.company.benifits.healthInsurance.isProvided">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="familyCovered" v-model="state.company.benifits.healthInsurance.familyCovered">
                            <label class="form-check-label" for="familyCovered">Family Covered</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="parentsCovered" v-model="state.company.benifits.healthInsurance.parentsCovered">
                            <label class="form-check-label" for="parentsCovered">Parents Covered</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="maternityAssist" v-model="state.company.benifits.healthInsurance.maternityAssist">
                            <label class="form-check-label" for="maternityAssist">Maternity Assistance</label>
                        </div>
                        <div class="form-group">
                            <input type="number" class="form-control" id="sumCovered" placeholder="Sum Covered" v-model="state.company.benifits.healthInsurance.sumCovered">
                        </div>
                    </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="gymMembership" v-model="state.company.benifits.gymMembership">
                <label class="form-check-label" for="gymMembership">Gym Membership</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="freeDOC" v-model="state.company.benifits.freeDOC">
                <label class="form-check-label" for="freeDOC">Free Doctor on call</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="flexibleTiming" v-model="state.company.benifits.isWorkTimingFlexible">
                <label class="form-check-label" for="flexibleTiming">Flexible work timings</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="remoteFriendly" v-model="state.company.benifits.isRemoteFriendly">
                <label class="form-check-label" for="remoteFriendly">Remote Friendly</label>
            </div>
            <div class="form-group">
                <input type="number" class="form-control" id="paidLeaves" placeholder="Paid Leaves" v-model="state.company.benifits.numberOfPaidLeaves">
            </div>
            <button class="btn btn-primary" >Submit</button>

        </form>
    </div>
</template>
<script>
import { reactive } from 'vue';
import { useMutation } from '@vue/apollo-composable'

import router from '../router'
import createUserMutation from '../graphql/createUser.mutation.gql'
import createCompanyMutation from '../graphql/createCompany.mutation.gql'

export default {
    name: 'AddCompany',
    setup() {
        const state = reactive({
            user: {
                name: '',
                email: '',
                company: ''
            },
            company: {
                name: '',
                website: '',
                employeeCount: null,
                industry: 'IT',
                benifits: {
                    healthInsurance: {
                        isProvided: false,
                        sumCovered: null,
                        familyCovered: false,
                        parentsCovered: false,
                        maternityAssist: false,
                    },
                    gymMembership: false,
                    freeDOC: false,
                    numberOfPaidLeaves: null,
                    isWorkTimingFlexible: false,
                    isRemoteFriendly: false
                }

            },
            onStep1: true,
            onStep2: false
        });

        function enterUser() {
            createUser({ 
                        "user" : {
                            "name": state.user.name,
                            "email": state.user.email,
                            "company" : state.user.company
                            }
                        });
            state.onStep1 = false;
            state.onStep2 = true;
         }

         function enterCompany() {
             createCompany({
                 "company": {
                        "name": state.company.name,
                        "website": state.company.website,
                        "employeeCount": +state.company.employeeCount,
                        "industry": state.company.industry,
                        "benifits": {
                            "healthInsurance": {
                                "isProvided":state.company.benifits.healthInsurance.isProvided,
                                "sumCovered":state.company.benifits.healthInsurance.sumCovered,
                                "familyCovered":state.company.benifits.healthInsurance.familyCovered,
                                "parentsCovered":state.company.benifits.healthInsurance.parentsCovered,
                                "maternityAssist":state.company.benifits.healthInsurance.maternityAssist,
                            },
                            "gymMembership": state.company.benifits.gymMembership,
                            "freeDOC": state.company.benifits.freeDOC,
                            "numberOfPaidLeaves": state.company.benifits.numberOfPaidLeaves,
                            "isWorkTimingFlexible": state.company.benifits.isWorkTimingFlexible,
                            "isRemoteFriendly": state.company.benifits.isRemoteFriendly
                        }
                 }
             });
         }
            // eslint-disable-next-line no-unused-vars
            const { mutate: createUser, onDone: onUserCreated } = useMutation(createUserMutation)
            onUserCreated((res) => {
                console.log('new', res.data.createUser);
                })

            const { mutate: createCompany, onDone: onCompanyCreated } = useMutation(createCompanyMutation)
            onCompanyCreated((res) => {
                console.log('new', res.data.createCompany);
                router.push({ name: 'CompanyDetail', params: { companyId: res.data.createCompany.id } })
                })

        return {
            state,
            enterUser,
            enterCompany
        }
    }
    
}
</script>
<style >
    .short-width {
        max-width: 30%;
        margin: 50px;
    }

    .form-check {
        width: max-content;
        margin-bottom: 4px;
    }

    h5 {
        margin: 45px 0;
    }

    .health-benifits {
        margin-left: 3rem;
    }
</style>