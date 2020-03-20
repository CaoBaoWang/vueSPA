<template>
    <div>
        login
        <button @click="toHome">toHome</button>
    </div>
    
</template>

<script>
    export default {
        name: "login",
        methods : {
            toHome(){
                this.$router.push({
                    name:'home'
                })
            }
        }
    }
</script>

<style scoped>

</style>