<template>
  <div id="dashboard">
    <ModalItem v-if="modalItem" /> 
    <div id="menu">
      <a @click="deleteDashboard">
        <svg width="10" height="10" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg>
        <span>Delete Dashboard</span>
      </a>
    </div>
    <div id="columns">
      <Column v-for="column in columns" :key="column.id" :column="column"/>
      <a @click='newColumn' id="new-list">+ Add another list</a>
    </div>
  </div>
</template>

<script>
import Column from './column.vue'
import ModalItem from './modalItem.vue'

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
    },
    modalItem() {
      return this.$store.state.modalItem
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
    newColumn() {
      const { id } = this.$store.state.currentDashboard
      const name = prompt('Please, enter name of your column', 'name')

      if (name) {
        this.$store.dispatch('newColumn', { name, dashboardId: id })
      }
    }
  },
  components: {
    Column,
    ModalItem
  }
}
</script>

<style scoped>
#dashboard {
  width: 100%;
  overflow: auto;
  height: 100%;
  box-sizing: border-box;
}
#menu {
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
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
  padding: 30px 10px 0;
}
#new-list {
  width: 272px;
  flex-shrink: 0;
  background-color: rgba(0,0,0,.32);
  border-radius: 3px;
  padding: 11px;
  margin: 0 4px;
  color: white;
}
#new-list:hover {
  background-color: rgba(0,0,0,.4);
  cursor: pointer;
}
</style>
