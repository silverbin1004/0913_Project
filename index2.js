// 1. 템플릿 리터럴에서 변수를 문자열에 삽입하기 위해 사용되는 문법은 무엇인가요? --> 1번
// a) ${}
// b) {{}}
// c) @@
// d) %%

// 2. 아래 코드의 출력 결과는 무엇인가요? --> a
// let name = 'Gyejin';
// console.log(`Hello, ${name}!`);
// ​
// a) Hello, Gyejin!
// b) Hello, ${name}!
// c) Hello, undefined!
// d) 에러 발생

// 3. 템플릿 리터럴을 사용하여 여러 줄의 문자열을 어떻게 작성할 수 있나요? 
// --> 백틱을 사용하여 문자열을 작성하면 개행문자를 따로 쓰지 않아도 여러 줄에 걸쳐 문자열을 작성할 수 있다. 

// 4. 배열 디스트럭처링을 사용하여 변수 first와 second에 [10, 20]을 할당하는 코드를 작성하세요.
// const numbers = [10, 20];
// const [first, second] = numbers;

// console.log(first);
// console.log(second);

// 5. 객체 디스트럭처링을 사용하여 객체의 name과 age 속성을 변수로 추출하는 코드를 작성하세요.
// const person = { name: 'Gyejin', age: 28 };
// const {name, age} = person;

// console.log(name);
// console.log(age);
​
// 6. 디스트럭처링 할당에서 기본값을 설정할 수 있나요? (예 or 아니요) --> 예

// 7. 스프레드 연산자를 사용하여 두 배열 [1, 2]와 [3, 4]를 결합하는 코드를 작성하세요.
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const combi = [...arr1, ...arr2];

// console.log(combi);

// 8. 스프레드 연산자를 사용하면 배열을 깊은 복사할 수 있다. (참 or 거짓) -> 거짓

// 9. 아래 코드를 실행했을 때 출력 결과는 무엇인가요? --> a
// const arr = [1, 2];
// const newArr = [...arr, 3, 4];
// console.log(newArr);
// ​
// a) [1, 2, 3, 4]
// b) [1, 2]
// c) [3, 4, 1, 2]
// d) 에러 발생

// 10. 나머지 매개변수를 사용하여 여러 개의 숫자를 인자로 받아 그 합을 구하는 sum 함수를 작성하세요.
// function sum(...numbers){
//     return numbers.reduce((acc,curr) => {
//        return acc + curr;
//     },0);
// }

// console.log(sum(1,2,3,4));

// 11. 아래 함수의 결과는 무엇인가요? --> a
// function printNumbers(first, ...rest) {
//   console.log(first);
//   console.log(rest);
// }

// printNumbers(1, 2, 3, 4);
// ​
// a) 1과 [2, 3, 4]
// b) 1과 [1, 2, 3, 4]
// c) [1]과 [2, 3, 4]
// d) 에러 발생

// 12. 나머지 매개변수는 항상 함수의 마지막 매개변수로 사용되어야 한다. (참 or 거짓) --> 참

// 13. math.js 파일에서 add 함수를 기본 내보내기(default export)하고, main.js 파일에서 불러오는 코드를 작성하세요.
// // math.js:
// export default function add(a, b) {
//   return a + b;
// }

// // main.js:
// import add form './math.js';
// console.log(add(5,10));

// 14. 여러 함수를 ***명시적 내보내기(named export)***로 내보내는 예시 코드를 작성하세요.
    
//     ```jsx
//     // 파일 이름: math.js:
//     // 여기에 코드를 작성 하세요!
//     export function add(a,b){
//     return a + b;
//     }
//     export function sub(a,b){
//     return a - b;
//     }
//     ```

// 15. 아래 코드에서 `subtract` 함수를 ***별칭(alias)***으로 불러오는 코드를 작성하세요.
    
//     ```jsx
//     // math.js:
//     export function subtract(a, b) {
//       return a - b;
//     }
    
//     // main.js:
//     import {subtract as sub} from './math.js';
//     consol.log(sub(20,10));
//     ```
    
// 16. 모듈 시스템에서 동적 import는 무엇을 위한 것인가요? --> b
    
//     a) 정적인 코드를 동적으로 만들기 위함
    
//     b) 파일을 비동기적으로 불러오기 위함
    
//     c) 변수를 글로벌 스코프로 만들기 위함
    
//     d) 모듈을 전역 네임스페이스로 가져오기 위함

