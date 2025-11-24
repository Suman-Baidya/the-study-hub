# JavaScript Synchronous & Asynchronous Programming – Full Notes

## 📌 Introduction

JavaScript is a **single-threaded**, **synchronous-by-default**, **non-blocking**, and **asynchronous-capable** programming language.
To understand how JS manages tasks efficiently, we must learn:

* Synchronous functions
* Asynchronous functions
* Blocking vs non-blocking code
* Single-thread vs multi-thread
* Event loop & callback queue
* Async/await and promises

---

# 🧵 1. JavaScript Is Single-Threaded

### ✔ One thread = One call stack = Executes one command at a time

JavaScript can run **only one task at a time** in a single call stack.

Example:

```js
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
```

Output:

```
Task 1
Task 2
Task 3
```

This is **synchronous execution**.

---

# 🔒 2. Synchronous Code (Blocking Code)

### ✔ Executes line by line

### ✔ Next task waits until previous is fully completed

### ❌ Can block the thread if a task takes too long

Example (blocking loop):

```js
function longTask() {
  for (let i = 0; i < 9000000000; i++) {}
}

console.log("Start");
longTask(); // blocks the main thread
console.log("End");
```

Output (after long delay):

```
Start
End
```

This is why we need asynchronous programming.

---

# ⚡ 3. Asynchronous Code (Non-Blocking)

### ✔ Allows code to run **without blocking** the thread

### ✔ JS can start a task and continue processing others

### ✔ Uses Web APIs / event loop / callback queue

Example:

```js
console.log("Start");
setTimeout(() => console.log("Async Task"), 1000);
console.log("End");
```

Output:

```
Start
End
Async Task
```

---

# ⚙️ 4. How JS Executes Async Code (Event Loop)

1. Synchronous code → Call Stack
2. Async code → Browser/Web API
3. Completed async tasks → Callback Queue
4. Event loop → Sends callback back to call stack when stack is empty

JS feels multi-threaded, but it is still **single-threaded** with async support.

---

# ⏳ 5. Types of Asynchronous Functions in JS

### ✔ Callbacks

### ✔ Promises

### ✔ async / await

### ✔ setTimeout, setInterval

### ✔ fetch API

### ✔ Web APIs (XHR, DOM events, timers)

---

# 🧩 6. Callback Example

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}

fetchData((result) => console.log(result));
```

Problem → Callback Hell ❌

---

# 🧩 7. Promise Example

```js
let promise = new Promise((resolve) => {
  setTimeout(() => resolve("Promise resolved"), 1000);
});

promise.then(console.log);
```

---

# 🧩 8. Async / Await Example

```js
async function getData() {
  let data = await new Promise((res) => setTimeout(() => res("Done!"), 1000));
  console.log(data);
}

getData();
```

---

# 🚫 9. Blocking vs Non-Blocking Code

### Blocking Code (Bad for UI)

* Long loops
* Heavy calculations
* Synchronous API calls

### Non-Blocking Code

* setTimeout / setInterval
* fetch()
* Promises
* async/await
* DOM events

---

# 🧵 10. Single Thread vs Multi Thread

| Feature           | Single-Thread (JavaScript) | Multi-Thread (Java, C++, Python) |
| ----------------- | -------------------------- | -------------------------------- |
| Parallel tasks    | ❌ No                       | ✔ Yes                            |
| Thread management | Easy                       | Complex                          |
| Common in         | JS (Browser/Node)          | Java, C#, C++, Python            |

JavaScript uses **asynchronous programming** to simulate concurrency.

---

# 🌍 11. Which Programming Languages Support Async?

| Language   | Async Support                   |
| ---------- | ------------------------------- |
| JavaScript | ✔ Native Promises, async/await  |
| Python     | ✔ async/await (asyncio)         |
| C#         | ✔ async/await                   |
| Rust       | ✔ async/await                   |
| Go         | ✔ goroutines                    |
| Java       | ✔ CompletableFuture, async libs |
| PHP        | ⚠ Limited                       |
| C/C++      | ⚠ Manual threading              |

JS is special because **async is required** since the language is single-threaded.

---

# 🎯 12. Why JavaScript Needs Async?

Because:

* It is **single-threaded**
* Browser tasks (network, timers, file system) take time
* Blocking UI would freeze the page

Async makes JS:

* Smooth
* Fast
* Non-blocking

---

# 🌟 13. Pros & Cons of Synchronous and Asynchronous Code

## ✔ Synchronous Pros

* Easy to understand
* Predictable execution order

## ❌ Synchronous Cons

* Blocks main thread
* Slow UI

---

## ✔ Asynchronous Pros

* Non-blocking
* Fast performance
* Smooth UI
* Can handle large tasks (network, animations)

## ❌ Asynchronous Cons

* Harder to debug
* Callback hell (if misused)
* Requires understanding of event loop

---

# 🧠 14. When to Use Synchronous Code?

Use when:

* Task is small
* Needs exact order
* UI should not change mid-process

### Examples:

* Basic calculations
* Form validation
* Small DOM updates

---

# ⚡ 15. When to Use Asynchronous Code?

Use when:

* Fetching data from API
* File upload/download
* Timers
* Animations
* Heavy tasks

---

# 📌 16. Real Examples

### Example: Fetching API (Non-blocking)

```js
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data));
```

### Example: Heavy Calculation → Should be async

```js
setTimeout(() => {
  for (let i = 0; i < 1e9; i++) {}
  console.log("Heavy task done");
}, 0);
```

---

# 🧩 17. Summary Table

| Topic              | Synchronous        | Asynchronous                |
| ------------------ | ------------------ | --------------------------- |
| Execution          | Line-by-line       | Background tasks            |
| Blocking           | Yes                | No                          |
| Performance        | Slow for big tasks | Fast & smooth               |
| JS Method Examples | loops, math, DOM   | fetch, setTimeout, promises |

---

### ✍️ Written By – **Suman Baidya**
