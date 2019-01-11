import axios from 'axios'

class Db {
  constructor(){
    this.url = 'http://localhost:3000/api'
  }
  _headers() {
    const token = localStorage.getItem('token')
    return { 'x-authenticate': token }
  }

  // ----- DASHBOARD -----------

  fetchDashboards() {
    return axios.get(
      this.url + '/dashboards',
      {
        headers: this._headers()
      }
    )
  }
  fetchDashboard(id) {
    return axios.get(
      this.url + '/dashboards/' + id,
      {
        headers: this._headers()
      }
    )
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