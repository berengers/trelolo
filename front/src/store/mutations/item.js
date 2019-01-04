import uuid from 'uuid/v4'

export const ADD_ITEM = (state, payload) => {
  state.items = [...state.items, {
    id: uuid(),
    name: payload.name,
    columnId: payload.columnId
  }]
}

export const RECEIVE_ITEMS = (state, payload) => {
  state.items = payload.items
}