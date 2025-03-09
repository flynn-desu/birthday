import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Vue3Lottie from 'vue3-lottie'

const app = createApp(App)
app.use(router)
app.use(Vue3Lottie)
app.use(vuetify)
app.mount('#app')