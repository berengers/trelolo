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
        },
        {
          id: 3,
          name: 'Current'
        },
        {
          id: 4,
          name: 'Waiting Validation'
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
  font-size: 13px;
  font-family: Helvetica Neue,Arial,Helvetica,sans-serif;
}
</style>


<style scoped>
#page {
  display: flex;
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
  align-items: flex-start;
  background-color: rgb(210, 144, 52);
}
</style>
