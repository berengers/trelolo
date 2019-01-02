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
  computed: {
    count() {
      return this.$store.state.count
    },
    columns() {
      return this.$store.state.columns
    }
  },
  methods: {
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
  display: flex;
  align-items: flex-start;
}
</style>
