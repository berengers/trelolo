import axios from 'axios'

class Db {
  constructor(){
    this.url = 'http://localhost:3000/api'
  }
  _headers() {
    const token = localStorage.getItem('token')
    return { 'x-authenticate': token }
  }
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
}

const db = new Db()

export default db