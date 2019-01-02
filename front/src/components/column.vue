<template>
  <div class="column">
    <div class="title">{{ column.name }}</div>
    <div class="items">
      <div v-for="item in items" v-if="column.id === item.columnId" :key="item.id"  class="item">
        {{ item.name }}
      </div>
    </div>
    <div v-if='!formItemShow' @click='formItem' class="addItem">+ Add another card</div>
    <div v-on:submit.prevent="noop" v-else class="formItem">
      <div class="areaBlock">
        <textarea v-on:keyup.enter.stop="addItem(column.id)" v-model="inputText" placeholder="Enter a title for this card..." type='text' />
      </div>
      <div @click='addItem(column.id)' class="btn btn-green">Add Card</div>
      <span @click='formItem'>cancel</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import { ADD_ITEM } from '../store/mutations/const'

export default {
  name: 'Column',
  data: function() {
    return {
      formItemShow: false,
      inputText: ""
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
    ...mapMutations([
      'ADD_ITEM'
    ]),
    formItem() {
      this.formItemShow = !this.formItemShow
    },
    addItem(columnId) {
      if (this.inputText.trim()) {
        // this.$store.commit( ADD_ITEM, {name: this.inputText.trim(), columnId: columnId })
        this.ADD_ITEM({name: this.inputText.trim(), columnId: columnId })
      }
      this.inputText = ""
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
  background-color: #dfe3e6;
  border-radius: 3px;
  color: #17394d;
}

.title{
  margin: 8px 10px 10px 20px;
  font-weight: bolder;
  text-transform: capitalize;
}
.items {
  padding: 0 10px;
}
.item {
  padding: 8px;
  margin-bottom: 7px;
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
.formItem {
  padding: 0 10px;
  margin-bottom: 10px;
}
.areaBlock {
  padding: 7px 0 0 7px;
  background-color: white;
  border-radius: 3px;
  border: 1px solid #ccc;
  box-shadow: 0 1px 0 rgba(9,45,66,.25);
}
.areaBlock textarea {
  max-width: 97%;
  width: 97%;
  border: none;
  color: #17394d;
}
.areaBlock textarea:focus {
  outline: none !important;
  border: none;
  box-shadow: 0;
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