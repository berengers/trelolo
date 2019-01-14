import db from "./db"
import { NEW_COLUMN, UPDATE_COLUMN, DELETE_COLUMN } from '../mutations/const'

export const newColumn = async ({ commit }, payload) => {
  if (db.isAuthenticated()) {
    const { name, dashboardId } = payload
    const { data: column } = await db.newColumn(name, dashboardId)
    commit(NEW_COLUMN, { column })
  }
}

export const deleteColumn = async ({ commit }, payload) => {
  if (db.isAuthenticated()) {
    const { id } = payload
    await db.deleteColumn(id)
    commit(DELETE_COLUMN, { id })
  }
}

export const updateColumn = async ({ commit }, payload) => {
  if (db.isAuthenticated()) {
    const { id, name } = payload
    await db.updateColumn(id, name)
    commit(UPDATE_COLUMN, { id, name })
  }
}