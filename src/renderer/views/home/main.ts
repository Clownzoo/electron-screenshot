import { createApp } from 'vue';
import App from './App.vue';
import TitleBar from '@/renderer/components/title-bar/index';
import '@/renderer/assets/style/base.scss';

const app = createApp(App);
app.use(TitleBar);
app.mount('#app');
