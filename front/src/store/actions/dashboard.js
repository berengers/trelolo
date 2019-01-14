import db from './db'
import { router } from '../../index'

import {
  RECEIVE_COLUMNS,
  RECEIVE_ITEMS,
  RECEIVE_DASHBOARDS, RECEIVE_DASHBOARD, ADD_DASHBOARD, DELETE_DASHBOARD
} from '../mutations/const'
import { LOADING } from '../mutations/const'

export const fetchDashboards = async ({ commit }) => {
  if (db.isAuthenticated()) {
    commit(LOADING, { loading: true })
    const { data: dashboards } = await db.fetchDashboards()
    commit(RECEIVE_DASHBOARDS, { dashboards })
    commit(LOADING, { loading: false })
  }
}

export const fetchDashboard = async ({ commit }, payload) => {
  if (db.isAuthenticated()) {
    commit(LOADING, { loading: true })
    const { id } = payload
    const { data: dashboard } = await db.fetchDashboard(id)
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
}

export const newDashboard = async ({ commit }, payload) => {
  if (db.isAuthenticated()) {
    const { name } = payload
    const { data: dashboard } = await db.newDashboard(name)
  
    const lightDash = {}
    lightDash.id = dashboard.id
    lightDash.name = dashboard.name
  
    commit(ADD_DASHBOARD, { dashboard: lightDash })
  }
}

export const deleteDashboard = ({ commit }, payload) => {
  if (db.isAuthenticated()) {
    const { id } = payload
  
    db.deleteDashboard(id)
      .then(resp => {
        commit(DELETE_DASHBOARD, { id })
        router.replace('/dashboards')
      })
      .catch(error => { console.log('error ---->', error) })
  }
}