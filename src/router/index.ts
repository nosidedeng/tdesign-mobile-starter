import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/system/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
    },
    {
      path: '/home',
      name: 'home',
      component: ()=> import('@/views/system/HomeView.vue'),
    }
  ]
})

export default router
