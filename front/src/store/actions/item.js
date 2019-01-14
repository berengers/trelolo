import { ADD_ITEM, DELETE_ITEM, CLOSE_MODAL_ITEM, LOADING, RENAME_ITEM } from '../mutations/const'
import db from './db';

export const newItem = async ({ commit }, payload) => {
  if (db.isAuthenticated()) {
    commit(LOADING, { loading: true })
    const { text, columnId } = payload
    await db.newItem(text, columnId)
      .then(resp => {
        commit(ADD_ITEM, { item: resp.data })
        commit(LOADING, { loading: false })
      })
  }
}

export const deleteItem = async ({ commit }, payload) => {
  if (db.isAuthenticated()) {
    const { id } = payload
    await db.deleteItem(id)
    commit(DELETE_ITEM, { id })
    commit(CLOSE_MODAL_ITEM)
  }
}

export const renameItem = async ({ commit }, payload) => {
  if (db.isAuthenticated()) {
    const { id, text } = payload
    await db.updateItem(id, text)
    commit(RENAME_ITEM, { id, text })
    commit(CLOSE_MODAL_ITEM)
  }
}