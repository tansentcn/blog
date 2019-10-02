import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import './plugins/element.js'

Vue.config.productionTip = false

Vue.use(VueAxios, Axios)
Axios.defaults.baseURL = '/blog';
Axios.defaults.headers.post['Content-Type'] = 'application/json';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
