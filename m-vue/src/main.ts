import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import routes from './router';
import App from './App.vue';
import store from './store';

let history;
let router;
let app;

function render(props: any = {}) {
  history = createWebHistory('/vue');
  router = createRouter({
    history,
    routes,
  });
  app = createApp(App);
  const container = props.container;
  app
    .use(store)
    .use(router)
    .mount(container ? container.querySelector('#app') : '#app');
}

// 如果不是乾坤的就独立运行
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  return;
}

export async function mount(props: any) {
  render(props);
}

export async function unmount() {
  history = null;
  router = null;
  app = null;
}
