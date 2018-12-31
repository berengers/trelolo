import Vue from 'vue'
import Vuex from 'vuex'

import * as mutations from './mutations'

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
  items: [
    {
      id: 1,
      name: 'ticket 1',
      columnId: 1
    },
    {
      id: 2,
      name: 'ticket 2',
      columnId: 1
    },
    {
      id: 3,
      name: 'ticket 3',
      columnId: 2
    },
  ]
}

const store = new Vuex.Store({
  state: initialState,
  mutations
})

export default store