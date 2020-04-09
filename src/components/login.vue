<template>
    <div class="root">
        <van-nav-bar>
        </van-nav-bar>
        <van-cell-group>
            <van-field placeholder="输入11位手机号码" v-model="param.mobile"/>
            <van-field  placeholder="输入登录密码" v-model="param.password"/>

<!--         最后一van-field 没下划线  解决下划线问题   -->
            <van-field  style="display: none"/>
        </van-cell-group>



        <button @click="toHome">toHome</button>
        <button @click="show=!show">toggle</button>

        <p>name = {{user.name}}</p>

        <van-button disabled type="default">默认按钮</van-button>
        <van-button :disabled="show" type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
        <van-button type="primary" :disabled="true" size="large">登录</van-button>
        <van-button loading type="primary" loading-text="加载中..." size="large">大号按钮</van-button>


    </div>

</template>

<script>
    import Vue from 'vue';

    import {Button} from 'vant';
    import {NavBar} from 'vant';
    import {Icon} from 'vant';
    import {Field} from 'vant';
    import { Cell, CellGroup } from 'vant';

    Vue.use(Cell);
    Vue.use(CellGroup);

    Vue.use(Field);
    Vue.use(Icon);
    Vue.use(NavBar);
    Vue.use(Button);

    export default {
        name: "Login",
        data: function () {
            return {
                show: true,
                
                param : {
                    mobile: '13104290118',
                    password: 'a123456',
                    pushClient: 'ANDROID'
                },
            }
        },
        methods: {

            toHome() {
                console.log(this.$store.getters['account/isLogin']);

                this.$store.dispatch('account/login', this.param)
                    .then(response => {
                        console.log('login 200 response' + JSON.stringify(response))

                        this.$router.push({
                            name: 'home',
                        })

                    })
                    .catch(response => {
                        console.log(response);
                    })




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

<style scoped lang="less">
    /*@import "../style/theme";*/

    .van-nav-bar {
        background: @white;

    }
    .root {
        background: @white;
    }


    [class*='van-hairline']::after{
        border: none;
    }
</style>