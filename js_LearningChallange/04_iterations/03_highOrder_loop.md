# 🔁 Advanced JavaScript Iteration and Higher-Order Functions

## 🧠 Introduction

JavaScript provides several ways to iterate through data structures. Understanding loops like `for...of`, `for...in`, and methods like `forEach()` is essential for efficient data handling.
You’ll also often use **Higher-Order Functions (HOFs)**, which take other functions as arguments or return them.

---

## 1️⃣ `for...of` Loop

### 📖 Definition

The **`for...of`** loop iterates **over iterable objects** — such as arrays, strings, maps, sets, or any object with an iterable protocol.

### 🧱 Syntax

```js
for (let variable of iterable) {
  // code to execute for each element
}
```

### 🧮 Example: Array Iteration

```js
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
// Output: Apple, Banana, Cherry
```

### 🧮 Example: String Iteration

```js
for (const letter of "JS") {
  console.log(letter);
}
// Output: J, S
```

### ✅ Features

* Works with **iterables** (arrays, strings, maps, sets).
* Returns **values** (not keys).
* Easier and cleaner than traditional `for` loops.

### ⚠️ Note

`for...of` **cannot** iterate over plain objects unless you use `Object.entries()` or `Object.keys()`.

```js
const user = { name: "Suman", age: 25 };
for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}
```

---

## 2️⃣ `for...in` Loop

### 📖 Definition

The **`for...in`** loop iterates over **enumerable property keys** of an object.

### 🧱 Syntax

```js
for (let key in object) {
  // code using object[key]
}
```

### 🧮 Example:

```js
const student = { name: "Suman", age: 25, course: "JS" };
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
// Output: name: Suman, age: 25, course: JS
```

### ✅ Features

* Iterates over **keys** in an object.
* Works well for **object properties**.
* Can also iterate over arrays (though not recommended).

### ⚠️ Note

Avoid using `for...in` on arrays because it iterates over **indices** as strings and can include inherited properties.

---

## 3️⃣ `new Map()` Method

### 📖 Definition

A **Map** is a collection of key-value pairs that remembers the **original insertion order** of the keys.

### 🧱 Syntax

```js
const map = new Map([
  ['name', 'Suman'],
  ['age', 25],
  ['city', 'Kolkata']
]);
```

### 🧮 Example:

```js
const capitals = new Map();
capitals.set('India', 'New Delhi');
capitals.set('France', 'Paris');
capitals.set('Japan', 'Tokyo');

for (const [country, capital] of capitals) {
  console.log(`${country}: ${capital}`);
}
// Output:
// India: New Delhi
// France: Paris
// Japan: Tokyo
```

### 🧩 Useful Map Methods

| Method            | Description                      |
| ----------------- | -------------------------------- |
| `set(key, value)` | Adds or updates a key-value pair |
| `get(key)`        | Returns the value for a key      |
| `delete(key)`     | Removes a key-value pair         |
| `has(key)`        | Checks if a key exists           |
| `clear()`         | Removes all pairs                |
| `size`            | Returns number of pairs          |

### ✅ When to Use

Use `Map` when:

* You need key-value storage with any data type as a key.
* You require consistent iteration order.
* You need fast lookups and insertions.

---

## 4️⃣ `forEach()` Method

### 📖 Definition

The **`forEach()`** method executes a provided callback function once for each array element.

### 🧱 Syntax

```js
array.forEach((value, index, array) => {
  // action for each element
});
```

### 🧮 Example:

```js
const numbers = [1, 2, 3];
numbers.forEach((num, i) => {
  console.log(`Index ${i}: ${num * 2}`);
});
// Output:
// Index 0: 2
// Index 1: 4
// Index 2: 6
```

### ✅ Features

* Simpler and cleaner than `for` loops.
* Automatically iterates through all elements.
* Cannot be stopped using `break` or `continue`.

### ⚠️ Limitations

* Always runs for the entire array.
* Doesn’t return a new array (unlike `map()`).

---

## 5️⃣ Higher-Order Functions (HOFs)

### 📖 Definition

A **Higher-Order Function** is a function that:

* Takes one or more functions as arguments, **or**
* Returns another function as its result.

They allow **functional programming** techniques in JavaScript.

### 🧩 Example 1: Passing a Function as an Argument

```js
function greet(name) {
  return `Hello, ${name}`;
}

function processUser(fn, userName) {
  console.log(fn(userName));
}

processUser(greet, 'Suman');
// Output: Hello, Suman
```

### 🧩 Example 2: Returning a Function

```js
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
```

### 🧠 Common Higher-Order Functions

| Function    | Description                          | Returns        |
| ----------- | ------------------------------------ | -------------- |
| `map()`     | Transforms each element              | New array      |
| `filter()`  | Keeps elements that meet a condition | New array      |
| `reduce()`  | Reduces array to a single value      | Any type       |
| `forEach()` | Executes callback for each element   | `undefined`    |
| `sort()`    | Sorts array elements                 | Modified array |

### ✅ Advantages

* Improves code readability and modularity.
* Encourages reusability.
* Reduces manual loops and conditional logic.

---

## 🧾 Summary Comparison

| Concept                | Works On                       | Iterates Over | Can Break | Returns Value | Example Use                  |
| ---------------------- | ------------------------------ | ------------- | --------- | ------------- | ---------------------------- |
| `for...of`             | Iterables (Array, String, Map) | Values        | ✅ Yes     | ❌ No          | Loop over array values       |
| `for...in`             | Objects                        | Keys          | ✅ Yes     | ❌ No          | Loop over object properties  |
| `forEach()`            | Arrays                         | Values        | ❌ No      | ❌ No          | Execute callback per element |
| `Map()`                | Key-Value pairs                | Entries       | ✅ Yes     | ✅ Yes         | Store and iterate data       |
| Higher-Order Functions | Functions                      | Functions     | ✅ Yes     | ✅ Yes         | Functional programming       |

---

## ✅ Summary

* **`for...of`** – Ideal for arrays, strings, and iterables.
* **`for...in`** – Best for object property iteration.
* **`Map()`** – Stores and iterates key-value pairs efficiently.
* **`forEach()`** – Executes logic for each array element (no control flow).
* **Higher-Order Functions** – Bring reusability and cleaner, functional-style code.

---

**Author:** Suman Baidya
