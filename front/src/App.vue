<template>
  <div id="page">
    <Column v-for="column in columns" :key="column.id" :column="column"/>
  </div>
</template>

<script>
import Column from './column.vue'

export default {
  name: 'App',
  data() {
    return {
      columns: [
        {
          id: 1,
          name: 'product backlog'
        },
        {
          id: 2,
          name: 'sprint backlog'
        }
      ]
    }
  },
  components: {
    Column
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>


<style scoped>
#page {
  display: flex;
  padding: 20px;
}
</style>
