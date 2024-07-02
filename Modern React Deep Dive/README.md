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

## 4. server side rendering

### 1. csr vs ssr

- client side rendering , single page application 은 자바스크립트를 활용해 하나의 페이지에서 렌더링을 수행한다 . 초기 화면에 `body` 내부에는 아무것도 존재하지 않고 , 여기에 DOM 을 추가 / 삭제하는 과정으로만 화면이 이루어진다.
- 이 때 초기에 자바스크립트를 불러오는 과정에서만 로딩이 존재하고 , 그 이후에는 화면의 전환이 빠르게 이루어진다.
- 다만 , 이 때 초기 로딩이 늦어지고 , 심지어 모바일에서도 굉장히 느려지기 때문에 그 태생적인 한계가 존재한다.
- 이를 해결하기 위해 , 서버에서 렌더링 후 불러오는 sever side rendering 이 다시 떠오르고 있음
- ssr 의 경우 최초 페이지 진입이 빠르다 . 특히 화면 렌더링에 HTTP 요청이 많거나 렌더링해야할 HTML 의 크기가 클 경우 그 차이가 더욱 커진다.
- 검색 엔진 최적화 등의 경우 자바스크립트가 필요 없고 페이지의 정적인 정보만 필요하기 때문에 csr 보다 대응하기 쉽다.
- csr 의 경우 , 페이지의 API 요청에 따라서 레이아웃이 변경될 가능성이 많다. 예를 들어 , 하단 정보가 먼저 표출되고 그 후 상단 정보가 표출되어서 하단 정보가 밀린다던가 하는 현상이 많을 수 있는데 , ssr의 경우 서버에서 미리 만들어주기 때문에 그럴 가능성이 현저히 적다.
- 다만 csr 의 경우 사용하는 브라우저의 성능을 고려해야 하지만 , ssr 의 경우 서버의 성능을 고려해야 하기 때문에 때에 따라서는 각각이 장단점이 될 수 있다.
- 가장 완벽한 SPA 는 MPA 보다 낫지만 , 평균적 으로는 MPA 가 SPA 보다 빠르다 . 따라서 어느 게 옳다고 할 수는 없지만 , 상황에 따라서 적절하게 사용해야 한다.

### 2. Next.js

## 5. 상태 관리

### 1. recoil

### 2. Zustand

## 6. 리액트 개발 도구 디버깅
