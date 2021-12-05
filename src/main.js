import { createApp } from 'vue';
import env from '@/../env.json';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

if (env.debug === true) {
  console.log('hello');
}

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
