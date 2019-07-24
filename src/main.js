import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

Vue.config.productionTip = false
import './plugins/axios'
import './plugins/element.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
