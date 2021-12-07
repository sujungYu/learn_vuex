<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput ></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  // data() {
  //   return {
  //     todoItems: []
  //   }
  // },
  methods: {
    // addOneItem(todoItem) {
    //   const obj = {completed: false, item: todoItem}
    //   localStorage.setItem(todoItem, JSON.stringify(obj));//JSON.stringify를 이용해서 안에 어떤 값이 있고 변화값을 추척하기 위해 사용
    //   this.todoItems.push(obj); 
    // },
  //   removeOneItem(todoItem, index) {
  //     localStorage.removeItem(todoItem.item);
  //     this.todoItems.splice(index, 1) //배열을 지움
  // },
  // toggleOneItem(todoItem, index) {
  //   // todoItem.completed = !todoItem.completed;
  //   this.todoItems[index].completed = !this.todoItems[index].completed;
  //   //로컬 스토리지의 데이터를 갱신
  //   localStorage.removeItem(todoItem.item); //정보를 갱신하기 위한 업데이트가 없어 제거하고 다시 동일하게 셋팅하는것
  //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));

  //   },
    // clearAllItems() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
  },

  // created() {
  //       //localStorage 저장된 것을 가져온다
  //       if(localStorage.length > 0) {
  //           for (let i = 0; i < localStorage.length; i++) {
  //               if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
  //                   // console.log(JSON.parse(localStorage.getItem(localStorage.key(i)))); //꺼내오기
  //                   // this.todoItems.push(localStorage.key(i));
  //                   // console.log(localStorage.key(i));
  //                   this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //               }
  //           }
  //       }
  //   },

  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter

  }
  
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
