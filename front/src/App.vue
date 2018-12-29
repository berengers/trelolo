<template>
  <div id="page">
    <div class="column">
      <h2>Product Backlog</h2>
      <div>
        <div v-bind:key="item.id" v-for="item in items" class="item">
          {{ item.id + " - " + item.name }}
        </div>
      </div>
    </div>

    <div class="column">
      <h2>Product Backlog</h2>
      <div>
        <div v-bind:key="item.id" v-for="item in filtered" class="item">
          {{ item.id + " - " + item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'ticket 1',
          columnId: 1
        },
        {
          id: 2,
          name: 'ticket 2',
          columnId: 1
        },
        {
          id: 3,
          name: 'ticket 3',
          columnId: 2
        },
      ]
    }
  },
  computed: {
    filtered: function() {
      return this.items.filter((item) => item.columnId === 1)
    }
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

.column {
  padding: 15px;
  margin-right: 10px;
  background: red;
}

.item {
  padding: 5px;
  margin-bottom: 4px;
  color: white;
  font-weight: bolder;
  background: blue;
  cursor: pointer;
}
.item:hover {
  background-color: darkblue;
}
</style>
