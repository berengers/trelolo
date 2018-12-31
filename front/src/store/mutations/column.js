export const addColumn = (state, payload) => {
  // const { id, name } = payload
  state.columns = [...state.columns, {
    id: 40,
    name: 'newwww'
  }]
}