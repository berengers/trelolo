export const actionA = async ({ commit }) => {
  const bure = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(res => {
      console.log('res ---->', res)
      commit('addColumn')
    })
}