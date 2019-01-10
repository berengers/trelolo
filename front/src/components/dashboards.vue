<template>
  <div id="page">
    <h1>My Dashboards</h1>
    <div class="dashboards">
      <router-link v-for="dashboard in dashboards" :key="dashboard.id" :to="{ path: '/dashboard/' + dashboard.id }" tag="div" class="dashboard">
        <div>
          {{ dashboard.name }} 
        </div>
      </router-link>
      <div @click="newDashboard" id="new-board" class="dashboard">
        Create a new board...
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboards',
  created() {
    const { dashboards } = this.$store.state

    if(dashboards.length === 0){
      this.fetchDashboards()
    }
    
  },
  computed: {
    dashboards() {
      return this.$store.state.dashboards
    }
  },
  methods : {
    fetchDashboards() {
      this.$store.dispatch('fetchDashboards')
    },
    newDashboard() {
      const name = prompt('Please enter a title of your dashboard', 'Add board title')
      
      if (name) {
        this.$store.dispatch('newDashboard', { name })
      }
    }
  }
}
</script>

<style scoped>
#page {
  padding: 20px;
}
.dashboards {
  display: flex;
  flex-wrap: wrap;
}
.dashboard {
  position: relative;
  width: 20%;
  height: 80px;
  margin: 0 2% 2% 0;
  padding: 15px;
  border-radius: 3px;
  background: #0066a3;
  color: #dadada;
  cursor: pointer;

  text-transform: capitalize;
  font-size: 16px;
  font-weight: 700;
}
.dashboard:hover{
  opacity: .8;
}
#new-board {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(9,45,66,.08);
  color: #6b808c;
  font-weight: 400;
}
#new-board:hover {
  background-color: rgba(9,45,66,.2);
  color: #17394d;
}
.delete {
  fill: white;
  position: absolute;
  top: 8%;
  right: 4%;
}
</style>
