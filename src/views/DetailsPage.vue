<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="url in Carousel.wheel_images">
                <img :src="url" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>

</template>

<script>
    import Details from '@/components/Details.vue';
    import swiper from 'swiper';
    import axios from 'axios';
    export default {
        name: "DetailsPage",
        components: {
            Details
        },
        data () {
            return {
                Carousel:[],
            }
        },
        created () {
            this.getPhoto();
        },
        methods: {
            getPhoto(){
                axios.post("/wxapi/measure_wxbk/cloth/get", { id: 670 })
                    .then( res => {
                            if(res.data.success){
                                this.Carousel = res.data.data
                            }
                })
                .catch( err => console.log(err))
            }
        },
        updated () {
            new swiper( '.swiper-container',{
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
        }
    }
</script>

<style lang="less" scoped>
    .swiper-container{
        img{
            width: 100%;
        }
    }
</style>