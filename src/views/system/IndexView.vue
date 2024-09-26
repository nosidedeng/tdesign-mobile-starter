<template>
  <home-view v-if="activeTab === 'Home'"></home-view>
  <component-view v-else-if="activeTab === 'Component'"></component-view>
  <chat-view v-else-if="activeTab === 'Chat'"></chat-view>
  <my-view v-else-if="activeTab === 'My'"></my-view>
  <t-empty v-else></t-empty>
  <t-tab-bar v-model="activeTab" :split="false">
    <t-tab-bar-item
      v-for="item in list"
      :key="item.name"
      :value="item.name"
      :badge-props="item.badgeProps"
      :aria-label="item.ariaLabel"
    >
      {{ item.text }}
      <template #icon>
        <t-icon :name="item.icon" />
      </template>
    </t-tab-bar-item>
  </t-tab-bar>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Icon as TIcon } from 'tdesign-icons-vue-next';
import HomeView from './HomeView.vue'
import ComponentView from './ComponentView.vue';
import ChatView from './ChatView.vue';
import MyView from './MyView.vue';



const activeTab = ref('Home');
const list = ref([
  { name: 'Home', text: '首页', icon: 'home', badgeProps: { count: 16 }, ariaLabel: '首页，有16条消息' },
  { name: 'Component', text: '组件', icon: 'app', badgeProps: { dot: true }, ariaLabel: '软件，有新的消息' },
  { name: 'Chat', text: '聊天', icon: 'chat', badgeProps: { count: 'New' }, ariaLabel: '聊天，New' },
  { name: 'My', text: '我的', icon: 'user', badgeProps: { count: '···' }, ariaLabel: '我的，有很多消息' },
]);

onMounted(() => {
  console.log('onMouned')
});
</script>
