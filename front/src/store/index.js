import Vue from 'vue'
import Vuex from 'vuex'

import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const initialState = {
  dashboards: {},
  currentDashboard: {},
  columns: [],
  items: [],
  loading: false
}

const store = new Vuex.Store({
  state: initialState,
  mutations,
  actions
})

export default store