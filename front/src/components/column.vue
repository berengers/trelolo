<template>
  <div class="column">
    <div class="title">{{ column.name }}</div>
    <div class="items">
      <div v-for="item in items" v-if="column.id === item.columnId" :key="item.id"  class="item">
        {{ item.id + " - " + item.name }}
      </div>
    </div>
    <div v-show='!formItemShow' @click='addItem' class="addItem">+ Add another card</div>
    <div v-show='formItemShow'>
      <div class="formItem">
        <textarea placeholder="Enter a title for this card..." type='text' />
      </div>
      <div class="btn btn-green">Add Card</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Column',
  data: function() {
    return {
      formItemShow: false
    }
  },
  props: {
    column: Object
  },
  computed: {
    items: function() {
      return this.$store.state.items
    }
  },
  methods: {
    addItem() {
      console.log('this.formItemShow ---->', this.formItemShow)
      this.formItemShow = true
      this.$store.commit({type: 'addItem', payload: { name: "rolalala" }})
    }
  }
}
</script>

<style scoped>
.column {
  width: 272px;
  margin: 0 4px;
  padding-top: 15px;
  flex-shrink: 0;
  box-sizing: border-box;
  white-space: nowrap;
  background-color: #dfe3e6;
  border-radius: 3px;
}

.title{
  margin: 8px 10px 10px 20px;
  font-weight: bolder;
  color: #17394d;
  text-transform: capitalize;
}
.items {
  padding: 0 10px;
}
.item {
  padding: 8px;
  margin-bottom: 7px;
  color: #17394d;
  background: white;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9,45,66,.25);
  cursor: pointer;
}
.item:hover {
  background-color: #f9f7f7;
}
.addItem {
  background-color: none;
  padding: 7px 10px 10px;
  color: #6b808c;
  cursor: pointer;
}
.addItem:hover {
  background-color: rgba(9,45,66,.13);
  color: #17394d;
}
.formItem textarea {
  display: block;
  max-width: 100%;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #ccc;
  box-shadow: 0 1px 0 rgba(9,45,66,.25);
}
.btn {
  display: inline-block;
  padding: 8px;
  margin-top: 10px;
  border-radius: 3px;
  box-shadow: 0 1px 0 0 #3f6f21;
  font-weight: bolder;
  cursor: pointer;
}
.btn-green {
  background-color: #5aac44;
  color: white;
}
.btn-green:hover {
  background-color: #4b8d39
}
</style>