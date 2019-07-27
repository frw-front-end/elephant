<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="i in photoUrl"><img :src="i.pitrue_url" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="list">
                <div v-for="i in box" :key="i.id">
                    <img :src="i.icon_url" alt="">
                    <p>{{i.box_name}}</p>
                </div>
        </div>
        <div class="sort">
            <div v-if="clothes.length > 0">
                <p>独立设计师</p>
                <Item :obj="i" v-for="i in clothes" :key="i.cloth_id"></Item>
                <div class="item">
                </div>
            </div>
<!--            <div>-->
<!--                <p>男式西装</p>-->
<!--                <div class="list">-->
<!--                    <Item ></Item>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div>-->
<!--                <p>女士西装</p>-->
<!--                <div class="list">-->
<!--                    <Item ></Item>-->
<!--                </div>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
import Item from "@/components/Item.vue";
import axios from "axios";
import Swiper from "swiper";
export default {
    name: "custom",
    components: {
        Item,
    },
    data () {
        return{
            box:[],
            categories: [],//存放列表名
            clothes: [],//存放列表中信息
            photoUrl: [],
        }
    },
    created: function() {
        this.getCategoriesData();//获取列表名
        this.getPhotoUrl();
        this.getBox();
    },
    mounted: function() {

    },
    updated: function() {
        new Swiper ('.swiper-container', {
            // Optional parameters
            autoplay: {
                disableOnInteraction: false,
                delay: 1000,
            },
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable :true,
            },
        })
    },
    methods: {
        getBox () {
            axios.post("/wxapi/measure_wxbk/categoriesbox/gets", {})
                .then(res => {
                    if (res.data.success) {
                        this.box = res.data.data
                    }
                })
        },
        getCategoriesData () {
            axios.post("/wxapi/measure_wxbk/recommendedlist/gets", {})
                .then(res => {
                    if (res.data.success) {
                        this.categories = res.data.data
                        this.getClothesData(res.data.data[0].id)

                    }
                })
                .catch(err =>  console.log(err))
        },
        getClothesData (id) {
            axios.post("/wxapi/measure_wxbk/recommendedlist/get", { id })
                .then(res => {
                    this.clothes = res.data.data
                    console.log(this.clothes)
                })
                .catch(err => console.log(err))
        },
        getPhotoUrl () {
            axios.post("/wxapi/measure_wxbk/broadcast/gets", {})
                .then(res => {
                    if (res.data.success) {
                        this.photoUrl = res.data.data
                    }
                })
                .catch(err => console.log(err))
        }

    }

}
</script>

<style lang="less" scoped>
    .swiper-container {
        img {
            width: 100%;
            height: auto;
        }
    }
    .list {
        margin-top: 10px;
        padding: 10px 0;
        background: white;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        position: relative;
        &:before{
            position: absolute;
            content: "";
            left: 0;
            right: 0;
            top: -14px;
            background: silver;
            border: 5px solid silver;
        }
        &:after{
            position: absolute;
            content: "";
            left: 0;
            right: 0;
            bottom: -5px;
            background: silver;
            border: 5px solid silver;
        }
        div:nth-child(4n) {
            &:before {
                display: none;
            }
        }
        img {
            width: 48px;
            height: 48px;
        }
        div {
            position: relative;
            width: 24%;
            padding: 10px 0 0;
            p {
                margin-top: 5px;
            }
        }
        div:before{
            content: "";
            position: absolute;
            width: 0.2px;
            right: 0;
            bottom: 20px;
            top: 20px;
            background: #42b983;
            border: 0.2px solid lightblue;
        }
    }
    .sort {
        padding: 0 0 68px;
        .item {
            display: inline-block;
            width: 46%;
            padding: 0px;
            img {
                width: 100%;
                height: auto;
            }
            div {
                border: 1px solid black;
                border-top: none;
            }
            p {
                padding: 2px 5px;
                margin: 0;
            }
            .text-overflow {
                height: 17px;
                margin: -1px 0 5px;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .color {
                text-align: left;
                color: #a4925a;
            }
        }
    }
</style>

