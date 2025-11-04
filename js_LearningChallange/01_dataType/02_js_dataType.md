# JavaScript Data Types and ECMAScript (ECMA)

JavaScript is a dynamic, interpreted language that supports different **data types** and is standardized under **ECMAScript (ECMA)** specifications. Understanding both is fundamental for mastering JavaScript.

---

## 🧩 1. JavaScript Data Types

JavaScript has **two categories** of data types:

* **Primitive Data Types**
* **Non-Primitive (Reference) Data Types**

---

### **1.1 Primitive Data Types**

Primitive data types are immutable (cannot be changed) and store **single values**.

| Data Type     | Description                                              | Example                   |
| ------------- | -------------------------------------------------------- | ------------------------- |
| **String**    | Sequence of characters used to represent text            | `'Hello'`, `"World"`      |
| **Number**    | Numeric data type including integers and floating points | `10`, `3.14`, `-7`        |
| **Boolean**   | Represents logical values                                | `true`, `false`           |
| **Undefined** | Declared but not assigned a value                        | `let x;` → `undefined`    |
| **Null**      | Represents an empty or non-existent value                | `let y = null;`           |
| **BigInt**    | Used for large integers beyond `2^53 - 1`                | `12345678901234567890n`   |
| **Symbol**    | Unique and immutable identifier                          | `let sym = Symbol('id');` |

**Example:**

```js
let name = 'Suman'; // String
let age = 25;       // Number
let isStudent = false; // Boolean
let score;           // Undefined
let value = null;    // Null
let bigNum = 12345678901234567890n; // BigInt
let id = Symbol('user'); // Symbol
```

---

### **1.2 Non-Primitive (Reference) Data Types**

Non-primitive data types hold **collections of values** or **complex entities**.

| Data Type    | Description                   | Example                             |
| ------------ | ----------------------------- | ----------------------------------- |
| **Object**   | Collection of key-value pairs | `{ name: 'Suman', age: 25 }`        |
| **Array**    | Ordered list of values        | `[10, 20, 30]`                      |
| **Function** | Block of reusable code        | `function greet() { return 'Hi'; }` |
| **Date**     | Represents date and time      | `new Date()`                        |

**Example:**

```js
let person = { name: 'Suman', age: 25 };
let fruits = ['Apple', 'Mango', 'Banana'];
function greet() { console.log('Hello World'); }
let today = new Date();
```

---

### 🧮 **Dynamic Typing**

JavaScript is a **dynamically typed language**, meaning the variable type can change at runtime.

**Example:**

```js
let x = 10;     // Number
x = 'Hello';    // Now a String
```

---

## 🔍 2. Type Conversion

### **Implicit Conversion (Type Coercion)**

JavaScript automatically converts one data type to another when needed.

```js
console.log('5' + 2);  // '52' → String
console.log('5' - 2);  // 3   → Number
```

### **Explicit Conversion (Manual Conversion)**

Developers manually convert data types using functions.

```js
Number('10'); // 10
String(20);   // '20'
Boolean(0);   // false
```

---

## 🧱 3. ECMAScript (ECMA)

### **Definition:**

**ECMAScript (ECMA)** is the **official standard** that defines the rules, syntax, and features of JavaScript. It ensures consistency across different browsers and JavaScript engines.

**Full Form:** *European Computer Manufacturers Association Script*

---

## 📜 4. ECMAScript History

| Version                  | Year    | Key Features                                                   |
| ------------------------ | ------- | -------------------------------------------------------------- |
| **ES1**                  | 1997    | First version of JavaScript standard                           |
| **ES3**                  | 1999    | Regular expressions, try/catch, improved string handling       |
| **ES5**                  | 2009    | `strict mode`, JSON support, getters/setters                   |
| **ES6 (ES2015)**         | 2015    | `let`, `const`, arrow functions, classes, modules              |
| **ES7–ES13 (2016–2022)** | Ongoing | Async/await, spread operators, optional chaining, BigInt, etc. |

---

## ⚙️ 5. ECMAScript Features (Highlights)

### **From ES6 Onward:**

* **Block scope:** `let` and `const`
* **Arrow functions:** `() => {}`
* **Classes and inheritance**
* **Template literals:** `` `Hello ${name}` ``
* **Destructuring assignment**
* **Default parameters**
* **Promises and async/await**
* **Modules (import/export)**

**Example:**

```js
// ES6 Example
const greet = (name = 'Guest') => `Hello, ${name}!`;
console.log(greet('Suman'));
```

---

## 🧠 6. Relationship Between JavaScript and ECMAScript

* **ECMAScript** → The *standard/specification*.
* **JavaScript** → The *implementation* of ECMAScript.
* Browsers like Chrome, Firefox, and Edge implement ECMAScript via engines like **V8**, **SpiderMonkey**, etc.

**In short:**

> ECMAScript defines the language rules, and JavaScript follows those rules.

---

## 📘 7. Key Takeaways

* JavaScript supports **primitive** and **non-primitive** data types.
* It’s **dynamically typed** and supports **type coercion**.
* **ECMAScript** defines JavaScript’s core syntax and behavior.
* **ES6 (ECMAScript 2015)** revolutionized modern JavaScript development.

---

### ✅ Best Practice

> Always use **modern ES6+ syntax** (like `let`, `const`, arrow functions, and modules) for cleaner and more secure JavaScript code.

---

**Author:** Suman Baidya
**Topic:** JavaScript Data Types & ECMAScript Overview
