# Modern React Deep Dive

## 1. 자바스크립트

### 1. 데이터 타입

- 원시타입과 객체 타입 존재
- 원시 타입
  - boolean , null , undefined , number , string, symbol , bigint 7가지 존재
- 객체 타입
  - 배열 , 함수 , 정규식 , 클래스 등

```js
// 원시 타입과 객체 타입의 값을 저장하는 방법의 차이
// 1. 원시 타입
let a = "a";
let b = "a";

console.log(a == b); // true

// 2. 객체 타입
var a = {
  name: "a",
};

var b = {
  name: "a",
};

console.log(a == b); // false
console.log(a.name == b.name); // true
```

- 원시 타입은 값을 저장하지만 , 객체 타입은 참조를 저장해서 , 각각 다른 참조를 바라보기 때문에 발생하는 현상.

```js
var a = {
  name: "a",
};

var b = a;

console.log(a == b); // true
```

- ES6 에서는 비교를 위해 `Object.is` 가 도입되었다.

### 2. 함수

- hoisting 이 일어나기 때문에 , 아래와 같은 현상도 정상 작동

```js
a();

function a() {
  console.log("a");
}

a();
```

- 함수의 부수 효과 ( side-effect ) 를 최대한 억제하는 것이 중요.
- side-effect 가 발생하지 않을 수는 없지만 , 최대한 줄여야함 . react 의 경우 , useEffect 의 사용을 최소화해서 컴포넌트의 안정성 향상
- 함수를 최대한 작게 만드는 것이 중요 ( 커지면 읽기도 어렵고 , 추적하기도 어려움 )
- 즉 , 함수는 1가지 일만 잘하면 된다.

### 3. [클로저](https://velog.io/@k1my3ch4n/React-%EC%9D%98-scope-%EC%99%80-closer)

### 4. 비동기 통신과 이벤트루프

### 5. 구조 분해 할당

## 2. JSX

### 1. 가상 돔

### 2. 생명주기

### 3. 함수 컴포넌트 vs 클래스 컴포넌트

### 4. 렌더링이 일어나는 과정

### 5. 메모이제이션은 필요하다 vs 섣불리 메모이제이션을 해서는 안 된다

## 3. Hook

### 1. useState

- useState 에 초기값으로 함수를 넣을 수 있는데 , 이를 `lazy initialization` 이라 함
- 초깃값이 복잡하거나 , 무거운 연산을 가지고 있을 경우에 사용. 이 함수는 state 가 처음 만들어질 때만 실행된다.
- localStorage , sessionStorage 나 map, filter 등을 사용하는 배열이나 무거운 연산 시 사용하는 것을 추천

### 2. useEffect

### 3. useMemo

### 4. useCallback

### 5. useRef

### 6. useContext

### 7. useReducer

### 8. useLayoutEffect

### 9. rules of hooks

### 10. 고차 컴포넌트

### 11. custom Hook vs 고차 컴포넌트 ( HOC )
