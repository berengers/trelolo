import uuid from 'uuid/v4'

export const ADD_ITEM = (state, payload) => {
  console.log('payload ---->', payload)
  state.items = [...state.items, {
    id: uuid(),
    name: payload.name,
    columnId: payload.columnId
  }]
}