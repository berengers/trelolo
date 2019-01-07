import axios from 'axios'

import { RECEIVE_COLUMNS, RECEIVE_ITEMS, RECEIVE_DASHBOARDS, RECEIVE_DASHBOARD } from '../mutations/const'
import { LOADING } from '../mutations/const'

export const fetchDashboards = async ({ commit }) => {
  commit(LOADING, { loading: true })
  const { data: dashboards } = await axios.get('http://localhost:3000/api/dashboards', {
    headers: { 'x-authenticate': 'tom_token' }
  })
  commit(RECEIVE_DASHBOARDS, { dashboards })
  commit(LOADING, { loading: false })
}

export const fetchDashboard = async ({ commit }, payload) => {
  commit(LOADING, { loading: true })
  const { data: dashboard } = await axios.get(`http://localhost:3000/api/dashboards/${payload.id}`, {
    headers: { 'x-authenticate': 'tom_token' }
  })
  // console.log('dashboard ---->', dashboard)

  const dash = { id: dashboard.id, name: dashboard.name }

  // console.log('dash ---->', dash)

  let columns = dashboard.columns.map(c => {
    const column = {}
    column.id = c.id
    column.name = c.name
    return column
  })
  // console.table(columns)

  let items = []

  dashboard.columns.forEach(column => {
    column.items.forEach(item => {
      items.push(item)
    })
  })
  // console.log('items ---->', items)

  commit(RECEIVE_DASHBOARD, { dash })
  commit(RECEIVE_COLUMNS, { columns })
  commit(RECEIVE_ITEMS, { items })
  commit(LOADING, { loading: false })
}