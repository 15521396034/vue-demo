<template>
    <div class="category">
        <van-tree-select :items="items" :main-active-index.sync="active">
            <template #content>
                <van-image v-if="active === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                <van-image v-if="active === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
                <van-image v-if="active === 2" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                <van-image v-if="active === 3" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
                <van-image v-if="active === 4" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                <van-image v-if="active === 5" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
                <van-image v-if="active === 6" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                <van-image v-if="active === 7" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
                <van-image v-if="active === 8" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                <van-image v-if="active === 9" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
            </template>
        </van-tree-select>
    </div>
</template>

<script>
    export default {
        name: "category",
        data() {
            return {
                active: 0,
                items: [
                    { text: '美妆护肤' },
                    { text: '个户清洁' },
                    { text: '美妆护肤' },
                    { text: '个户清洁' },
                    { text: '美妆护肤' },
                    { text: '个户清洁' },
                    { text: '美妆护肤' },
                    { text: '个户清洁' },
                    { text: '美妆护肤' },
                    { text: '个户清洁' },
                    { text: '美妆护肤' },
                    { text: '个户清洁' },
                    { text: '美妆护肤' },
                    { text: '个户清洁' },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .van-tree-select__nav {
        background-color: #fafafa!important;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 50px;
        z-index: 1;
        width: 100px!important;
        .van-sidebar-item{line-height: 30px!important;}
    }
    .category{padding-left: 100px!important;}
    .van-tree-select__content{padding: 10px!important;}
</style>