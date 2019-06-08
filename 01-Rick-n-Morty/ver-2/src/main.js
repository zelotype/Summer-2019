import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(axios)

const EventBus = new Vue();
export default EventBus;

new Vue({
  render: h => h(App),
}).$mount('#app')
