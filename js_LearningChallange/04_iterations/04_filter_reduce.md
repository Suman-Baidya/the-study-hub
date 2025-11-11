# JavaScript Array Methods: `filter()`, `map()`, and `reduce()`

## 🧠 Introduction

In JavaScript, arrays come with many powerful built-in methods that make it easier to manipulate, transform, and analyze data. Among the most important are **`filter()`**, **`map()`**, and **`reduce()`** — often referred to as **higher-order functions** because they take other functions as arguments.

These methods are fundamental to writing **clean, functional, and declarative code**.

---

## 🔍 `filter()` Method

### Definition

The **`filter()`** method creates a **new array** with all elements that pass the test implemented by the provided function.

### Syntax

```js
array.filter(callback(element, index, array), thisArg)
```

### Parameters

* **callback** → Function that tests each element.
* **element** → The current element being processed.
* **index** → Optional. The index of the current element.
* **array** → Optional. The array `filter()` was called upon.
* **thisArg** → Optional. Value to use as `this` when executing the callback.

### Example

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]
```

### Key Points

* Returns a **new array**.
* Does **not modify** the original array.
* Used for filtering data based on a **condition**.

### Real-World Example

Filtering users above 18:

```js
const users = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 15 }
];
const adults = users.filter(user => user.age >= 18);
console.log(adults);
// [{ name: 'Bob', age: 22 }]
```

---

## 🔁 `map()` Method

### Definition

The **`map()`** method creates a **new array** by applying a function to each element of the original array.

### Syntax

```js
array.map(callback(element, index, array), thisArg)
```

### Example

```js
const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16]
```

### Key Points

* Transforms each element of an array.
* Returns a **new array** with the same length.
* Does **not mutate** the original array.

### Real-World Example

Converting prices from USD to INR:

```js
const pricesUSD = [10, 20, 30];
const pricesINR = pricesUSD.map(price => price * 83);
console.log(pricesINR); // [830, 1660, 2490]
```

---

## ⚙️ `reduce()` Method

### Definition

The **`reduce()`** method executes a reducer function on each element of the array, resulting in a **single output value**.

### Syntax

```js
array.reduce(callback(accumulator, currentValue, index, array), initialValue)
```

### Parameters

* **accumulator** → Accumulates the result.
* **currentValue** → The current element being processed.
* **initialValue** → Optional starting value.

### Example

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

### Key Points

* Used to **accumulate** values (sum, average, total, etc.).
* Can also **flatten arrays** or **count occurrences**.

### Real-World Examples

#### 1️⃣ Total Price Calculation

```js
const cart = [
  { item: 'Phone', price: 500 },
  { item: 'Case', price: 20 },
  { item: 'Charger', price: 30 }
];
const total = cart.reduce((acc, product) => acc + product.price, 0);
console.log(total); // 550
```

#### 2️⃣ Flattening an Array

```js
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, val) => acc.concat(val), []);
console.log(flat); // [1, 2, 3, 4, 5, 6]
```

---

## 🔄 Comparison Table

| Method       | Returns                 | Purpose                            | Modifies Original Array? |
| ------------ | ----------------------- | ---------------------------------- | ------------------------ |
| **filter()** | New Array (subset)      | Filter elements based on condition | ❌ No                     |
| **map()**    | New Array (same length) | Transform elements                 | ❌ No                     |
| **reduce()** | Single Value            | Combine array elements into one    | ❌ No                     |

---

## 🧠 Tips & Best Practices

* Use `filter()` for **selection**.
* Use `map()` for **transformation**.
* Use `reduce()` for **aggregation**.
* Always provide an **initial value** in `reduce()`.
* Avoid using `map()` or `filter()` when you don’t use the returned array.

---

## 🚀 Advanced Usage

### Chaining Methods

You can combine these methods for complex operations:

```js
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((acc, val) => acc + val, 0);
console.log(result); // 56 (2² + 4² + 6²)
```

---

## 🧾 Summary

* `filter()` → Select items.
* `map()` → Transform items.
* `reduce()` → Combine items.

These three methods are essential for mastering **functional programming** in JavaScript.

---

**Author: Suman Baidya**
