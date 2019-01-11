<template>
  <div id="modal-item" @keyup.esc="closeModalItem">
    <div id="content">
      <span @click="closeModalItem" id="close">
        <svg width="11" height="11" viewBox="0 0 24 24"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
      </span>
      <input :value="currentItem.text" @keyup.enter="renameItem" v-select />
      <span @click="deleteItem" id="trash">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#4d5154"><path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"/></svg>
      </span>
    </div>
  </div>
</template>

<script>
import { CLOSE_MODAL_ITEM } from '../store/mutations/const'

export default {
  name: 'ModalInput',
  props: {
    text: String
  },
  data: function() {
    return {
      itemName: "bonjour"
    }
  },
  computed: {
    currentItem: function() {
      return this.$store.state.currentItem
    }
  },
  directives: {
    select: {
      inserted: function(el) {
        el.select()
      }
    }
  },
  methods: {
    closeModalItem() {
      this.$store.commit(CLOSE_MODAL_ITEM)
    },
    deleteItem() {
      const { id } = this.$store.state.currentItem
      this.$store.dispatch('deleteItem', { id })
    },
    renameItem(e) {
      const text = e.target.value.trim()
      const { id } = this.$store.state.currentItem
      if (text) {
        this.$store.dispatch('renameItem', { id, text })
      } else {
        alert('Please, write a text in the area')
      }
    }
  }
}
</script>

<style scoped>
input {
  padding: 5px;
  width: 500px;
}
#modal-item{
  display: flex;
  position: fixed;
  top: 0;
  background: hsla(0, 0%, 0%, 0.8);
  width: 100%;
  height: 100vh;
  z-index: 20;
  justify-content: center;
  align-items: start;
}
#content{
  margin: 48px 0 80px;
  padding: 35px 20px 20px;
  background-color: #ebeef0;
  border-radius: 2px;
  position: relative;
  /* overflow: hidden; */
  /* width: 768px; */
  z-index: 25;
}
#trash {
  position: relative;
  top: 4px;
  margin-left: 5px;
  cursor: pointer;
}
#close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 200;
  padding: 5px 7px;
  cursor: pointer;
}
</style>
