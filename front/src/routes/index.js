
import Login from '../components/login.vue'
import Dashboard from '../components/dashboard.vue'
import Dashboards from '../components/dashboards.vue'

const routes = [
  { path: '/', redirect: '/dashboards' },
  { path: '/dashboards', component: Dashboards },
  { path: '/dashboard/:id', component: Dashboard },
  { path: '/login', component: Login }
]

export default routes