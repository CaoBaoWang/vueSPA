<template>
    <div>
        home.vue


        <router-link :to="{name:'home'}">home</router-link>
        ||
        <router-link :to="{name:'helloWorld'}">helloWorld</router-link>
        <hr>

        <router-view></router-view>


    </div>
</template>

<script>
    export default {
        name: "home",

        watch: {
            '$route': function (to, mfrom, next) {
                console.log(to, mfrom, next);


            }
        },

        mounted() {
            console.log(this.$route.query.uid);
        }
    }
</script>

<style scoped>

</style>