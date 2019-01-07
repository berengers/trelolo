<template>
  <div id="dashboard">
    <Column v-for="column in columns" :key="column.id" :column="column"/>
    <button @click='add'>new column</button>
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
      .catch(bliblou => { this.$router.replace('/dashboards') })
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
  display: flex;
  align-items: flex-start;
  overflow: auto;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: blue;
}
</style>
