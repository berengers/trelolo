<template>
  <div id="page">
    <router-view></router-view>
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
  height: 100vh;
  box-sizing: border-box;
  overflow: auto;
  background-color: #f8f9f9;
}
</style>
