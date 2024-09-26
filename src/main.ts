import { createApp } from 'vue'
import App from '@/App.vue'
import TDesign from 'tdesign-mobile-vue'
import router from '@/router'

const app = createApp(App)

app.use(router)
app.use(TDesign);
app.mount('#app')
