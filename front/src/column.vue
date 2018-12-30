<template>
  <div class="column">
    <div class="title">{{ column.name }}</div>
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
  width: 272px;
  margin: 0 4px;
  padding: 5px;
  box-sizing: border-box;
  white-space: nowrap;
  background-color: #dfe3e6;
  border-radius: 3px;
}

.title{
  margin: 5px;
  padding: 5px;
  font-weight: bolder;
  color: #17394d;
  text-transform: capitalize;
}

.item {
  padding: 8px;
  margin: 0 4px 8px;
  color: #17394d;
  background: white;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9,45,66,.25);
  cursor: pointer;
}
.item:hover {
  background-color: #f9f7f7;
}
</style>