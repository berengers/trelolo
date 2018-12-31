export const addItem = (state, payload) => {
  console.log('payload ---->', payload)
  state.items = [...state.items, {
    id: 10,
    name: payload.name,
    columnId: 2
  }]
}