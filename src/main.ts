import { createApp } from 'vue'
import { store, key } from './store'
import router from './router'
import dayjs from 'dayjs'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.config.globalProperties.$dayjs = dayjs
app.use(store, key)
app.use(router)
app.use(Antd)
app.mount('#app')