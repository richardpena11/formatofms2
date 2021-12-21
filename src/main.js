import Vue from 'vue';
import './registerServiceWorker';
import VueYoutube from 'vue-youtube';
import VueResource from 'vue-resource';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import App from './App.vue';

Vue.use(VueYoutube);

Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
