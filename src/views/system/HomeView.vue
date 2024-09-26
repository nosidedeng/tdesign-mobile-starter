<template>
    <div style="margin-bottom: 10px;">
        <t-swiper class="home-swiper" :autoplay="true" height="200px" :navigation="{ type: 'dots-bar' }"
            @change="handleChange">
            <t-swiper-item v-for="(item, index) in swiperList" :key="index">
                <img :src="item" class="img" />
            </t-swiper-item>
        </t-swiper>
    </div>
    <t-grid class="main-nav" >
        <t-grid-item text="主导航一">
            <template #image>
                <t-image class="image-container" alt="一张图片" :src="imgUrl" fit="cover" shape="circle" />
            </template>
        </t-grid-item>
        <t-grid-item text="主导航二" :image="imgUrl" />
        <t-grid-item text="主导航三" :image="imgUrl" />
        <t-grid-item text="主导航四" :image="imgUrl" />
    </t-grid>
    <div class="row">
        <t-button size="large" theme="primary">填充按钮</t-button>
        <t-button size="large" theme="light">填充按钮</t-button>
        <t-button size="large">填充按钮</t-button>
    </div>
    <div class="row">
        <t-button size="large" theme="primary" variant="outline">描边按钮</t-button>
        <t-button size="large" theme="primary" variant="dashed">虚框按钮</t-button>
        <t-button size="large" theme="primary" variant="text">文字按钮</t-button>
    </div>
</template>
<script lang="ts" setup>
const imgUrl = 'https://tdesign.gtimg.com/mobile/demos/example1.png';
const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
    `https://img.zcool.cn/community/0187e35da804faa801209e1f315966.png?imageMogr2/auto-orient/thumbnail/x600/format/webp`,
    `${imageCdn}/swiper1.png`,
];

const handleChange = (index: number, context: any) => {
    console.log('基础示例,页数变化到》》》', index, context);
};
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
</style>