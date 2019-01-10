<template>
  <div id="dashboard">
    <div id="menu">
      <a @click="deleteDashboard">
        <svg width="10" height="10" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg>
        <span>Delete Dashboard</span>
      </a>
    </div>
    <div id="columns">
      <Column v-for="column in columns" :key="column.id" :column="column"/>
      <button @click='add'>new column</button>
    </div>
  </div>
</template>

<script>
import Column from './column.vue'

export default {
  name: 'Dashboard',
  created() {
    const { currentDashboard } = this.$store.state
    const { id } = this.$route.params

    if (currentDashboard.id !== parseInt(id)) {
      this.fetchDashboard()
    }
    
  },
  computed: {
    columns() {
      return this.$store.state.columns
    }
  },
  methods: {
    fetchDashboard() {
      this.$store.dispatch('fetchDashboard', { id: this.$route.params.id })
      .catch(error => { this.$router.replace('/dashboards') })
    },
    deleteDashboard() {
      this.$store.dispatch('deleteDashboard', { id: this.$route.params.id })
    },
    add (state) {
      this.$store.commit('addColumn')
    }
  },
  components: {
    Column
  }
}
</script>

<style scoped>
#dashboard {
  width: 100%;
  overflow: auto;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
#menu {
  margin-bottom: 13px;
  text-align: right;
}
#menu a {
  padding: 5px 10px;
  cursor: pointer;
  color: #17394d;
}
#menu a:hover {
  background: hsla(0, 0%, 84%, 0.53);
}
#menu svg {
  position: relative;
  bottom: 2px;
  margin-right: 3px;
}
#menu a span {
  text-decoration: underline;
}
#columns {
  display: flex;
  align-items: flex-start;
}
</style>
