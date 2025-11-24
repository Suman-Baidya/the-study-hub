# Day 1 — JavaScript Basics (Interview-Level Notes)

Today’s chapter covers the most fundamental and frequently asked JavaScript interview concepts. These concepts are core foundations for advanced topics and interviewer traps.

---

## ⭐ 1. JavaScript Data Types

JavaScript has **two main categories** of data types:

### **A. Primitive Types**

Primitive values are **immutable** and stored directly in the **stack**.

There are **7 primitive types**:

* `string`
* `number`
* `boolean`
* `null`
* `undefined`
* `bigint`
* `symbol`

#### Example:

```js
let name = "Suman";
let age = 25;
let isProgrammer = true;
let emptyValue = null;
let x;
let bigNumber = 100n;
let uniqueKey = Symbol("id");
```

#### Important Notes:

* Primitives are **copied by value**.
* `typeof null` → `object` (a historical bug).

---

### **B. Non-Primitive Types**

Everything else is an **object**, stored in the **heap**.

Examples:

* Object
* Array
* Function
* Date
* Set, Map

#### Example:

```js
let person = {name: "Suman"};
let arr = [1, 2, 3];
let greet = function() { console.log("Hello"); };
```

#### Important Notes:

* Non-primitives are **copied by reference**.
* Changing one reference will affect the other.

---

## ⭐ 2. Stack vs Heap Memory

JavaScript uses two types of memory:

### **Stack Memory**

* Stores primitive values.
* Stores references (addresses) to objects.
* Fast and small.

### **Heap Memory**

* Stores actual objects.
* Large, slower.

#### Example:

```js
let a = 10; // stored in stack

let obj = {value: 20}; // obj reference in stack, data in heap
```

---

## ⭐ 3. let vs const vs var

Understanding these three is critical for interviews.

### **var**

* Function scoped
* Hoisted (initialized with `undefined`)
* Redeclaration allowed
* Attaches to `window` object

```js
console.log(a); // undefined
var a = 10;
```

---

### **let**

* Block scoped
* Hoisted but uninitialized
* Exists in the **Temporal Dead Zone (TDZ)**

```js
console.log(x); // ReferenceError
let x = 5;
```

---

### **const**

* Block scoped
* Must be initialized
* Cannot be reassigned

```js
const a = 10;
a = 20; // Error

const obj = {name: "Suman"};
obj.name = "Joy"; // allowed
over here object values can be changed
```

#### Important Note:

`const` protects the **binding**, not the **value** stored in the object.

---

## ⭐ 4. Hoisting

Hoisting means JavaScript moves declarations to the **top** during the creation phase.

### **Function Declaration Hoisting**

```js
sayHi(); // Works

function sayHi() {
  console.log("Hello");
}
```

### **var Hoisting**

```js
console.log(a); // undefined
var a = 10;
```

### **let & const Hoisting**

They are hoisted but remain in the **Temporal Dead Zone** until their line executes.

```js
console.log(a);  // ReferenceError
let a = 10;
```

---

## ⭐ 5. Temporal Dead Zone (TDZ)

The time between hoisting and initialization.

```js
console.log(b); // ReferenceError: TDZ
let b = 20;
```

---

## ⭐ 6. Interview Questions from Day 1

**Q1: What is the difference between undefined and null?**

* `undefined` → variable declared but not assigned.
* `null` → intentional empty value.

**Q2: Why is typeof null "object"?**

* A historical bug in JavaScript.

**Q3: Is JavaScript pass-by-value or pass-by-reference?**

* Primitives → pass-by-value
* Objects → pass-by-value, but value is a **reference**

**Q4: What is hoisting?**

* JavaScript moves declarations to the top.

**Q5: Why can const objects be modified?**

* Because const prevents reassignment, not internal mutation.

---

## ⭐ Day 1 Practice Tasks

1. Explain all primitive types with examples.
2. Write an example showing TDZ error.
3. Explain stack vs heap with a real example.
4. Explain var, let, const differences.
5. Write code showing object reference behavior.

---

