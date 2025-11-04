# JavaScript Execution Context

## 🧠 Introduction

The **Execution Context** in JavaScript is an environment where the JavaScript code is evaluated and executed. It defines **how variables, functions, and objects are stored and accessed** during program execution.

Every time JavaScript code runs, it creates an execution context to manage the execution of that code.

---

## ⚙️ Types of Execution Contexts

JavaScript has three main types of execution contexts:

### 1. **Global Execution Context (GEC)**

* Created when the JavaScript file is first run.
* It represents the global scope.
* A `window` object (in browsers) or `global` (in Node.js) is created.
* All global variables and functions are stored here.
* There can only be **one** global execution context.

```js
var a = 10;
function greet() {
  console.log("Hello!");
}
// GEC is created before executing the above code
```

---

### 2. **Function Execution Context (FEC)**

* Created whenever a function is invoked.
* Each function has its own execution context.
* A new execution context is created for every function call.
* Once execution completes, it is destroyed.

```js
function add(a, b) {
  let result = a + b;
  return result;
}
add(5, 10); // New Function Execution Context created
```

---

### 3. **Eval Execution Context**

* Created when code inside the `eval()` function is executed.
* Rarely used in modern JavaScript because of performance and security risks.

```js
eval("console.log('Eval execution context')");
```

---

## 🧩 Components of Execution Context

Each execution context has **two main phases** and **three main components**.

### 🔹 1. Creation Phase (Memory Creation Phase)

In this phase, the JavaScript engine:

* Creates the **variable object**.
* Allocates memory for **variables and functions**.
* Initializes variables with `undefined`.
* Stores function declarations entirely in memory.
* Sets up the `this` keyword.

```js
console.log(x); // undefined
var x = 5;
function greet() { console.log("Hi"); }
```

During creation phase:

* `x` is set to `undefined`.
* `greet` is stored entirely in memory.

---

### 🔹 2. Execution Phase

In this phase:

* The code is executed line by line.
* Variable values are assigned.
* Functions are invoked (creating new function contexts).

```js
var x = 5;
function double(num) {
  return num * 2;
}
let result = double(x);
```

---

### ⚙️ Components Inside an Execution Context

| Component                | Description                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| **Variable Object (VO)** | Stores variables and function declarations.                      |
| **Scope Chain**          | Contains current and outer scope references for variable lookup. |
| **`this` Binding**       | Defines the value of `this` in the current context.              |

---

## 🧱 Execution Stack (Call Stack)

JavaScript uses a **stack** structure (LIFO) to manage multiple execution contexts.

### Working of the Call Stack

1. Global Execution Context is created and pushed to the stack.
2. When a function is called, a new Function Execution Context is created and pushed.
3. Once a function finishes executing, its context is popped off.
4. When all functions complete, the Global Execution Context is popped last.

### Example:

```js
function first() {
  console.log('First');
  second();
}
function second() {
  console.log('Second');
}
first();
```

#### Call Stack Flow:

1. GEC created and pushed.
2. `first()` invoked → FEC for `first()` created and pushed.
3. Inside `first()`, `second()` is called → FEC for `second()` pushed.
4. After `second()` completes → popped off.
5. After `first()` completes → popped off.
6. GEC popped when program ends.

---

## 🔁 Lexical Environment

A **Lexical Environment** is the structure that holds **variable environments** and **scope chains**. It consists of:

* **Environment Record:** Stores variable and function declarations.
* **Outer Lexical Environment Reference:** Points to the parent scope.

Each function creates its own lexical environment when executed.

### Example:

```js
function outer() {
  let outerVar = 'outside';
  function inner() {
    console.log(outerVar); // Accessible due to closure
  }
  inner();
}
outer();
```

Here, `inner()` has access to `outerVar` because of the lexical environment created by `outer()`.

---

## 🧠 Closures and Execution Context

A **closure** is formed when a function remembers its outer variables through the lexical environment even after the outer function is finished.

```js
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}
const counter = makeCounter();
counter(); // 1
counter(); // 2
```

The inner function retains access to `count` through closure, even after `makeCounter()` has finished.

---

## ⚡ Hoisting in Execution Context

During the **creation phase**, all variable and function declarations are moved (hoisted) to the top of their scope.

```js
console.log(name); // undefined
var name = "Suman";
function greet() { console.log("Hello"); }
greet(); // Hello
```

Hoisting explains why we can call functions before they are declared.

---

## 🔍 Summary

| Concept                 | Description                           |
| ----------------------- | ------------------------------------- |
| **Execution Context**   | Environment where JS code executes    |
| **Types**               | Global, Function, Eval                |
| **Phases**              | Creation → Execution                  |
| **Components**          | Variable Object, Scope Chain, `this`  |
| **Call Stack**          | Manages execution contexts (LIFO)     |
| **Lexical Environment** | Links variables to their outer scopes |
| **Closures**            | Preserve access to outer variables    |

---

### ✍️ Author

**Suman Baidya**
(Prepared for JavaScript Execution Context — Basic to Advanced Concepts)
