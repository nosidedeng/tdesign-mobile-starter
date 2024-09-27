import { createApp } from 'vue'
import App from '@/App.vue'
import TDesign from 'tdesign-mobile-vue'
import router from '@/router'
import 'tdesign-mobile-vue/dist/reset.css';
import '@/style/main.less'


const app = createApp(App)

app.use(router)
app.use(TDesign);
app.mount('#app')
