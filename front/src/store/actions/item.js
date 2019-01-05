import axios from 'axios'

import { ADD_ITEM } from '../mutations/const'
import { LOADING } from '../mutations/const'

export const newItem = async ({ commit }, payload) => {
  commit(LOADING, { load: true })
  console.log('payload ---->', payload)
  
  const { data: todo } = await axios.post('https://jsonplaceholder.typicode.com/todos', { title: payload.name })
  .catch(error => console.log('error ---->', error))
  
  console.log('todo ---->', todo)
  commit(ADD_ITEM, {name: todo.title, columnId: payload.columnId })
  commit(LOADING, { load: false })
}