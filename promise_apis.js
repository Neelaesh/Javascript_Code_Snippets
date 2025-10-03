const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("P1 Success"), 3000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("P2 Success"), 1000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("P3 Failed"), 2000);
});

// Promise.all example
Promise.all([p1, p2, p3])
  .then(function (results) {
    console.log("Promise.all ", results);
  })
  .catch(function (error) {
    console.error("Promise.all ", error); // "P3 Failed"
  });

/* ------------------------------------------------------------------------------------------------------ */

// Promise.allSettled example
Promise.allSettled([p1, p2, p3])
  .then(function (results) {
    console.log("Promise.allSettled ", results); // [{status: "fulfilled", value: "P1 Success"}, {status: "fulfilled", value: "P2 Success"}, {status: "rejected", reason: "P3 Failed"}]
  })
  .catch(function (error) {
    console.error("Promise.allSettled ", error);
  });

/* ------------------------------------------------------------------------------------------------------ */

// Promise.race example
Promise.race([p1, p2, p3])
  .then(function (result) {
    console.log("Promise.race ", result); // "P2 Success"
  })
  .catch(function (error) {
    console.error("Promise.race ", error);
  });

/* ------------------------------------------------------------------------------------------------------ */

// Promise.any example
Promise.any([p1, p2, p3])
  .then(function (result) {
    console.log("Promise.any ", result); // "P2 Success"
  })
  .catch(function (error) {
    console.error("Promise.any ", error);
  });

/* ------------------------------------------------------------------------------------------------------ */
