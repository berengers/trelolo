import Vue from 'vue'
import Vuex from 'vuex'

import App from './components/app.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})

