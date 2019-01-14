import axios from 'axios'
import { router } from '../../index'

class Db {
  constructor(){
    this.url = 'http://localhost:3000/api'
  }
  _headers() {
    const token = localStorage.getItem('token')
    return { 'x-authenticate': token }
  }
  _status(error) {
    const { status } = error.response
    console.log('status ---->', status)
    
    if (status === 401 || status === 403) {
      console.log('redirect to login?')
      // localStorage.removeItem('token')
      router.replace('/login')
      return error
    } else {
      console.log('other error status to 401 or 403')
    }
  }

  // ----- LOGIN / LOGOUT -----------

  isAuthenticated() {
    const token = localStorage.getItem('token')
    if (token) {
      return true
    } else {
      router.replace('/login')
      return false
    }
  }
  login(email, password) {
    return axios.post(
      this.url + '/login',
      {
        email: email,
        password: password
      },
      {
        headers: this._headers()
      }
    )
  }
  logout() {
    return axios.delete(
      this.url + '/logout',
      {
        headers: this._headers()
      }
    )
  }

  // ----- DASHBOARD -----------

  fetchDashboards() {
    return axios.get(
      this.url + '/dashboards',
      {
        headers: this._headers()
      }
    )
    .catch(this._status)
  }
  fetchDashboard(id) {
    return axios.get(
      this.url + '/dashboards/' + id,
      {
        headers: this._headers()
      }
    )
    .catch(this._status)
  }
  newDashboard(name) {
    return axios.post(
      this.url + '/dashboards',
      {
        name: name
      },
      {
        headers: this._headers()
      }
    )
  }
  deleteDashboard(id) {
    return axios.delete(
      this.url + '/dashboards/' + id,
      {
        headers: this._headers()
      }
    )
  }

  // ----- COLUMNS -----------

  newColumn(name, dashboardId) {
    return axios.post(
      this.url + '/columns',
      {
        name: name,
        dashboardId: dashboardId
      },
      {
        headers: this._headers()
      }
    )
  }
  deleteColumn(id) {
    return axios.delete(
      this.url + '/columns/' + id,
      {
        headers: this._headers()
      }
    )
  }
  updateColumn(id, name) {
    return axios.put(
      this.url + '/columns/' + id,
      {
        name: name
      },
      {
        headers: this._headers()
      }
    )
  }

  // ----- ITEMS -----------

  newItem(text, columnId) {
    return axios.post(
      this.url + '/items',
      {
        text: text,
        columnId: columnId
      },
      {
        headers: this._headers()
      }
    )
  }
  deleteItem(id) {
    return axios.delete(
      this.url + '/items/' + id,
      {
        headers: this._headers()
      }
    )
  }
  updateItem(id, text) {
    return axios.put(
      this.url + '/items/' + id,
      {
        text: text
      },
      {
        headers: this._headers()
      }
    )
  }
}

const db = new Db()

export default db