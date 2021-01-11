<template lang="">
    <div>
        {{companyId}}
    </div>
</template>
<script>

export default {
    name: 'CompanyDetail',
    
    data() {
        return {
            companyId: String
        }
    },
    mounted() {
        this.companyId = this.$route.params.companyId;
    }
    
}
</script>
<style lang="">
    
</style>