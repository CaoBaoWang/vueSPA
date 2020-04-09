<template>
    <div class="root">

        <router-view></router-view>

<!--        <img src="../../assets/home/ic_tab_jiance_1@3x.png">-->

        <van-tabbar route>
            <van-tabbar-item :to="{name:'home'}">
                <span>首页</span>
                <template #icon="props">
                    <img :src="props.active ? icon.shouye1 : icon.shouye2"/>
                </template>
            </van-tabbar-item>
            <van-tabbar-item icon="search" :to="{name:'usePower'}">
                <span>用电</span>
                <template #icon="props"   >
                    <img :src="props.active ? icon.yongdian1 : icon.yongdian2"/>
                </template>
            </van-tabbar-item>
            <van-tabbar-item icon="friends-o" :to="{name:'discover'}">
                发现
            </van-tabbar-item>
            <van-tabbar-item icon="setting-o" :to="{name:'me'}">
                <span>我的</span>
                <template #icon="props" >
                    <img :src="props.active ? icon.wode1 : icon.wode2"/>
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Tabbar, TabbarItem } from 'vant';

    import shouye1 from '../../assets/home/ic_tab_shouye_1@3x.png'
    import shouye2 from '../../assets/home/ic_tab_shouye_2@3x.png'
    import yongdian1 from '../../assets/home/ic_tab_jiance_1@3x.png'
    import yongdian2 from '../../assets/home/ic_tab_jiance_2@3x.png'
    import wode1 from '../../assets/home/ic_tab_wode_1@3x.png'
    import wode2 from '../../assets/home/ic_tab_wode_2@3x.png'
    Vue.use(Tabbar);
    Vue.use(TabbarItem);

    export default {
        name: "home",

        data(){
            return {
                active :0,
                icon:{
                    shouye1,
                    shouye2,
                    yongdian1,
                    yongdian2,

                    wode1,
                    wode2,
                },

            }
        },
        watch: {
            // '$route': function (to, mfrom, next) {
            //     console.log(to, mfrom, next);
            //
            //
            // }
        },

        mounted() {
            console.log(this.$route.query.uid);
        }
    }


</script>

<style scoped>

    .root {
        height: 100vh;
    }

</style>