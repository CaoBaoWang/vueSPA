<template>
    <div>
        <van-nav-bar title="个人中心">
        </van-nav-bar>
        <div class="header">
            <van-image
                    round

                    src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="useInfo">
                <p><span class="name">张师傅</span> <br />18088889999</p>
            </div>

        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Image } from 'vant';

    Vue.use(Image);


    export default {
        name: "me"
    }
</script>

<style scoped lang="less">

    .header {
        height: 104px;
        margin: 12px 0;
        background: @white;
        display: flex;
        align-items: center;
        padding-left: 16px;
        .van-image--round{
            width: 72px;
            height: 72px;
        }

        .useInfo{
            text-align: left;
            padding-left: 8px;
            font-size: 15px;
            p {
                line-height: 21px;
                /*margin: 0;*/
            }
            .name {
                color:  @gray-8;
            }
        }
    }


</style>