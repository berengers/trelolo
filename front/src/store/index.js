import Vue from 'vue'
import Vuex from 'vuex'

import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const initialState = {
  columns: [
    {
      id: 1,
      name: 'product backlog'
    },
    {
      id: 2,
      name: 'sprint backlog'
    },
    {
      id: 3,
      name: 'Current'
    },
    {
      id: 4,
      name: 'Waiting Validation'
    }
  ],
  items: [],
  loading: false
}

const store = new Vuex.Store({
  state: initialState,
  mutations,
  actions
})

export default store