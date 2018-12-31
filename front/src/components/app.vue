<template>
  <div id="page">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from './dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
body, input, textarea{
  font-size: 15px;
  font-family: Helvetica Neue,Arial,Helvetica,sans-serif;
}
</style>

<style scoped>
#page {
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
  background-color: rgb(210, 144, 52);
}
</style>
