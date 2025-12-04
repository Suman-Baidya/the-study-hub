# 📘 JavaScript Interview Preparation – Day 4

## **Topic: Scope, Lexical Environment & Closures**

---

# ## **1️⃣ What is Scope in JavaScript?**

Scope defines **where variables are accessible** in code.

### Types of Scope:

* **Global Scope** → accessible everywhere
* **Function Scope** (`var`)
* **Block Scope** (`let`, `const`)
* **Module Scope** (ES6 modules)

### Example

```js
let a = 10; // global
function demo() {
  let b = 20; // function scope
  if (true) {
    let c = 30; // block scope
  }
}
```

---

# ## **2️⃣ What is Lexical Scope?**

Where a variable is defined in the **code structure** determines its scope.

### Example

```js
function outer() {
  let name = "Suman";
  function inner() {
    console.log(name); // accessible → lexical rule
  }
  inner();
}
outer();
```

---

# ## **3️⃣ What is a Lexical Environment?**

A Lexical Environment =
👉 Local Memory + Reference to Parent Environment

JavaScript uses this chain to find variables → **Scope Chain**

---

# ## **4️⃣ Scope Chain**

The mechanism JavaScript uses to look up variables **outer → global**.

```js
const a = 10;
function x() {
  const b = 20;
  function y() {
    console.log(a, b);
  }
  y();
}
x();
```

---

# ## **5️⃣ What is Closures? (Very Important 👑)**

A closure is when an inner function **remembers** variables from its outer function even after the outer function has executed.

### Example

```js
function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const c = counter();
console.log(c()); // 1
console.log(c()); // 2
```

✔ Outer scope variables stay alive using closures

---

# ## **6️⃣ Practical Use Cases of Closures**

| Use Case                        | Example                     |
| ------------------------------- | --------------------------- |
| Data hiding / private variables | Modules                     |
| State in async env              | setTimeout, event listeners |
| Function factories              | Currying                    |
| Memoization                     | Optimizing performance      |

Example: Private data

```js
function secret() {
  let msg = "Hidden info";
  return () => msg;
}

const get = secret();
console.log(get()); // "Hidden info"
```

---

# ## **7️⃣ Closure + Loops Interview Question**

```js
for(var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

❌ Output: `4 4 4` → because `var` is not block-scoped

Fix using `let`:

```js
for(let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

✔ Output: `1 2 3`

---

# ## **8️⃣ Temporal Dead Zone (TDZ)**

Variables declared with `let` and `const` exist but **cannot be accessed** before initialization.

```js
console.log(x); // ❌ ReferenceError
let x = 5;
```

---

# ## **9️⃣ Block Scope vs Function Scope Differences**

| Feature   | var      | let       | const     |
| --------- | -------- | --------- | --------- |
| Scope     | Function | Block     | Block     |
| Hoisting  | Yes      | Yes (TDZ) | Yes (TDZ) |
| Redeclare | Yes      | No        | No        |
| Reassign  | Yes      | Yes       | No        |

---

# ## 🔟 Function Execution Context + Scope Example

```js
let a = 10;
function one() {
  let b = 20;
  function two() {
    console.log(a + b);
  }
  two();
}
one(); // 30
```

✔ Demonstrates lexical scope + closure rules

---

# 🎯 Mini Interview Questions Summary

1️⃣ What is closure? Give a real-life example.
2️⃣ Difference: var vs let vs const?
3️⃣ What is TDZ?
4️⃣ Why does `var` inside a loop cause closure issues?
5️⃣ What is a lexical environment?

---
