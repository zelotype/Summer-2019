import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import store from './store/store'

import 'vuetify/src/stylus/main.styl'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
