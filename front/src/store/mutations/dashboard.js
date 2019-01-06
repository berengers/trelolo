export const RECEIVE_DASHBOARDS = (state, payload) => {
  state.dashboards = payload.dashboards
}

export const RECEIVE_DASHBOARD = (state, payload) => {
  state.currentDashboard = payload.dash
}