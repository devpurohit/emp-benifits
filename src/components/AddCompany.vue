<template lang="">
    <div class="short-width mx-auto">
        <form @submit.prevent="enterUser">
            <div class="form-group">
                <input type="text" class="form-control" id="employeeName" placeholder="Name" v-model="state.name">
            </div>
            <div class="form-group">
                <input type="email" class="form-control" id="employeeEmail" placeholder="Email" v-model="state.email">
            </div>
            <button class="btn btn-primary" >Submit</button>
        </form>
    </div>
</template>
<script>
import { reactive } from 'vue';

export default {
    name: 'AddCompany',
    setup() {
        const state = reactive({
            name: 'Rahul',
            email: 'das'
        })

        function enterUser() {
            console.log('Enter');
        }

        return {
            state,
            enterUser
        }
    }
    
}
</script>
<style >
    .short-width {
        max-width: 30%;
        margin-top: 50px;
    }
</style>