# learn_vuex
+ 캡틴 판교 <vue.js 중급강좌>     
+ 2021년 11월 25일 ~ 2021년 12월 7일

## Content
### [ Vuex - 상태관리 라이브러리 ]
#### Vuex 란?
    무수히 많은 컴포넌트를 관리하기 위한 상태관리 패턴이자 라이브러리
#### Vuex 기술 요소
    state : 여러 컴포넌트에 공유되는 데이터 (data) 
    getters : 연산된 state 값을 접근하는 속성 (computed)
    mutations : state 값을 변경하는 이벤트로직, 메서드 (methods)
    actions : 비동기 처리 로직을 선언하는 메서드 (async methods)
#### state 란?
    여러 컴포넌트 간에 공유할 데이터(상태)
    ex) this.$store.state.message
#### getters 란?
    state 값을 접근하는 속성이자 computed() 처럼 미리 연산된 값을 접근하는 속성
    ex) this.$store.getters.getNumber
#### mutation 란?
    state 값을 변경할 수 있는 유일한 방법이자 메서드
    ex) this.$store.commit('sumNumber', 20)
#### actions 란?
    비동기 처리 로직을 선언하는 메서드, 비동기 로직을 담당하는 mutations
    데이터 요청, Promise, ES6 async과 같은 비동기 처리는 모두 actions에 선언
    ex) this.$store.dispatch('fetchProductData')
#### Backend의 데이터를 actions에서 호출하여 꺼내서 바로 state에 넣을 수 없다.
    Vuex의 구조상 비동기 호출은 actions에서 하고, 받아온 데이터를 mutation을 통해서 state에 넣어주게 되어있기 때문이다.
### [ Vuex 헬퍼 함수 ]
#### Vuex 헬퍼 함수란?
    store에 있는 4가지 속성들을 간편하게 코딩하는 방법
+ state -> mapState
+ getters -> mapGetters
+ mutations -> mapMutations
+ actions -> mapActions
