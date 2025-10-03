// Behind the scenes of async/await, it is built on top of Promises.
// It provides a more readable and straightforward way to work with asynchronous code compared to traditional Promise chaining using .then() and .catch().

// Example 1: Using async/await with 2 promises 5000ms and 10000ms
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise P1 Resolved"), 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise P2 Resolved"), 10000);
});

async function handlePromise() {
  console.log("Hello JavaScript");

  const val1 = await p1; // Suspends function execution from the call stack without blocking the main thread until p1 is resolved
  console.log("Namaste JavaScript 1");
  console.log(val1);

  const val2 = await p2; // Suspends function execution from the call stack without blocking the main thread until p2 is resolved
  console.log("Namaste JavaScript 2");
  console.log(val2);
}

handlePromise();

/* ------------------------------------------------------------------------------------------------------ */

/* // Example 2: Using async/await with 2 promises 10000ms and 5000ms
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise P3 Resolved"), 10000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise P4 Resolved"), 5000);
});

async function handlePromise2() {
  console.log("Hello JavaScript");

  const val1 = await p3; // Suspends function execution from the call stack without blocking the main thread until p3 is resolved
  console.log("Namaste JavaScript 1");
  console.log(val1);

  const val2 = await p4; // Suspends function execution from the call stack without blocking the main thread until p4 is resolved
  console.log("Namaste JavaScript 2");
  console.log(val2);
}

handlePromise2(); */

/* ------------------------------------------------------------------------------------------------------ */
