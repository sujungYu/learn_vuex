<template>
  <div>
      <transition-group name="list" tag="ul">
      <!-- <ul> -->
          <li v-for="(todoItem, index) in this.getTodoItems" v-bind:key="todoItem.item" class="shadow">
              <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click= "toggleComplete({todoItem, index})"></i>
              <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
              <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
                  <i class="fas fa-trash-alt"></i>
              </span>
         </li>
    </transition-group>
      <!-- </ul> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
    // props: ['propsdata'],
    // data: function() {
    //     return {
    //         todoItems: []
    //     }
    // },

    // created: function() {
    //     //localStorage 저장된 것을 가져온다
    //     if(localStorage.length > 0) {
    //         for(var i = 0; i < localStorage.length; i++) {
    //             if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
    //                 // console.log(JSON.parse(localStorage.getItem(localStorage.key(i)))); //꺼내오기
    //                 // this.todoItems.push(localStorage.key(i));
    //                 // console.log(localStorage.key(i));
    //                 this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    //             }
    //         }
    //     }
    // },
    methods: {

        ...mapMutations({
            removeTodo: 'removeOneItem', //인자를 따로 호출하지 않아도 넘겨준다.
            toggleComplete: 'toggleOneItem'
        }),

        // removeTodo(todoItem, index) {
        //     // this.$emit('removeItem', todoItem, index);
        
        //     this.$store.commit('removeOneItem', {todoItem, index});
        //     // console.log(todoItem, index);
        // },
        // toggleComplete(todoItem, index) {
        //     // this.$emit('toggleItem', todoItem, index)
        //     this.$store.commit('toggleOneItem', {todoItem, index});

        // }
    },
    computed: {
        // todoItems() {
        //     return this.$store.getters.getTodoItem;
        // }
        ...mapGetters(['getTodoItems'])
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background-color: white;
    border-radius: 5px;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}
/* transition css */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>