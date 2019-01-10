export const RECEIVE_DASHBOARDS = (state, payload) => {
  state.dashboards = payload.dashboards
}

export const RECEIVE_DASHBOARD = (state, payload) => {
  state.currentDashboard = payload.dash
}

export const ADD_DASHBOARD = (state, payload) => {
  state.dashboards = [...state.dashboards, payload.dashboard]
}

export const DELETE_DASHBOARD = (state, payload) => {
  state.dashboards = state.dashboards.filter(dash => dash.id !== parseInt(payload.id))
}