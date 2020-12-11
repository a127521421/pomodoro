<template>
  <div class="list">
    <div class="p-3 background position-relative">
      <!-- 輸入跟newtodo綁定 -->
      <b-form-input v-model="newtodo"></b-form-input>
      <!-- 按鈕，按下去會觸發 addTodo 這個function -->
      <b-btn class="list-button" @click="addTodo">+</b-btn>
    </div>
    <!-- 表格 -->
    <b-table-simple class="mt-3">
      <!-- 表頭 -->
      <b-thead>
        <b-tr>
          <b-th class="width50">事項</b-th>
          <b-th class="width50">動作</b-th>
        </b-tr>
      </b-thead>
      <!-- 可移動的項目 -->
      <!-- 因為手機版無法移動，需要刪掉 -->
      <!-- 如果沒東西的話，顯示沒有資料 -->
      <!-- <draggable v-model="todos" tag="tbody" v-bind="dragOption"> -->
        <b-tr v-if="todos.length == 0">
          <b-td colspan="2">沒有資料</b-td>
        </b-tr>
        <!-- 如果有東西的話，顯示資料 -->
        <b-tr v-else v-for="(todo, index) in todos" :key="index">
          <b-td class="width50">
            <!-- 如果是編輯的狀態的話，顯示 -->
            <b-form-input v-model="todo.model" v-if="todo.edit"></b-form-input>
            <!-- 重製按鈕 -->
            <b-btn variant="link" class="text-danger" v-if="todo.edit" @click="cancelTodo(index)">
              <font-awesome-icon :icon="['fas', 'undo']"></font-awesome-icon>
            </b-btn>
            <b-btn variant="link" class="text-success" v-if="todo.edit" @click="saveTodo(index)">
              <font-awesome-icon :icon="['fas', 'save']"></font-awesome-icon>
            </b-btn>
            <span v-else>{{ todo.name }}</span>
          </b-td>
          <b-td class="width50">
            <b-btn variant="link" class="text-primary" @click="editTodo(index)">
              <font-awesome-icon :icon="['fas', 'pen']"></font-awesome-icon>
            </b-btn>
            <b-btn variant="link" class="text-danger" @click="delTodo(index)">
              <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
            </b-btn>
            <b-btn variant="link" class="text-dark" @click="editUp(index)">
              <font-awesome-icon :icon="['fas', 'angle-up']"></font-awesome-icon>
            </b-btn>
            <b-btn variant="link" class="text-dark" @click="editDown(index)">
              <font-awesome-icon :icon="['fas', 'angle-down']"></font-awesome-icon>
            </b-btn>
          </b-td>
        </b-tr>
      <!-- </draggable> -->
    </b-table-simple>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'list',
  data () {
    return {
      newtodo: '',
      dragOption: {
        animation: 200
      }
    }
  },
  methods: {
    addTodo () {
      this.$store.commit('addTodo', this.newtodo)
      this.newtodo = ''
      Swal.fire({
        icon: 'success',
        text: '成功'
      })
    },
    delTodo (index) {
      this.$store.commit('delTodo', index)
    },
    editTodo (index) {
      this.$store.commit('editTodo', index)
    },
    editUp (index) {
      this.$store.commit('editUp', index)
    },
    editDown (index) {
      this.$store.commit('editDown', index)
    },
    cancelTodo (index) {
      this.$store.commit('cancelTodo', index)
    },
    saveTodo (index) {
      this.$store.commit('saveTodo', index)
    }
  },
  computed: {
    todos: {
      get () {
        return this.$store.getters.todos
      },
      set (value) {
        this.$store.commit('dragTodo', value)
      }
    }
  }
}
</script>
