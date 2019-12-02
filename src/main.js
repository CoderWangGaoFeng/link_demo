import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import bootstarp from 'bootstrap';
import prod from 'prod';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'element-ui/lib/theme-chalk/index.css';
import pageHeader from './components/SystemHeader.vue'
import pageFooter from './components/SystemFooter.vue'
Vue.use(ElementUI);
Vue.use(bootstarp);
Vue.component('pageHeader',pageHeader);
Vue.component('pageFooter',pageFooter);
global.prod_instance = new prod($);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
