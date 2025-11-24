# JavaScript Promises — Full Detailed Notes

## 📌 Introduction

A **Promise** in JavaScript is an object that represents the eventual **completion** or **failure** of an asynchronous operation. It acts as a placeholder for a value that will be available now, later, or never.

Promises help avoid "callback hell" and make async code cleaner and more manageable.

---

## 📌 Why Promises?

Before Promises, developers relied heavily on **callbacks**, which often resulted in:

* Nested callback hell
* Hard-to-read code
* Difficult error handling

Promises solve these problems by offering:

* Chained operations
* Centralized error handling
* Cleaner syntax

---

## 📌 Promise States

A Promise has **three states**:

| State         | Meaning                                |
| ------------- | -------------------------------------- |
| **Pending**   | Initial state, operation not completed |
| **Fulfilled** | Operation completed successfully       |
| **Rejected**  | Operation failed                       |

Once a state changes from pending → fulfilled/rejected, it becomes **immutable**.

---

## 📌 Promise Syntax

```js
let promise = new Promise((resolve, reject) => {
  // async task
});
```

* `resolve()` → success
* `reject()` → failure

---

## 📌 Example of a Simple Promise

```js
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed successfully!");
  } else {
    reject("Something went wrong!");
  }
});

myPromise.then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
});
```

---

## 📌 Promise Methods

### 1. `.then()` — handle success

```js
promise.then(value => {
  console.log(value);
});
```

### 2. `.catch()` — handle errors

```js
promise.catch(err => {
  console.log(err);
});
```

### 3. `.finally()` — executes regardless of success or failure

```js
promise.finally(() => {
  console.log("Done!");
});
```

---

## 📌 Chaining Promises

```js
fetchData()
  .then(step1)
  .then(step2)
  .then(step3)
  .catch(error => console.log(error));
```

Promise chaining eliminates callback nesting.

---

## 📌 Promise Combinators

### **1. Promise.all()**

Runs all promises in parallel. Fails if *any* fail.

```js
Promise.all([p1, p2, p3]).then(results => console.log(results));
```

### **2. Promise.race()**

Returns the result of the *first settled* promise.

```js
Promise.race([p1, p2]).then(result => console.log(result));
```

### **3. Promise.allSettled()**

Waits for all, regardless of success or failure.

### **4. Promise.any()**

Returns first **successful** promise.
If all fail → throws AggregateError.

---

## 📌 Real-world Example — Fetching Data

```js
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));
```

---

## 📌 Promise vs Callback

| Callback            | Promise                    |
| ------------------- | -------------------------- |
| Nested structure    | Flat, chainable            |
| Hard error handling | Centralized error handling |
| Unpredictable flow  | Predictable async flow     |

---

## 📌 Converting Callback to Promise

```js
function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

wait(1000).then(() => console.log("1 second passed"));
```

---

## 📌 Using Promises with Async/Await

```js
function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data received"), 1000);
  });
}

async function fetchData() {
  let data = await getData();
  console.log(data);
}

fetchData();
```

---

## 📌 Pros & Cons of Promises

### ✅ Pros

* Avoid callback hell
* Cleaner async code
* Central error handling
* Works well with async/await

### ❌ Cons

* Still slightly complex compared to async/await
* Promise chains can be mismanaged

---

## 📌 Common Promise Interview Questions

1. What are promise states?
2. Difference between `Promise.all()` and `Promise.allSettled()`?
3. What is the purpose of `.finally()`?
4. Convert a callback function into a promise.
5. Explain the microtask queue.

---

## 📌 Summary

A **Promise** is a powerful tool for managing asynchronous operations in JavaScript. It improves readability, error handling, and structure of async code—especially when combined with **async/await**.

---

**Author: Suman Baidya**
