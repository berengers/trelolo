<template>
  <div class="column">
    <h2>{{ column.name }}</h2>
    <div>
      <div v-for="item in items" v-if="column.id === item.columnId" :key="item.id"  class="item">
        {{ item.id + " - " + item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Column',
  props: {
    column: Object
  },
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

<style scoped>
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