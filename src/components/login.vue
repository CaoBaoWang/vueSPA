<template>
    <div>
        <van-nav-bar
                title="标题"
                left-text="返回"
                right-text="按钮"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        >
<!--            <template #right>-->
<!--                <van-icon name="search" size="22px"/>-->
<!--            </template>-->
        </van-nav-bar>
        login
        <button @click="toHome">toHome</button>
        <button @click="show=!show">toggle</button>

        <p>loginName = {{user.loginName}}</p>

        <van-button disabled type="default">默认按钮</van-button>
        <van-button :disabled="show"  type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
        <van-button type="primary" size="large">大号按钮</van-button>
        <van-button loading type="primary" loading-text="加载中..."  size="large">大号按钮</van-button>


    </div>

</template>

<script>
    import Vue from 'vue';
    import { Button } from 'vant';
    import { NavBar } from 'vant';
    import { Icon } from 'vant';

    Vue.use(Icon);

    Vue.use(NavBar);
    Vue.use(Button);

    export default {
        name: "login",
        data: function () {
            return {
                show: true
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