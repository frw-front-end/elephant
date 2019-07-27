<template>
    <div>
        <a :href="href">
            <img :src="src" alt="">
            <p>{{ msg }}</p>
        </a>
    </div>
</template>

<script>
    export default {
        name: "OrderOption",
        props: {
            href: String,
            src: String,
            msg: String
        }
    }
</script>

<style scoped>
    img {
        width: 48px;
        height: 48px;
    }
</style>