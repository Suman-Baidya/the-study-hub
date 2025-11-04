# JavaScript Arrays

## 🧮 Introduction

An **Array** in JavaScript is a special type of object used to store multiple values in a single variable. Each value (element) in an array has a numeric index starting from 0. Arrays are dynamic in size and can hold values of any data type, including numbers, strings, objects, and even other arrays.

```js
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Apple
```

---

## ⚙️ Characteristics of Arrays

* **Indexed collection:** Each element has an index starting from `0`.
* **Dynamic size:** You can add or remove elements at any time.
* **Heterogeneous:** Can store different types of values in one array.
* **Objects in nature:** Arrays are technically objects with special methods and properties.

---

## 🧱 Array Creation Methods

You can create arrays in several ways:

### 1. Using Array Literals (Recommended)

```js
let colors = ["Red", "Green", "Blue"];
```

### 2. Using the Array Constructor

```js
let numbers = new Array(1, 2, 3, 4);
let emptyArray = new Array(5); // Creates an array with 5 empty slots
```

### 3. Using `Array.of()`

Creates a new array from the given arguments.

```js
let points = Array.of(10, 20, 30);
```

### 4. Using `Array.from()`

Creates a new array from iterable objects like strings or sets.

```js
let chars = Array.from("Suman"); // ["S", "u", "m", "a", "n"]
```

---

## 📋 Array Properties

| Property      | Description                              | Example                                   |
| ------------- | ---------------------------------------- | ----------------------------------------- |
| `length`      | Returns the number of elements           | `arr.length`                              |
| `constructor` | Returns the array's constructor function | `arr.constructor`                         |
| `prototype`   | Allows adding new methods to all arrays  | `Array.prototype.myMethod = function(){}` |

Example:

```js
let arr = [10, 20, 30];
console.log(arr.length); // 3
```

---

## 🧮 Common Array Methods

### 1. Adding and Removing Elements

| Method      | Description                             | Example                 |
| ----------- | --------------------------------------- | ----------------------- |
| `push()`    | Adds elements to the end                | `arr.push(4)`           |
| `pop()`     | Removes last element                    | `arr.pop()`             |
| `unshift()` | Adds elements to the beginning          | `arr.unshift(0)`        |
| `shift()`   | Removes first element                   | `arr.shift()`           |
| `splice()`  | Adds/removes elements from any position | `arr.splice(2, 0, 'X')` |
| `slice()`   | Returns a portion of the array          | `arr.slice(1, 3)`       |
| `concat()`  | Merges arrays                           | `arr.concat(arr2)`      |

---

### 2. Searching and Filtering

| Method          | Description                                    | Example                      |
| --------------- | ---------------------------------------------- | ---------------------------- |
| `indexOf()`     | Returns first index of element                 | `arr.indexOf('Apple')`       |
| `lastIndexOf()` | Returns last index of element                  | `arr.lastIndexOf('Apple')`   |
| `includes()`    | Checks if element exists                       | `arr.includes('Mango')`      |
| `find()`        | Returns first element that satisfies condition | `arr.find(x => x > 10)`      |
| `findIndex()`   | Returns index of first matching element        | `arr.findIndex(x => x > 10)` |
| `filter()`      | Returns array of all matching elements         | `arr.filter(x => x > 10)`    |

---

### 3. Iteration and Transformation

| Method          | Description                              | Example                            |
| --------------- | ---------------------------------------- | ---------------------------------- |
| `forEach()`     | Executes function for each element       | `arr.forEach(x => console.log(x))` |
| `map()`         | Creates new array with modified values   | `arr.map(x => x * 2)`              |
| `reduce()`      | Reduces array to a single value          | `arr.reduce((a, b) => a + b)`      |
| `reduceRight()` | Similar to reduce but from right to left | `arr.reduceRight((a, b) => a + b)` |

---

### 4. Sorting and Reversing

| Method      | Description                               | Example         |
| ----------- | ----------------------------------------- | --------------- |
| `sort()`    | Sorts elements alphabetically/numerically | `arr.sort()`    |
| `reverse()` | Reverses array order                      | `arr.reverse()` |

Example:

```js
let nums = [3, 1, 4, 2];
nums.sort((a, b) => a - b); // [1, 2, 3, 4]
```

---

### 5. Conversion and Joining

| Method       | Description                               | Example                      |
| ------------ | ----------------------------------------- | ---------------------------- |
| `toString()` | Converts array to string                  | `arr.toString()`             |
| `join()`     | Joins elements into string with separator | `arr.join(' - ')`            |
| `flat()`     | Flattens nested arrays                    | `[1, [2, [3]]].flat(2)`      |
| `flatMap()`  | Maps and flattens in one step             | `arr.flatMap(x => [x, x*2])` |

---

## 🔄 Iterating Over Arrays

### Using `for` Loop

```js
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### Using `for...of`

```js
for (let value of arr) {
  console.log(value);
}
```

### Using `forEach()`

```js
arr.forEach(item => console.log(item));
```

---

## 🧩 Multi-dimensional Arrays

Arrays can contain other arrays — forming matrices or grids.

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][2]); // 6
```

---

## ⚡ ES6+ Array Methods

| Method            | Description                                   | Example                            |
| ----------------- | --------------------------------------------- | ---------------------------------- |
| `Array.isArray()` | Checks if a value is an array                 | `Array.isArray([1,2,3])` → true    |
| `Array.of()`      | Creates array from arguments                  | `Array.of(1,2,3)`                  |
| `Array.from()`    | Converts iterable to array                    | `Array.from('abc')`                |
| `Array.at()`      | Returns element by index (supports negatives) | `arr.at(-1)` → last element        |
| `Array.keys()`    | Returns iterator for indexes                  | `for (let i of arr.keys())`        |
| `Array.values()`  | Returns iterator for values                   | `for (let v of arr.values())`      |
| `Array.entries()` | Returns key-value pairs                       | `for (let [i,v] of arr.entries())` |

---

## 🧠 Best Practices

* Always use **array literals** `[]` instead of `new Array()`.
* Use `map()`, `filter()`, `reduce()` for cleaner code.
* Avoid using `delete` on arrays — use `splice()` instead.
* Prefer `const` for declaring arrays (you can modify contents but not reassign).
* Combine `map()` and `filter()` for advanced transformations.

---

## 🧾 Summary

| Category     | Examples                                          |
| ------------ | ------------------------------------------------- |
| Creation     | `[]`, `new Array()`, `Array.of()`, `Array.from()` |
| Modification | `push`, `pop`, `splice`, `slice`, `concat`        |
| Searching    | `find`, `filter`, `indexOf`, `includes`           |
| Iteration    | `forEach`, `map`, `reduce`, `for...of`            |
| Sorting      | `sort`, `reverse`                                 |
| Conversion   | `toString`, `join`, `flat`, `flatMap`             |

---

### ✍️ Author

**Suman Baidya**
(Prepared for JavaScript and Web Development Notes)