// 6. ES6 기능 관련 Recap (복습) 
// 1. ES6 클래스에서 `constructor`는 언제 호출되나요? --> c
    
//     a) 클래스를 정의할 때
    
//     b) 클래스 인스턴스를 생성할 때
    
//     c) 클래스 메서드를 호출할 때
    
//     d) 클래스가 상속될 때
    
// 2. 클래스 `Person`을 정의하고, 이름을 출력하는 `greet` 메서드를 작성하세요.
//     class Person {
//       constructor(name) {
//         this.name = name;
//       }
    
//       greet() {
//         console.log(`Hello, ${this.name}`);
//       }
//     }
    
//     const person = new Person('홍길동');
    
//     // greet 메서드 호출:
//     person.greet();
    
// 3. ES6 클래스에서 ***상속***을 구현하기 위한 키워드는 무엇인가요? --> a
    
//     a) extends
    
//     b) inherit
    
//     c) super
    
//     d) this

// 4. 아래 코드에서 `Promise`의 출력 결과는 무엇인가요? --> b
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve('Success'), 1000);
//     });
    
//     promise.then(result => console.log(result));
//     ```
    
//     a) 즉시 `'Success'` 출력
    
//     b) 1초 후 `'Success'` 출력
    
//     c) 에러 발생
    
//     d) 아무 것도 출력되지 않음
    
// 5. Promise의 세 가지 상태는 무엇인가요? --> pending, resolve, reject (대기,이행완료,이행실패)

// 6. `Promise.all`은 언제 사용하나요? --> b
    
//     a) 여러 Promise가 순차적으로 처리되도록 할 때
    
//     b) 여러 Promise를 병렬로 처리하고 모두 완료되면 하나의 결과를 얻을 때
    
//     c) 여러 Promise 중 첫 번째가 완료될 때 하나의 결과를 얻을 때
    
//     d) Promise의 에러를 처리할 때
    
// 7. 이터레이터의 기본 메서드는 무엇인가요? ***(난이도: Extra)*** --> b 
    
//     a) `yield`
    
//     b) `next`
    
//     c) `return`
    
//     d) `done`

    // 8. 제너레이터 함수를 정의하기 위한 키워드는 무엇인가요? ***(난이도: Extra)*** --> a
    
    // a) `function*`
    
    // b) `async`
    
    // c) `yield*`
    
    // d) `return*`
    
// 9. 아래 제너레이터 함수의 출력은 무엇인가요? ***(난이도: Extra)*** --> a
    
//     ```jsx
//     function* generator() {
//       yield 1;
//       yield 2;
//       return 3;
//     }
    
//     const gen = generator();
    
//     console.log(gen.next().value);
//     console.log(gen.next().value);
//     console.log(gen.next().value);
//     ```
    
//     a) `1, 2, 3`
    
//     b) `1, 2, undefined`
    
//     c) `undefined, undefined, 3`
    
//     d) 에러 발생

// 10. `Set`은 어떤 특징을 가지고 있나요? ***(난이도: Extra)*** --> a
    
//     a) 중복된 값을 허용하지 않는다
    
//     b) 키-값 쌍을 저장한다
    
//     c) 순서를 보장하지 않는다
    
//     d) 문자열만 저장할 수 있다
    
// 11. 아래 코드의 출력 결과는 무엇인가요? ***(난이도: Extra)*** --> a
    
//     ```jsx
//     const mySet = new Set([1, 2, 3, 3]);
    
//     console.log(mySet);
//     ```
    
//     a) `{1, 2, 3}`
    
//     b) `[1, 2, 3]`
    
//     c) `{1, 2, 3, 3}`
    
//     d) 에러 발생
    
// 12. `Map` 객체는 어떤 자료 구조인가요? ***(난이도: Extra)*** --> c
    
//     a) 값만 저장하는 자료 구조
    
//     b) 순서를 보장하는 배열
    
//     c) 키-값 쌍을 저장하는 자료 구조
    
//     d) 키가 없는 객체
    
// 13. `Map`의 메서드 중, 특정 키에 해당하는 값을 얻는 메서드는 무엇인가요? ***(난이도: Extra)*** --> get()
// let map = new Map(); //Map 객체 생성
// map.set("apple", 1000); //데이터 추가
// map.set("Banana", 2000);
// map.set("Orange", 3000);

// console.log(map.get("apple")); // 데이터 조회