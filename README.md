<div align="center">
<h1>캡틴 판교 vue.js 중급강좌  </h1>
2021년 11월 25일 ~ 2021년 12월 7일
</div>

### 학습 내용
+ 컴포넌트 기반 설계 방식
+ 컴포넌트 구조화 및 컴포넌트 통신 방법
+ ES5의 주요 특징 중심으로 체득하고 ES6로 리팩토링
+ Vuex를 이용한 상태 관리의 이해 및 적용 방법

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

### [ ES5 ]
#### 함수 선언식과 함수 표현식 
```js
// function statement
function sum() {
    return 10 + 20;
}
// function expression (; 존재)
var sum = function () {
    return 10 + 20;
};
```
 
#### 변수의 Scope - {} 에 상관없이 스코프 설정
```javascript
var sum = 0;
for(var i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log(sum); // 15
console.log(i); // 6
```

#### 호이스팅 - 선언한 함수와 변수를 상단에 있는 것처럼 인식
```js
 function willbeoverridden() {
     return 10;
 }
 willbeoverridden(); // 5
 function willbeoverridden() {
     return 5;
 }
```

### [ ES6 ]
#### Bable - ES6 문법을 각 브라우저의 호환 가능한 ES5로 변환하는 컴파일러
#### const, let
```js
/* 예시 */
const a = 10;
a = 20; // Uncaught TypeError: Assignment to constant variable

/* [주의!] 하지만, 객체나 배열의 내부는 변경할 수 있다. */
const a = {};
a.num = 10;
console.log(a); // {num: 10}

const b = [];
b.push(20);
console.log(b); // [20]
```
```js
function f() {
    {
       let x;
       {
           // 새로운 블록 안에 새로운 x의 스코프가 생김
           const x = "sneaky";
           x = "foo"; // 위에 이미 const로 x를 선언했으므로 다시 값을 대입하면 Error
       }
       // 이전 블록 범위로 돌아왔기 때문에 'let x'에 해당하는 메모리에 값을 대입
       x = "bar";
       let x = "inner"; // SyntaxError: Identifier 'x' has already been declared
    }
}
```
#### 화살표 함수
```js
/* 화살표 함수 사용 예시 */

var arr = ["a", "b", "c"];
// ES5
arr.forEach(function(value){ // 익명 함수
    console.log(value); // a, b, c
});
// ES6
arr.forEach(value => console.log(value)); /, b, c
```

#### 향상된 객체 리터럴

```js
// 객체 
var dictionary = {
    words: 100, 
    /* 속성 메서드: 속성에 function을 연결 */
    // ES5
    lookup: function() {
        console.log("find words");
    },
    // ES6 - ': funtion' 생략 
    lookup() {
        console.log("find words");
    }
};
```
#### Modules 
```js
// libs/math.js
export function sum(x, y) {
    return x + y;
}
export var pi = 3.141592;

// main.js
import {sum} from libs/math.js;
sum(1, 2);
```
```js
// util.js
export default function(x) {
    return console.log(x);
}
// main.js
import util from `util.js`;
console.log(util); // function(x) {return console.log(x);}
```

## Practice Project
### Todo App
일과 생활 관리를 위한 서비스 (실습 프로젝트)

### ScreenShot
![image](https://user-images.githubusercontent.com/87973617/211990250-cc758733-751c-4f4d-9ae5-b8c1ade1d1d5.png)
### Component
+ TodoHeader : 앱 헤더
+ TodoInput : 할일 입력
+ TodoList : 목록
+ TodoFooter : 전체삭제

### Composition
#### 할 일 추가 기능
+ 할 일을 입력하고 엔터를 입력하면 할 일이 추가된다.
+ 할 일을 입력하고 + 버튼을 클릭하면 할 일이 추가된다.
+ 아무 입력 값 없이 할 일 추가 이벤트를 발생시키면 경고창이 뜬다.
#### 할 일 목록 표시 기능
+ 추가한 할 일 목록을 보여준다.
#### 할 일 삭제 기능
+ 삭제한 할 일은 목록에서 삭제된다.
#### 할 일 완료 기능
+ 완료한 할 일은 취소선으로 변경된다.

### Description
+ Slot을 사용하여 재사용 가능한 모달창 구현
+ Vue Transition을 사용하여 항목이 DOM에 삽입, 갱신, 제거 될때 효과가 적용되도록 구현
+ Vuex를 활용해 컴포넌트 간에 통신이나 데이터를 효율적으로 전달하도록 구현
+ Vuex Helper 함수로 Vuex 기술 요소를 컴포넌트에서 편리하게 사용하도록 코드 작성

## Application Project
### [offco](https://github.com/sujungYu/offco_web-app)
단체 모임을 위한 sns 서비스 (응용 프로젝트)



