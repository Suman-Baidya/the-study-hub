# 📘 JavaScript Interview Preparation – Day 5

## **Topic: Execution Context & JavaScript Code Execution Process**

---

## 🔹 1️⃣ What is Execution Context?

Execution Context is the environment in which JavaScript code is executed.

It has **2 phases**:

| Phase               | Purpose                                              |
| ------------------- | ---------------------------------------------------- |
| **Creation Phase**  | Allocate memory for variables & functions (Hoisting) |
| **Execution Phase** | Execute code line-by-line, assign values             |

---

## 🔹 2️⃣ Types of Execution Context

| Type                                 | Created When         |
| ------------------------------------ | -------------------- |
| **Global Execution Context (GEC)**   | File/script loads    |
| **Function Execution Context (FEC)** | Function is executed |
| **Eval Execution Context**           | Inside eval() (rare) |

---

## 🔹 3️⃣ What Happens Inside Each Execution Context?

Each execution context has:

📌 **Variable Environment** → variables, functions
📌 **Lexical Environment** → outer scope reference
📌 **This Binding** → value of `this` depends on how function is called

```js
let x = 10;
function test() {
  let y = 20;
  console.log(x + y);
}
test();
```

✔ `test()` creates a new FEC
✔ Can still access `x` using **scope chain**

---

## 🔹 4️⃣ Hoisting

JavaScript moves **function declarations and variable declarations** to the top of scope **during creation phase**.

```js
console.log(a); // undefined
var a = 5;
```

🚫 Hoisting with `let` & `const` → **TDZ** (Temporal Dead Zone):

```js
console.log(b); // ❌ ReferenceError
let b = 10;
```

---

## 🔹 5️⃣ Call Stack

JavaScript is **single-threaded** → executes one task at a time.

📌 The **Call Stack** stores execution contexts in order.

Example:

```js
function one() {
  two();
}
function two() {
  console.log("Inside two");
}
one();
```

Call stack:
1️⃣ Push GEC
2️⃣ Push `one()`
3️⃣ Push `two()`
4️⃣ Pop `two()`, `one()`, then GEC

---

## 🔹 Execution Context Lifecycle Diagram

```
          ┌───────────────────────────┐
          │     Global EC (GEC)       │
          └───────────┬──────────────┘
                      │
               Call Stack
                      │
              ┌───────▼───────┐
              │ Function EC   │
              └───────────────┘
```

---

## 🔹 6️⃣ Memory Allocation (Heap)

All objects & reference types are stored in **Heap** memory.

```js
let user = { name: "Suman" }; // Stored in heap
```

---

## 🧠 Quick Interview Q/A

### **Q1: What is Execution Context?**

👉 Environment where JavaScript executes code

### **Q2: How does JavaScript handle variable hoisting?**

👉 Variables move to top of scope but initialized with `undefined`

### **Q3: What is the difference between Call Stack vs Heap?**

| Call Stack               | Heap                   |
| ------------------------ | ---------------------- |
| Stores execution context | Stores objects, arrays |
| Fast memory              | Dynamic memory         |

### **Q4: What causes a Stack Overflow?**

👉 Deep or infinite function recursion

### **Q5: What properties exist inside Execution Context?**

✔ Variable Environment
✔ Lexical Environment
✔ `this` binding

---

## 🎯 Summary

* Code executes inside **Execution Context**
* JavaScript manages execution using **Call Stack**
* Memory allocated in **heap**
* Hoisting happens in creation phase
* Lexical environment powers closures

---

## 🧪 Real Interview Coding Tasks — Execution Context

Try to predict outputs before running in console.

### **Task 1 — Hoisting + var**

```js
console.log(a);
var a = 10;
sayHi();
function sayHi() {
  console.log("Hi");
}
console.log(a);
```

---

### **Task 2 — let + TDZ**

```js
console.log(x);
let x = 5;
```

---

### **Task 3 — Function Hoisting in FEC**

```js
var num = 5;
function demo() {
  console.log(num);
  var num = 10;
}
demo();
console.log(num);
```

---

### **Task 4 — Scope Chain**

```js
let a = 1;
function one() {
  let a = 2;
  function two() {
    console.log(a);
  }
  two();
}
one();
console.log(a);
```

---

### **Task 5 — Call Stack**

```js
function a() {
  console.log("A");
  b();
}
function b() {
  console.log("B");
  c();
}
function c() {
  console.log("C");
}
a();
```

---

### **Task 6 — Parameter Shadowing**

```js
let value = 100;
function test(value) {
  console.log(value);
  value = 50;
  console.log(value);
}
test(10);
console.log(value);
```

---

### **Task 7 — Global vs Local Hoisting**

```js
console.log(name);
name = "Suman";
console.log(name);
var name;
```

---

### **Task 8 — Arrow vs Normal Function `this`**

```js
const user = {
  name: "Joy",
  log() {
    console.log(this.name);
  },
  logArrow: () => {
    console.log(this.name);
  }
};
user.log();
user.logArrow();
```

---

### **Task 9 — Stack Overflow**

```js
function boom() {
  return boom();
}
boom();
```

---

### **Task 10 — Hoisting Gotcha**

```js
var x = 1;
function fun() {
  console.log(x);
  var x = 2;
  console.log(x);
}
fun();
```

---

