<template>
  <div id="page">
    <h1>My Dashboards</h1>
    <div class="dashboards">
      <router-link v-for="dashboard in dashboards" :key="dashboard.id" :to="{ path: '/dashboard/' + dashboard.id }" tag="div" class="dashboard">
        <div>
          {{ dashboard.name }} 
        </div>
      </router-link>
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
  width: 20%;
  height: 80px;
  margin-right: 2%;
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
</style>
