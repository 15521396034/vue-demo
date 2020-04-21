<template>
    <div class="wrap">
        <router-view></router-view>
        <van-tabbar route v-model="active">
            <van-tabbar-item to="/" icon="home-o">首页2</van-tabbar-item>
            <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
            <van-tabbar-item to="/h" icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item to="/h" icon="friends-o">我</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data () {
            return {
                active: 0,
            }
        }
    }
</script>

<style scoped>

</style>