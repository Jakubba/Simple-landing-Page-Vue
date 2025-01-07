import { createApp } from 'vue';
import App from './App.vue';
import '../src/styles/main.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';
const app = createApp(App);
app.mount('#app');
app.config.globalProperties.$nextTick(() => {
  AOS.init();
});
