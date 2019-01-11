import uuid from 'uuid/v4'

export const ADD_ITEM = (state, payload) => {
  state.items = [...state.items, payload.item]
}

export const RECEIVE_ITEMS = (state, payload) => {
  state.items = payload.items
}

export const OPEN_MODAL_ITEM = (state, payload) => {
  const item = state.items.filter(item => item.id === payload.id)
  state.currentItem = item[0]
  state.modalItem = true
}

export const CLOSE_MODAL_ITEM = (state, payload) => {
  state.modalItem = false
}

export const DELETE_ITEM = (state, payload) => {
  state.items = state.items.filter(item => item.id !== payload.id)
}

export const RENAME_ITEM = (state, payload) => {
  state.items = state.items.map(item => {
    
    if (item.id === parseInt(payload.id)) {
      item.text = payload.text
    }
    
    return item
  })
}