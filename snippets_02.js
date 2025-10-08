console.log("A");
setTimeout(() => console.log("B"), 0); // setTimeout callback is scheduled in macrotask queue
Promise.resolve().then(() => console.log("C")); // Promise callback is scheduled in microtask queue
console.log("D");

// A
// D
// C Once call stack is empty, Microtask queue is processed first
// B After Microtask queue is empty, Macrotask queue is processed

/* ------------------------------------------------------------------------------------------------------ */

console.log(1); // Synchronous log
async function test() {
  console.log(2); // Synchronous log inside async function
  await Promise.resolve(); // Awaiting a resolved promise, which suspends function execution from the call stack without blocking the main thread
  console.log(3); // This log is scheduled in the microtask queue and will execute after the current call stack is empty
}
test(); // Calling the async function
console.log(4); // Synchronous log

// 1
// 2
// 4
// 3 Once call stack is empty, Microtask queue is processed

/* ------------------------------------------------------------------------------------------------------ */

console.log(1); // Synchronous log
function test() {
  console.log(2); // Synchronous log inside function
  Promise.resolve(); // Creating a resolved promise
  console.log(3); // Synchronous log inside function
}
test(); // Calling the function
console.log(4); // Synchronous log

// 1
// 2
// 3
// 4

/* ------------------------------------------------------------------------------------------------------ */

console.log(1); // Synchronous log
function test() {
  console.log(2); // Synchronous log inside function
  Promise.resolve(); // Creating a resolved promise
  console.log(3); // Synchronous log inside function
}
console.log(4); // Synchronous log
test(); // Calling the function

// 1
// 4
// 2
// 3

/* ------------------------------------------------------------------------------------------------------ */

console.log(1); // Synchronous log
function test() {
  console.log(2); // Synchronous log inside function
  Promise.resolve().then(() => console.log(3)); // Promise callback is scheduled in microtask queue
  console.log(4); // Synchronous log inside function
}
test();
console.log(5); // Synchronous log

// 1
// 2
// 4
// 5
// 3 Once call stack is empty, Microtask queue is processed

/* ------------------------------------------------------------------------------------------------------ */

console.log(1); // Synchronous log
function test() {
  console.log(2); // Synchronous log inside function
  Promise.resolve().then(() => console.log(3)); // Promise callback is scheduled in microtask queue
  console.log(4); // Synchronous log inside function
}
console.log(5); // Synchronous log
test();

// 1
// 5
// 2
// 4
// 3 Once call stack is empty, Microtask queue is processed

/* ------------------------------------------------------------------------------------------------------ */

var x = 10;
function foo() {
  console.log(x);
  var x = 20;
}
foo();

// undefined due to hoisting of var x inside foo function. It's declared but not initialized when console.log is executed

/* ------------------------------------------------------------------------------------------------------ */

var y = 10;
function foo() {
  console.log(y);
  var x = 20;
}
foo();

// 10 as y is looked up in the outer scope where it is defined and initialized

/* ------------------------------------------------------------------------------------------------------ */

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 3 3 3 because var is function scoped. By the time setTimeout callbacks execute, the loop has completed and i is 3

/* ------------------------------------------------------------------------------------------------------ */

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1000);
}

// 0
// 1
// 2 because let is block scoped. Each iteration of the loop creates a new binding for j

/* ------------------------------------------------------------------------------------------------------ */

console.log([] + []); // "" because empty arrays are converted to empty strings ("") and concatenated
console.log({} + []); // [object Object] + '' results in '[object Object]'
console.log([] + {}); // '' + [object Object] results in '[object Object]'
console.log({} + {}); // [object Object] + [object Object] results in [object Object][object Object]
console.log([] == ![]); // true because [] is converted to '' and ![] is false, so '' == false which is true after type coercion
// ! - converts the operand to boolean and negates it
// [] - is an object which is truthy, so ![] is false
// Abstract Equality Comparison Algorithm steps: [] == false
// 1. If one side is boolean, convert it to number: [] == 0
// 2. If one side is object, convert it to primitive. Arrays are converted to strings via toString(): '' == 0
// 3. If one side is string and other is number, convert string to number: 0 == 0
// 4. Now both sides are number, compare them: true

/* ------------------------------------------------------------------------------------------------------ */

console.log(true + true); // 1+ 1 = 2 because the operands are not string, so they are converted to numbers
console.log(false + false); // 0 + 0 = 0 because the operands are not string, so they are converted to numbers
console.log(false + true); // 0 + 1 = 1 because the operands are not string, so they are converted to numbers
console.log(true + false); // 1 + 0 = 1 because the operands are not string, so they are converted to numbers
console.log("true" + true); // "true" + "true" = "truetrue" because one operand is string, so the other is converted to string and concatenated

/* ------------------------------------------------------------------------------------------------------ */

console.log("5" - 2); // 5 - 2 = 3 because one of the operand is not string and - operator is used.
console.log("5" + 2); // '5' + '2' = '52' because one of the operand is string and + operator is used.
console.log("5" * 2); // 5 * 2 = 10 because one of the operand is not string and * operator is used.
console.log("5" / 2); // 5 / 2 = 2.5 because one of the operand is not string and / operator is used.
console.log("5" % 2); // 5 % 2 = 1 because one of the operand is not string and % operator is used.

/* ------------------------------------------------------------------------------------------------------ */

console.log(null + null); // 0 + 0 = 0 because the operands are not string, so they are converted to numbers
console.log(undefined + undefined); // NaN + NaN = NaN because undefined is converted to NaN in numeric context
console.log(null + undefined); // 0 + NaN = NaN because undefined is converted to NaN in numeric context
console.log(null == undefined); // true because in Abstract Equality Comparison Algorithm, null and undefined are considered equal as they represent no value
console.log(null === undefined); // false because they are of different types
console.log(typeof null); // object due to a historical bug in JavaScript
console.log(typeof undefined); // undefined

/* ------------------------------------------------------------------------------------------------------ */