import Vue from 'vue'
import VueRouter from 'vue-router'
import "@babel/polyfill"

import App from './components/app.vue'
import routes from './routes'
import store from './store'

Vue.use(VueRouter)

Vue.config.productionTip = false

export const router = new VueRouter({
  routes
})

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})