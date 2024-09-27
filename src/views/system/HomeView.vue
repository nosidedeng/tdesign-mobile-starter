<template>
    <t-notice-bar :visible="false" content="提示文字描述提示文字描述提示文字描述" />

    <t-swiper class="home-swiper" :autoplay="true" height="200px" :navigation="{ type: 'dots-bar' }"
        @change="handleSwiperChange">
        <t-swiper-item v-for="(item, index) in swiperList" :key="index">
            <img :src="item" class="img" />
        </t-swiper-item>
    </t-swiper>

    <t-grid class="main-nav">
        <t-grid-item text="主导航一" @click="handleMainNavClick(1)">
            <template #image>
                <t-image class="image-container" alt="一张图片" :src="imgUrl" fit="cover" shape="circle" />
            </template>
        </t-grid-item>
        <t-grid-item text="主导航二" :image="imgUrl" @click="handleMainNavClick(2)" />
        <t-grid-item text="主导航三" :image="imgUrl" @click="handleMainNavClick(3)" />
        <t-grid-item text="主导航四" :image="imgUrl" @click="handleMainNavClick(4)" />
        <t-grid-item text="主导航五" :image="imgUrl" @click="handleMainNavClick(5)" />
        <t-grid-item text="主导航六" :image="imgUrl" @click="handleMainNavClick(6)" />
        <t-grid-item text="主导航七" :image="imgUrl" @click="handleMainNavClick(7)" />
        <t-grid-item text="主导航八" :image="imgUrl" @click="handleMainNavClick(8)" />
    </t-grid>

    <div class="row">
        <t-image class="image-container" :src="banner2" shape="round" style="height: 80px; width: 100vw;" fit="cover"
            position="center" />
    </div>

    <div class="content">
        <div class="row">
            <h1 class="title">热门课程</h1>
        </div>
        <t-divider />
        <div class="group">
            <t-skeleton v-for="i in 4" :key="i" :row-col="rowCols" class="item" animation="flashed"/>
        </div>

    </div>
</template>
<script lang="ts" setup>
import imgUrl from '@/assets/avatar.jpg';
import banner1 from '@/assets/banner1.jpg';
import banner2 from '@/assets/banner2.jpg';
import banner3 from '@/assets/banner3.jpg';
const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
    banner1,
    banner2,
    banner3,
    `https://img.zcool.cn/community/0187e35da804faa801209e1f315966.png?imageMogr2/auto-orient/thumbnail/x600/format/webp`,
    `${imageCdn}/swiper1.png`,
];
const rowCols = [
    {
        size: '165.5px',
        borderRadius: '12px',
    },
    1,
    {
        width: '100px',
    },
];
const handleSwiperChange = (index: number, context: any) => {
    console.log('handleSwiperChange', index, context);
};
const handleMainNavClick = (index: number) => {
    console.log('MainNav', index);
}
</script>
<style scoped lang="less">
.home-swiper {
    --td-swiper-border-radius: 0px;
}

.main-nav {
    margin-bottom: 16px;
}

.row {
    display: flex;
    padding: 0 16px;
}

.row+.row {
    margin-top: 16px;
}

.t-button+.t-button {
    margin-left: 16px;
}

.content {
    background: white;
    margin-top: 16px;
    padding-top: 16px;
}

.group {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 16px 140px 16px;

    .item {
        width: 47%;
        margin-bottom: 16px;
    }
}
</style>