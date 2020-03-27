<template>
    <div>
        login
        <button @click="toHome">toHome</button>
        <button @click="show=!show">toggle</button>


    </div>

</template>

<script>
    export default {
        name: "login",
        data: function () {
            return {
                show: true
            }
        },
        methods: {
            toHome() {


                this.$api.login({
                    loginName: 'admin',
                    password: 'a123456',
                    pushClient: 'ANDROID'
                })
                    .then(response => {

                        console.log('login succees =' + JSON.stringify(response));
                    })
                    .catch(err=>{
                        console.log(err);
                    })


                this.$router.push({
                    name: 'home',
                    // query:{
                    //     uid:'uid',
                    //     name :'name wsl'
                    //
                    // },
                    // params:{
                    //     name :'homeMain'
                    // }

                })

            },
        }
    }
</script>

<style scoped>

</style>