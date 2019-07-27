<template>
    <div>
        <div class="head">
            <p>快来预约您的专属测量!</p>
            <div class="location">
                <span>深圳市华强北九方购物中心三楼345铺</span>
                <span>距您0.0m</span>
            </div>
        </div>
        <div class="main">

            <img src="../assets/228892.png" alt="">
            <div class="contact">
                <p>预约热线：4008000626</p>
                <p>或直接在公众号回复“量体”预约</p>
            </div>
        </div>
    </div>
</template>

<script>
// import HPage from "@/components/Home.vue";
export default {
    name: "hPage",
};
</script>

<style lang="less" scoped>
    .head{
        p{
            text-align: left;
            padding-left: 10px;
        }
        .location{
            position: relative;
            span:first-child{
                position: absolute;
                left: 10px;
            }
            span:last-child{
                position: absolute;
                right: 10px;
                color: #999;
            }
        }
    }
    .main{
        margin-top: 55px;
        position: relative;
        img{
            width: 100%;
            height: auto;
        }
        .contact{
            position: absolute;
            width: 100%;
            bottom: 20px;
        }
    }
</style>

