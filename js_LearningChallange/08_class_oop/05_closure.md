# JavaScript Lexical Scope & Closure – Full Notes

## 📌 Table of Contents

1. What is Lexical Scope?
2. Scope Chain
3. What is Closure?
4. How Closures Work Internally
5. Practical Use Cases of Closures
6. Memory Management + Pros & Cons
7. Comparison: Lexical Scope vs Closure
8. Diagrams for Better Understanding
9. Top Interview Questions
10. Class vs Prototype Behavior With Closures
11. Summary

---

## 🧠 1️⃣ What is Lexical Scope?

Lexical scope means **scope is determined by where the code is written in the source file**.
Functions can **access variables declared in their outer (parent) scope**.

### Example

```js
function outer() {
  let name = "Suman";

  function inner() {
    console.log(name); // accessible
  }

  inner();
}
outer();
```

✔ `inner()` has access to `name` because of lexical (static) scoping.

📌 The scope structure is created during **compile/creation phase**, not execution.

---

## 🪜 2️⃣ Scope Chain

When accessing a variable, JavaScript looks up the parent scopes until it finds the variable.

📌 The **nested scopes form a chain → scope chain**

```js
var a = 10;
function A() {
  var b = 20;
  function B() {
    var c = 30;
    console.log(a, b, c);
  }
  B();
}
A();
```

Lookup order:

> B → A → global

---

## 🔒 3️⃣ What is Closure?

A closure is:

> **A function that remembers variables from its outer scope even after that outer function has returned**.

### Example

```js
function counter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  }
}
const inc = counter();
inc(); // 1
inc(); // 2
inc(); // 3
```

Even though `counter()` has finished execution,
✔ `count` is still preserved inside `inc()`.

📌 Closure = Function + Lexical Environment

---

## 🧩 4️⃣ How Closures Work Internally

JavaScript stores a **hidden reference** to the outer variables in the function’s memory.

Execution Context stores:

* Variable Environment
* Lexical Environment
* Outer environment reference

Closures keep the **outer environment alive**.

---

## 🛠 5️⃣ Real-Life Use Cases of Closures

| Use Case                | Why Closures Help                  |
| ----------------------- | ---------------------------------- |
| Data privacy            | Hides variables from global access |
| State persistence       | Counter, caching values            |
| Event handlers          | Maintain data after event attached |
| Callbacks & async tasks | Preserve data until execution      |
| Module Pattern          | Private methods in apps            |

### Use Case Example — Data Privacy

```js
function secretBankBalance() {
  let balance = 10000;
  return {
    getBalance: function() { return balance; }
  }
}
const user = secretBankBalance();
console.log(user.getBalance()); // 10000
console.log(user.balance); // undefined ❌
```

---

## 🧹 6️⃣ Closures: Memory + Pros & Cons

### ✔ Advantages

* Data Encapsulation & Privacy
* Preserves state across executions
* Essential for async programming

### ✖ Disadvantages

* Can cause memory leaks if not handled properly
* Harder to debug

---

## ⚔ 7️⃣ Lexical Scope vs Closure

| Feature    | Lexical Scope                  | Closure                              |
| ---------- | ------------------------------ | ------------------------------------ |
| Definition | Scope decided by code location | Function remembers outer variables   |
| When works | Compile time                   | Runtime                              |
| Purpose    | Access parent variables        | Preserve data even after parent ends |

---

## ✨ 8️⃣ Diagrams for Better Understanding

### Lexical Scope Structure

```
Global Scope
│
└── outer() Scope
    │
    └── inner() Scope
```

### Closure Memory Retention 🔁

```
outer() executed
│
Variables not deleted
│
inner() keeps reference ➜ closure
```

---

## 🎯 9️⃣ Top Interview Questions

1️⃣ What is closure? Why is it used?
2️⃣ Write a counter function using closure
3️⃣ Why do closures cause memory leaks sometimes?
4️⃣ What is lexical scope?
5️⃣ Can closures access updated values or old snapshot?
6️⃣ Explain garbage collection issue with closures
7️⃣ How closure is used in modules?

### Interview Coding Challenge

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

❌ Output → `4 4 4`
✔ Fix using closure

```js
for (var i = 1; i <= 3; i++) {
  ((x)=> setTimeout(() => console.log(x), 1000))(i);
}
```

---

## 🆚 10️⃣ Class vs Prototype with Closures

| Feature       | Prototype           | Class                            |
| ------------- | ------------------- | -------------------------------- |
| Closure usage | Common in functions | Less needed but possible         |
| Complexity    | Medium              | Cleaner syntax                   |
| Data Privacy  | Not default         | Private fields (#var) + closures |

### Class Example with Private Data

```js
function createPerson(name) {
  return {
    getName: () => name
  };
}
const p = createPerson("Joy");
console.log(p.getName()); // Joy
```

---

## 📝 11️⃣ Summary

* Lexical scope: where variable is defined
* Closure: function remembers outer variables
* Helps with privacy, async tasks, state management
* But can also create memory retention issues

> Closures are one of the most powerful features in JavaScript 🔥

---
