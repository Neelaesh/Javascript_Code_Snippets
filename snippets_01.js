console.log(typeof typeof 123); // string as typeof 123 returns number, then typeof number returns string

/* ------------------------------------------------------------------------------------------------------ */

let a = 10;
function print() {
  console.log(a); // 10 as 'a' is in the outer lexical scope
}

/* ------------------------------------------------------------------------------------------------------ */

var b = 10;
(function () {
  console.log(b); // undefined due to variable hoisting; 'b' is declared but not yet assigned
  var b = 20;
})();

/* ------------------------------------------------------------------------------------------------------ */

const obj = {
  num: 100,
  regular: function () {
    return this.num;
  },
  arrow: () => this.num,
};

console.log(obj.regular()); // 100 as regular functions have their own 'this'
console.log(obj.arrow()); // undefined as arrow functions do not have their own 'this'

/* ------------------------------------------------------------------------------------------------------ */

// Task: Write code to return a promise which prints the text after a delay of wait in ms
function execute(inputString, wait) {
  // type your code here
}

execute("Hello, World!", 3000).then((result) => {
  console.log(result);
});

/* ------------------------------------------------ANS--------------------------------------------------- */
function execute(inputString, wait) {
  // type your code here
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(inputString), wait)
  );
}

/* ------------------------------------------------------------------------------------------------------ */

// Task: Create a function that returns a counter object
// Counter should be able to increment, decrement, and reset
function createCounter(initialValue = 0) {
  // Implement your solution
}

// Usage:
// const counter = createCounter(10)
// counter.increment() // 11
// counter.decrement() // 10
// counter.reset() // 10

/* ------------------------------------------------ANS--------------------------------------------------- */
function createCounter(initialValue = 0) {
  // Implement your solution
  return {
    increment: () => ++initialValue,
    decrement: () => --initialValue,
    reset: () => initialValue,
  };
}

const counter = createCounter(10);
counter.increment(); // 11
counter.decrement(); // 10
counter.reset(); // 10

/* ------------------------------------------------------------------------------------------------------ */

// Flatten an array using reducer
const arr = [[1, 2], [3, 4], [5]];
const flattened = arr.reduce((acc, cur) => acc.concat(cur), []);
console.log(flattened); // [1, 2, 3, 4, 5]

/* ------------------------------------------------------------------------------------------------------ */

// Sum of numbers using reducer
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

/* ------------------------------------------------------------------------------------------------------ */

// Count occurrences of items and return {apple: 3, banana: 2, orange: 1}
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count); // { apple: 3, banana: 2, orange: 1 }

/* ------------------------------------------------------------------------------------------------------ */

(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
})();

// 1
// 4
// 3
// 2

/* ------------------------------------------------------------------------------------------------------ */

const length = 4;
const num = [];
for (var i = 0; i < length; i++);
{
  num.push(i + 1);
}
console.log(num); // 5 because ; exists after for loop

/* ------------------------------------------------------------------------------------------------------ */

function foo() {
  let a = (b = 0);
  a++;
  return a;
}
foo();
console.log(typeof a); // undefined as a is of block scope (let)
console.log(typeof b); // number as b is attached to window obj as it is not declared with let/const and var

/* ------------------------------------------------------------------------------------------------------ */
