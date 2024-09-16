import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { i18n } from './plugins/i18n';

import App from './App.vue'

const app = createApp(App)

const pinia = createPinia();
app
    .use(i18n)
    .use(pinia);

app.mount('#app')
