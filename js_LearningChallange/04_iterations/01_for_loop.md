# JavaScript `for` Loop – Complete Guide

## 🧠 Introduction

The **`for` loop** in JavaScript is one of the most commonly used control structures for executing a block of code repeatedly until a specific condition is met. It provides a compact way to iterate over sequences such as arrays or ranges of numbers.

---

## 🏗️ Basic Syntax

```js
for (initialization; condition; increment) {
  // code block to be executed
}
```

### Example:

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4
```

### Explanation:

1. **Initialization:** Executes once before the loop starts (e.g., `let i = 0`).
2. **Condition:** Checked before every iteration; loop continues while `true`.
3. **Increment/Decrement:** Executes after each iteration (e.g., `i++`).

---

## 🔁 Flow Diagram

```
Initialization → Condition → Code Execution → Increment → Condition → ...
```

If the condition becomes `false`, the loop stops.

---

## 🧮 Example Variations

### 1. Incrementing Loop

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

### 2. Decrementing Loop

```js
for (let i = 10; i > 0; i--) {
  console.log(i);
}
```

### 3. Skipping Numbers

```js
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
// Output: 0 2 4 6 8 10
```

---

## 🧱 Nested `for` Loops

You can place one `for` loop inside another. Useful for working with multi-dimensional data.

```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
```

**Output:**

```
i=1, j=1
i=1, j=2
i=1, j=3
...
```

---

## ⛔ The `break` Statement

The `break` statement immediately stops the loop and exits.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 0 1 2 3 4
```

### 🔍 Use Case:

Use `break` when you want to stop the loop once a condition is satisfied.

---

## ⚡ The `continue` Statement

The `continue` statement skips the current iteration and proceeds to the next one.

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Output: 0 1 3 4
```

### 🔍 Use Case:

Use `continue` to skip specific values or iterations.

---

## 🧩 Infinite Loop

If the condition never becomes false, the loop runs forever (⚠️ avoid this unless intentional).

```js
for (;;) {
  console.log("Running infinitely...");
  break; // stop manually
}
```

---

## 🧰 Looping Through Arrays

### Example:

```js
const fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

---

## 💡 Tips

* Always define a clear **exit condition** to prevent infinite loops.
* Use **`break`** for early termination and **`continue`** to skip certain steps.
* Prefer modern iteration methods like `for...of`, `forEach()` for arrays when readability is important.

---

## 🔁 Comparison: `for` vs `for...of` vs `for...in`

| Loop Type  | Use Case                    | Iterates Over     | Example                                |
| ---------- | --------------------------- | ----------------- | -------------------------------------- |
| `for`      | General purpose             | Numeric sequences | `for (let i = 0; i < arr.length; i++)` |
| `for...of` | Iterables (arrays, strings) | Values            | `for (let val of arr)`                 |
| `for...in` | Objects                     | Keys              | `for (let key in obj)`                 |

---

## ✅ Summary

* `for` loop = Compact structure for iteration.
* Control with `break` and `continue`.
* Supports nesting for complex logic.
* Modern alternatives exist but `for` remains efficient and powerful.

---

**Author:** Suman Baidya
