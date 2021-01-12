<template lang="">
    <div>
        {{state.companyId}}
    </div>
</template>
<script>
// import { useQuery, useResult } from '@vue/apollo-composable'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
export default {
    name: 'CompanyDetail',
    setup() {
        const state = reactive({
            companyId: '',
            companyDetails: {} 
        });
        const route = useRoute()
        state.companyId = route.params.companyId
        console.log(route.params.companyId,'lol')


        return {
            state
        }
        
    }
    
}
</script>
<style lang="">
    
</style>