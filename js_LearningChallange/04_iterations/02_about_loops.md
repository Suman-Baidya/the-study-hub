# JavaScript Loops – Complete Guide

## 🧠 Introduction

In programming, **loops** allow you to execute a block of code multiple times until a specific condition is met. In JavaScript, loops help automate repetitive tasks, making your code efficient and concise.

---

## 🎯 Why Use Loops?

Loops are essential for:

* **Repetition:** Running the same code multiple times.
* **Automation:** Reducing manual effort for repeated actions.
* **Data processing:** Traversing arrays, strings, or objects.
* **Dynamic operations:** Performing calculations, fetching data, etc.

### Example:

Without a loop:

```js
console.log(1);
console.log(2);
console.log(3);
```

Using a loop:

```js
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```

✅ Easier, cleaner, and scalable.

---

## 🧩 Types of Loops in JavaScript

JavaScript provides several looping structures:

### 1. **`for` Loop**

Used when you know exactly how many times you want to iterate.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

### 2. **`while` Loop**

Executes a block of code **as long as a condition is true**.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

⚠️ Ensure the loop updates the condition variable to avoid infinite loops.

---

### 3. **`do...while` Loop**

Executes the code **at least once**, even if the condition is false initially.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

---

### 4. **`for...in` Loop**

Used to iterate over **object properties**.

```js
const student = { name: 'Suman', age: 25, course: 'JS' };
for (let key in student) {
  console.log(key, student[key]);
}
```

---

### 5. **`for...of` Loop**

Used to iterate over **iterable objects** like arrays, strings, or sets.

```js
const fruits = ['Apple', 'Banana', 'Cherry'];
for (let fruit of fruits) {
  console.log(fruit);
}
```

---

### 6. **Array Iteration Methods (Modern Loops)**

JavaScript arrays also offer built-in iteration methods:

#### `forEach()`

```js
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num));
```

#### `map()`

Returns a **new array** after applying a function to each element.

```js
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

#### `filter()`

Returns elements that match a condition.

```js
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]
```

#### `reduce()`

Reduces all elements into a single value.

```js
const sum = numbers.reduce((a, b) => a + b);
console.log(sum); // 10
```

---

## ⚙️ Loop Control Statements

### 🔹 `break`

Stops the loop immediately.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 0 1 2 3 4
```

### 🔹 `continue`

Skips the current iteration and moves to the next.

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Output: 0 1 3 4
```

---

## 🧱 Nested Loops

You can use loops inside other loops for multi-dimensional data.

```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
```

---

## 🌍 Real-World Use Cases

1. **Displaying lists:** Rendering multiple elements in React or HTML.
2. **Searching data:** Scanning arrays or strings.
3. **Mathematical calculations:** Summation, factorial, etc.
4. **API Calls:** Iterating through multiple data endpoints.
5. **Form Validation:** Checking multiple fields dynamically.

---

## ❌ Common Mistakes (What *Not* to Do)

* ❌ Forgetting to update the loop variable → leads to **infinite loops**.
* ❌ Using `for...in` on arrays (can give unexpected results).
* ❌ Using `break` or `continue` incorrectly.
* ❌ Not setting a proper termination condition.

---

## 💡 Best Practices

✅ Use `for...of` for arrays and iterables.
✅ Use `for...in` for objects.
✅ Avoid infinite loops unless necessary.
✅ Always ensure the condition eventually becomes false.
✅ Prefer functional loops (`map`, `forEach`, etc.) for cleaner code.

---

## 🧾 Summary Table

| Loop Type    | Best Use                   | Executes         | Example           |
| ------------ | -------------------------- | ---------------- | ----------------- |
| `for`        | Fixed number of iterations | 0 or more times  | Counting loops    |
| `while`      | Condition-based            | 0 or more times  | User input checks |
| `do...while` | Must run at least once     | 1 or more times  | Menu loops        |
| `for...in`   | Object properties          | For each key     | Object iteration  |
| `for...of`   | Iterable values            | For each value   | Arrays, Strings   |
| `forEach`    | Array iteration            | For each element | Callback-based    |

---

## ✅ Summary

* Loops simplify repetitive tasks.
* Choose the right loop based on your data and use case.
* Avoid infinite loops by ensuring exit conditions.
* Mastering loops improves problem-solving efficiency in JavaScript.

---

**Author:** Suman Baidya
