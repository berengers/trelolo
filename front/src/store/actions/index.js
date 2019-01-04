import axios from 'axios'

import { ADD_ITEM, RECEIVE_ITEMS } from '../mutations/const'
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

export const fetchItems = async ({ commit }) => {
  commit(LOADING, { load: true })
  console.log('11 ---->', 11)
  const { data: items } = await axios.get('https://jsonplaceholder.typicode.com/todos')
  items.map(item => item.name = item.title)
  items.map(item => item.columnId = item.userId)
  commit(RECEIVE_ITEMS, {items})
  commit(LOADING, { load: false })
}