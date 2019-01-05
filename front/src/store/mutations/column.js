export const RECEIVE_COLUMNS = (state, payload) => {
  state.columns = payload.columns
}


export const addColumn = (state, payload) => {
  // const { id, name } = payload
  state.columns = [...state.columns, {
    id: 40,
    name: 'newwww'
  }]
}