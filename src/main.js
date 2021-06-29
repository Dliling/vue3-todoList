import { createApp } from 'vue'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import App from './App.vue'
import store from './store/index'

createApp(App).use(store).use(Element3).mount('#app')
