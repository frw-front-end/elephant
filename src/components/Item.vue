<template>
    <div class="item" >
        <router-link :to="'cloth/' + obj.cloth_id">
        <img :src="obj.thumbnail1"  alt="" >
        <div>
                <p class="text-overflow">{{obj.cloth_name}}</p>
                <p class="color">{{obj.cloth_id}}</p>
        </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "item",
    props: [
        "obj"
        ],
    created (){
        console.log(this.obj)
    }
    }
</script>

<style lang="less" scoped>
    .item {
        display: inline-block;
        width: 46%;
        padding: 5px;
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
</style>