import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from '@/utils/i18n.js'

import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)

axios.defaults.baseURL = 'https://raw.githubusercontent.com/vtdb/vtdb-data/master/';

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')