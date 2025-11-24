# Day 2 – JavaScript Fundamentals Deep Dive

## 📌 Topics Covered

* Truthy & Falsy Values
* Equality (== vs ===)
* JavaScript Data Types
* Pass-by-Value vs Pass-by-Reference
* Hoisting (Deep Dive)
* Temporal Dead Zone (TDZ)
* var vs let vs const
* Stack & Heap Memory
* Garbage Collection Basics

---

# 📘 Day 2 – Complete Notes

## 1. Truthy and Falsy Values

### Falsy values (7 items)

* false
* 0
* -0
* 0n
* ""
* null
* undefined
* NaN

All other values are **truthy**, including: `"0"`, `"false"`, `[]`, `{}`, and `" "`.

### Example

```js
if ("0") console.log("Truthy");
if ([]) console.log("Truthy");
if (0) console.log("Falsy"); // Will not run
```

---

## 2. == vs ===

### == (Loose Equality)

Performs type coercion.

```js
"5" == 5 // true
```

### === (Strict Equality)

No type conversion.

```js
"5" === 5 // false
```

### Important cases

```js
null == undefined // true
null === undefined // false
NaN === NaN // false
```

Check NaN:

```js
Number.isNaN(value);
```

---

## 3. JavaScript Data Types

### Primitive Types

* string
* number
* boolean
* null
* undefined
* symbol
* bigint

### Reference Types

* object
* array
* function
* map
* set
* date

---

## 4. Pass-by-Value vs Pass-by-Reference

### Primitives → Pass by Value

```js
let x = 10;
let y = x;
y = 20;
console.log(x); // 10
```

### Objects → Pass by Reference

```js
const obj1 = { a: 1 };
const obj2 = obj1;
obj2.a = 5;
console.log(obj1.a); // 5
```

---

## 5. Hoisting

### var Hoisting

```js
console.log(a); // undefined
var a = 10;
```

### let & const Hoisting (TDZ)

```js
console.log(b); // ReferenceError
let b = 20;
```

---

## 6. Temporal Dead Zone (TDZ)

Period between hoisting and actual initialization.

```js
console.log(count); // ReferenceError
let count = 5;
```

---

## 7. var vs let vs const

| Feature    | var      | let       | const     |
| ---------- | -------- | --------- | --------- |
| Scope      | function | block     | block     |
| TDZ        | No       | Yes       | Yes       |
| Re-declare | Yes      | No        | No        |
| Re-assign  | Yes      | Yes       | No        |
| Hoisted    | Yes      | Yes (TDZ) | Yes (TDZ) |

---

## 8. Memory Management (Stack & Heap)

### Stack

Stores:

* Primitive values
* Function execution context

### Heap

Stores:

* Objects
* Arrays
* Functions

---

## 9. Garbage Collection (Basics)

JS uses **Mark-and-Sweep** algorithm.

```js
let obj = { a: 10 };
obj = null; // Now garbage collectible
```

---

# 📚 Top 10 Interview Questions & Answers for Day 2

### 1. **What are truthy and falsy values?**

Falsy values are: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.
Everything else is truthy like `[]`, `{}`, `"0"`, `" "`.

---

### 2. **Difference between == and ===?**

* `==` → compares *after type coercion*.
* `===` → compares *without conversion*.

Example:

```js
"5" == 5   // true
"5" === 5  // false
```

---

### 3. **Why is NaN === NaN false?**

Because by IEEE floating-point rules, NaN is **never equal to anything**, not even itself.
Check using:

```js
Number.isNaN(value)
```

---

### 4. **What is the Temporal Dead Zone (TDZ)?**

TDZ is the time between hoisting and initialization of a `let` or `const` variable where accessing it throws a ReferenceError.

```js
console.log(a); // Error
let a = 10;
```

---

### 5. **Explain var vs let vs const.**

* `var` → function scope, hoisted, redeclarable.
* `let` → block scope, TDZ, reassignable.
* `const` → block scope, TDZ, *not* reassignable.

---

### 6. **What gets hoisted in JavaScript?**

* `var` declarations → hoisted as `undefined`.
* `function` declarations → hoisted completely.
* `let`/`const` → hoisted but remain in TDZ.

---

### 7. **Explain pass-by-value vs pass-by-reference.**

* Primitives → copied (value).
* Objects → reference is copied.

Example:

```js
let a = {x:1};
let b = a;
b.x = 5;
console.log(a.x); // 5
```

---

### 8. **Why is typeof null === "object"?**

It's a **historic bug** in JavaScript because null was represented as an object pointer in early versions.

---

### 9. **Difference between undefined and null.**

* `undefined` → variable declared but not assigned.
* `null` → intentional empty value.

---

### 10. **Explain stack vs heap memory.**

* Stack → stores primitives & execution context.
* Heap → stores objects, arrays, functions.

---
