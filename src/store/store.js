import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
            //localStorage 저장된 것을 가져온다
            if(localStorage.length > 0) {
                for (let i = 0; i < localStorage.length; i++) {
                    if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                        // console.log(JSON.parse(localStorage.getItem(localStorage.key(i)))); //꺼내오기
                        // this.todoItems.push(localStorage.key(i));
                        // console.log(localStorage.key(i));
                        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    }
                }
            }
        return arr;

    },
    
}

export const store = new Vuex.Store({
    state: {
        // headerText: 'TODO it!'
        todoItems: storage.fetch()
    },
    mutations: {
        addOneItem(state, todoItem) {
            // console.log('received');
            const obj = {completed: false, item: todoItem}
            localStorage.setItem(todoItem, JSON.stringify(obj));//JSON.stringify를 이용해서 안에 어떤 값이 있고 변화값을 추척하기 위해 사용
            state.todoItems.push(obj); 
          },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1) //배열을 지움
        },
        toggleOneItem(state, payload) {
            // todoItem.completed = !todoItem.completed;
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            //로컬 스토리지의 데이터를 갱신
            localStorage.removeItem(payload.todoItem.item); //정보를 갱신하기 위한 업데이트가 없어 제거하고 다시 동일하게 셋팅하는것
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        
            },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
            }

    },
    getters: {
		getTodoItems(state) {
			return state.todoItems;
		}
	}
})