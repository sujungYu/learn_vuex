<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <!-- <button v-on:click="addTodo">add</button> -->
      <span class="addContainer" v-on:click="addTodo">
          <i class="fas fa-plus addBtn"></i>
      </span>

      <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고 
        <i class="closeModalBtn fa fa-times" 
          aria-hidden="true" 
          @click="showModal = false">
        </i>
      </h3>
      <p slot="body">할 일을 입력하세요.</p>
    </Modal>
 </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data() {
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo() {
            if(this.newTodoItem !=='') {
                // const text = this.newTodoItem.trim(); //trim은 입력된 값의 앞뒤 공백을 비워주는 것
                this.$store.commit('addOneItem', this.newTodoItem)
                // this.$emit('addTodoItem', this.newTodoItem) //App.vue로 보냄
                // console.log(this.newTodoItem);
                // 저장하는 로직
                // var obj = {completed: false, item:this.newTodoItem}
                // localStorage.setItem(this.newTodoItem, JSON.stringify(obj)); //JSON.stringify를 이용해서 안에 어떤 값이 있고 변화값을 추척하기 위해 사용
                this.clearInput(); //this로 method 접근 가능

            } else {
                this.showModal = !this.showModal;
            }
            
        },
        clearInput() {
             this.newTodoItem = ""; //초기화

        }

    },
    components: {
        Modal
  }

}
</script>

<style scoped>
input:focus {
    /*input에 초점이 맞춰졌을 때 outline은 none*/
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}

</style>