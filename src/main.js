import Vue from 'vue'
import App from './App.vue'
import './style/main.css'
import './assets/tailwind.css'
import store from './store/index'
import axios from 'axios';

Vue.config.productionTip = false

// axios.defaults.baseURL = 'http://127.0.0.1:8000/';
// axios.defaults.headers.post['Content-Type'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
