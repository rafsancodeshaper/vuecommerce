import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)
    .use(createMetaManager())

router.isReady().then(() => {
    app.use(router).use(createMetaManager()).mount('#app')
})
