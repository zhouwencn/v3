<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
import  {type Todo } from '../types/todo';
const todos = ref<Todo[]>([
  {id: 1, text: 'Learn Vue', done: true},
  {id: 2, text: 'Learn TypeScript', done: false},
  {id: 3, text: 'Build something awesome', done: false}
]);
const newTodoText = ref<string>('');
// const done = ref<boolean>(false);  
// 用于生成唯一 ID 的计数器
let nextTodoId: number = 4;

const addTodo = ():void => {
  const text = newTodoText.value.trim();
  if (text) { 
    // 推入符合 Todo 接口的新对象
  const newTodo: Todo = {
    id: nextTodoId++,
    text: newTodoText.value.trim(),
    done: false
  };
    todos.value.push(newTodo);
    newTodoText.value = '';
  }
}
const toggleDone = (id: number) => {
  const todo = todos.value.find(t => t.id === id);
  if (todo) {
    todo.done = !todo.done;
  }
}
const removeTodo = (id: number) => {
  todos.value = todos.value.filter(t => t.id !== id);
}
</script>

<template>
<div class="todo-app">
    <h1>📝 Vue 3 + TypeScript Todo List</h1>

    <form @submit.prevent="addTodo" class="input-form">
      <input
        v-model="newTodoText"
        placeholder="输入新的待办事项"
        autofocus
      />
      <button type="submit" :disabled="!newTodoText.trim()">添加</button>
    </form>
    
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        
        <input 
          type="checkbox" 
          :checked="todo.done" 
          @change="toggleDone(todo.id)" 
        />
        
        <span :class="{ done: todo.done }">
          {{ todo.text }}
        </span>
        
        <button @click="removeTodo(todo.id)" class="delete-btn">删除</button>
      </li>
      
      <li v-if="todos.length === 0" class="empty-list">
        暂无待办事项，快添加一个吧！
      </li>
    </ul>

  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
/* 样式与之前版本保持一致，此处省略 */
.todo-app {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

/* 输入表单样式 */
.input-form {
  display: flex;
  margin-bottom: 20px;
}

.input-form input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
}

.input-form button {
  padding: 10px 15px;
  background-color: #42b883; /* Vue 绿色 */
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.input-form button:hover:not(:disabled) {
  background-color: #33a06f;
}

.input-form button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

/* 列表样式 */
.todo-list {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 8px;
  background: white;
  border: 1px solid #eee;
  border-radius: 4px;
  transition: box-shadow 0.3s;
}

.todo-item:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.todo-item input[type="checkbox"] {
  margin-right: 15px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.todo-item span {
  flex-grow: 1;
  font-size: 16px;
  transition: color 0.3s, text-decoration 0.3s;
}

.todo-item span.done {
  color: #888;
  text-decoration: line-through;
}

.delete-btn {
  background-color: #f44336; /* 红色 */
  color: white;
  border: none;
  padding: 5px 10px;
  margin-left: 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.delete-btn:hover {
  background-color: #d32f2f;
}

.empty-list {
  text-align: center;
  color: #888;
  padding: 20px;
  font-style: italic;
}
</style>
