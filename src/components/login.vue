<template>
    <div>
        login
        <button @click="toHome">toHome</button>
        <button @click="show=!show">toggle</button>

        <p>loginName = {{user.loginName}}</p>

        <van-button disabled type="default">默认按钮</van-button>
        <van-button :disabled="show"  type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>


    </div>

</template>

<script>
    import Vue from 'vue';
    import { Button } from 'vant';

    Vue.use(Button);
    export default {
        name: "login",
        data: function () {
            return {
                show: false
            }
        },
        methods: {
            toHome() {
                console.log(this.$store.getters['account/isLogin']);

                var param = {
                    loginName: 'admin',
                    password: 'a123456',
                    pushClient: 'ANDROID'
                };
                this.$store.dispatch('account/login', param)
                    .then(response => {
                        console.log('login.vue=-' + JSON.stringify(response))
                    })
                    .catch(response=>{
                        console.log(response);
                    })



                //
                // this.$router.push({
                //     name: 'home',
                //
                // })

            },
        },
        computed: {
            user() {
                // return this.$store.state.account.user;
                // return this.$store.getters['account/getUser']
                return this.$store.state.account.user;
            }

        }
    }
</script>

<style scoped>

</style>