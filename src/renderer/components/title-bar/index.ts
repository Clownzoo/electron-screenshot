import { App } from 'vue';
import TitleBar from './index.vue';

const install = function(app: App<Element>) {
  app.component('title-bar', TitleBar);
};

export default install;
