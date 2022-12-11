import { createApp } from 'vue'
import router from './router/index'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import './assets/css/index.scss'
import 'element-plus/theme-chalk/index.css'

const app = createApp(App)

// element-plus中文配置
app.use(ElementPlus, { locale: zhCn })
app.use(router)
app.use(createPinia())
app.mount('#app')

export default app
