<template>
  <div class="column">
    <svg @click='deleteColumn(column.id)' id="delete" width="12" height="12" viewBox="0 0 24 24">
      <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/>
    </svg>
    <div @click="inputColumn = true" class="title">
      <input v-if="inputColumn" v-select v-bind:value="column.name" 
      @keyup.esc="inputColumn = false" @keyup.enter="updateColumn(column.id, $event)"/>
      <span v-else>{{ column.name }}</span>
    </div>
    <div class="items">
      <div v-for="item in items" :key="item.id" @click="openModalItem(item.id)"  class="item">
        {{ item.text }}
      </div>
    </div>
    <div v-if='loading' class="loading">loading...</div>
    <div v-else-if='!formItemShow' @click='formItem' class="addItem">+ Add another card</div>
    <div v-else v-on:submit.prevent="noop" class="formItem">
      <div class="areaBlock">
        <textarea @keyup.enter.stop="addItem(column.id)" @keyup.esc.stop="formItemShow = false"  v-model="inputText" v-focus
        placeholder="Enter a title for this card..." type='text' />
      </div>
      <div @click='addItem(column.id)' class="btn btn-green">Add Card</div>
      <span @click='formItem'>cancel</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import { ADD_ITEM, OPEN_MODAL_ITEM } from '../store/mutations/const'

export default {
  name: 'Column',
  data: function() {
    return {
      inputColumn: false,
      formItemShow: false,
      inputText: ""
    }
  },
  directives: {
    select: {
      inserted: function (el) {
        el.select()
      },
    },
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  props: {
    column: Object
  },
  computed: {
    items: function() {
      return this.$store.state.items.filter(item => item.columnId === this.column.id)
    },
    loading: function() {
      return this.$store.state.loading
    }
  },
  methods: {
    ...mapMutations([
      'ADD_ITEM'
    ]),
    formItem() {
      this.formItemShow = !this.formItemShow
    },
    deleteColumn(id) {
      const conf = window.confirm('Are you sure you want a delete this column?')

      if (conf) {
        this.$store.dispatch('deleteColumn', { id })
      }
    },
    updateColumn(id, e) {
      const name = e.target.value.trim()
      if (name) {
        this.$store.dispatch('updateColumn', { id, name })
        this.inputColumn = !this.inputColumn
      }
    },
    addItem(columnId) {
      const inputText = this.inputText.trim()

      if (inputText) {
        this.$store.dispatch('newItem', {text: inputText, columnId: columnId })
      }
      
      this.inputText = ""
    },
    openModalItem(id) {
      this.$store.commit(OPEN_MODAL_ITEM, { id })
    }
  }
}
</script>

<style scoped>
.column {
  position: relative;
  width: 272px;
  margin: 0 4px;
  padding-top: 12px;
  flex-shrink: 0;
  box-sizing: border-box;
  background-color: #dfe3e6;
  border-radius: 3px;
  color: #17394d;
}
.loading {
  margin-top: 15px;
  padding: 7px;
  background: #adb6bb;
  text-align: center;
  border-radius: 0 0 3px 3px;
}
#delete {
  position: absolute;
  padding: 10px;
  right: 5px;
  cursor: pointer;
}
#delete:hover {
  fill: red;
}
.title {
  margin: 8px 10px 10px 20px;
  padding-right: 20px;
  font-weight: bolder;
  word-break: break-word;
  cursor: pointer;
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
  word-break: break-word;
}
.item:hover {
  background-color: #f5f6f7;
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