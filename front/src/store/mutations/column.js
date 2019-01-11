export const RECEIVE_COLUMNS = (state, payload) => {
  state.columns = payload.columns
}

export const NEW_COLUMN = (state, payload) => {
  state.columns = [...state.columns, payload.column]
}

export const DELETE_COLUMN = (state, payload) => {
  state.columns = state.columns.filter(column => column.id !== payload.id)
}

export const UPDATE_COLUMN = (state, payload) => {
  state.columns = state.columns.map(column => {
    if (column.id === payload.id) {
      column.name = payload.name
    }
    return column
  })
}