import db from './db.js'
import { router } from '../../index.js';

export const login = async ({ commit }, payload) => {
  const { email, password } = payload
  
  await db.login(email, password)
    .catch(error => { console.log('error ---->', error) })
    .then(resp => {
      localStorage.setItem('token', resp.data.token)
      router.push('/')
     })
}

export const logout = async () => {
  await db.logout()
  localStorage.removeItem('token')
  router.push('/login')
}