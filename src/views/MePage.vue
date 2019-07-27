<template>
    <div>
        <div class="head">
            <img src="../assets/me.png" alt="">
        </div>
        <div id="color">
            <div class="order">
                <div class="order-head">
                    <span>我的订单</span>
                    <span>全部订单</span>
                </div>
                <div class="order-item">
                    <OrderOption v-for="i in arr" :key="i+6" href="#" :src="Img" msg="待支付"></OrderOption>

                </div>
            </div>
        </div>
        <div id="border">
            <div class="order">
                <div class="order-item">
                    <div v-for="i in arr" :key="i">
                        <a href="">
                            <img src="../assets/1555488100633.png" alt="">
                            <p>待支付</p>
                        </a>
                    </div>
                </div>
                <div class="order-item">
                    <div v-for="i in arr" :key="i+3">
                        <a href="">
                            <img src="../assets/1555488100633.png" alt="">
                            <p>待支付</p>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import OrderOption from "../components/OrderOption.vue";
import Img from "../assets/1555488100633.png";
export default {
    name: "me",
    data () {
        return {
            Img,
            arr: 3
        }
    },
    components: {
        OrderOption
    }
};
</script>

<style lang="less" scoped>
    .head{
        background: url(../assets/154884lun.jpg) no-repeat;
        background-size: cover;
        text-align: center;
        min-height: 200px;
        img{
            display: inline-block;
            margin-top: 50px;
            width: 72px;
            height: 72px;
        }
    }
    #color{
        background: rgba(0, 0, 0, 0.2);
        padding: 15px 0;
        .order-item{
            div{
                border-right:1px solid rgba(0, 0, 0, 0.2);
            }
            div:last-child{
                border-right: none;
            }
        }
    }
    .order{
        background: white;
        padding: 20px 0 5px;
    }
    .order-head{
        position: relative;
        height: 30px;
        span:first-child{
            position: absolute;
            left: 10px;
        }
        span:last-child{
            position: absolute;
            right: 10px;
        }
    }
    .order-item{
        display: flex;
        justify-content: space-around;
        padding: 5px 0;
        img{
            width: 48px;
            height: 48px;
        }
        a{
            text-decoration: none;
        }
        p{
            margin: 5px 0;
            font-size: 14px;
        }
        div{
            width: 33.33%;
        }

    }
    #border{
        .order-item{

            div{
                border-right:1px solid rgba(0, 0, 0, 0.2);
                border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            }
            div:last-child{
                border-right: none;
            }


        }
        .order-item:last-child{
            div{
                border-bottom: none;
            }
        }
    }
</style>

