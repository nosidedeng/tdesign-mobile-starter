<template>
    <div style="margin-bottom: 10px;">
        <t-swiper :autoplay="true" height="192px" :navigation="{ type: 'dots-bar' }" @change="handleChange">
            <t-swiper-item v-for="(item, index) in swiperList" :key="index">
                <img :src="item" class="img" />
            </t-swiper-item>
        </t-swiper>
    </div>
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
const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
];

const handleChange = (index: number, context: any) => {
  console.log('基础示例,页数变化到》》》', index, context);
};
</script>
<style scoped lang="less">
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