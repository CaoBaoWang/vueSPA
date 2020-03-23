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
        data : function(){
          return {
              show : true
          }
        },
        methods : {
            toHome(){
                this.$router.push({
                    name:'home',
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