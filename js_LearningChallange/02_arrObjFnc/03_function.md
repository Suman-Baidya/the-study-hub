# JavaScript Functions

## 🧠 Introduction

A **function** in JavaScript is a reusable block of code designed to perform a specific task. Functions make code modular, organized, and maintainable. Once defined, they can be called multiple times throughout the program.

```js
function greet() {
  console.log("Hello, World!");
}
greet(); // Output: Hello, World!
```

---

## ⚙️ Characteristics of Functions

* **First-class citizens** → Functions can be assigned to variables, passed as arguments, and returned from other functions.
* Can take **parameters** and return **values**.
* Support **closures**, **recursion**, and **higher-order functions**.
* Can be defined in various ways.

---

## 🏗️ Types of Functions

### 1. **Function Declaration**

Defined using the `function` keyword.

```js
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

✅ **Hoisted** — can be called before declaration.

---

### 2. **Function Expression**

Assigned to a variable.

```js
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(2, 3)); // 6
```

❌ **Not hoisted** — cannot be called before declaration.

---

### 3. **Arrow Function (ES6)**

Shorter syntax for functions, introduced in ES6.

```js
const divide = (a, b) => a / b;
console.log(divide(6, 2)); // 3
```

✅ Lexically binds `this` (inherits from parent scope).
❌ Cannot be used as a constructor (`new` keyword not allowed).

---

### 4. **Anonymous Function**

Functions without names, often used as arguments.

```js
setTimeout(function() {
  console.log("Executed after 1 second");
}, 1000);
```

---

### 5. **Named Function Expression**

Useful for recursion or debugging.

```js
const factorial = function fact(n) {
  return n === 0 ? 1 : n * fact(n - 1);
};
```

---

### 6. **Immediately Invoked Function Expression (IIFE)**

Executes immediately after being defined.

```js
(function() {
  console.log("IIFE executed!");
})();
```

✅ Used to create isolated scopes.

---

## 📦 Function Parameters and Arguments

### Default Parameters

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest
```

### Rest Parameters (`...`)

Collects all arguments into an array.

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

### Spread Operator (`...`)

Expands array elements into function arguments.

```js
function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums)); // 6
```

---

## 🧮 Return Statement

A function can return values using `return`.

```js
function square(x) {
  return x * x;
}
console.log(square(4)); // 16
```

If no return is specified, the function returns **undefined**.

---

## ⚡ Hoisting

* **Function Declarations** are hoisted.
* **Function Expressions & Arrow Functions** are **not hoisted**.

```js
sayHello(); // Works
function sayHello() { console.log("Hi"); }

sayHi(); // ❌ Error
const sayHi = function() { console.log("Hi"); };
```

---

## 🧠 Scope and Closures

### Function Scope

Variables declared inside a function are not accessible outside it.

```js
function test() {
  let x = 10;
  console.log(x);
}
console.log(x); // ❌ ReferenceError
```

### Closures

A function remembers variables from its outer scope even after the outer function finishes execution.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
```

✅ Used for **data encapsulation** and **private variables**.

---

## 🔁 Recursion

A function calling itself.

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
```

---

## ⚙️ Higher-Order Functions

Functions that take other functions as arguments or return them.

```js
function applyOperation(a, b, operation) {
  return operation(a, b);
}
function add(x, y) { return x + y; }
console.log(applyOperation(5, 3, add)); // 8
```

✅ Examples: `map()`, `filter()`, `reduce()`.

---

## 💡 Function as Object

Functions in JS are objects with properties and methods.

```js
function hello() {}
console.log(typeof hello); // 'function'
console.log(hello.name); // 'hello'
console.log(hello.length); // number of parameters
```

---

## 🧩 Call, Apply, and Bind

Used to control function context (`this`).

### `call()`

```js
function greet(city) {
  console.log(`Hello ${this.name} from ${city}`);
}
const person = { name: "Suman" };
greet.call(person, "Kolkata");
```

### `apply()`

Similar to `call()` but takes arguments as an array.

```js
greet.apply(person, ["Delhi"]);
```

### `bind()`

Returns a new function with permanently bound `this`.

```js
const greetPerson = greet.bind(person, "Bongaon");
greetPerson(); // Hello Suman from Bongaon
```

---

## ⚡ Arrow Function vs Regular Function

| Feature       | Arrow Function                 | Regular Function           |
| ------------- | ------------------------------ | -------------------------- |
| `this`        | Lexical (inherits from parent) | Own `this` context         |
| `arguments`   | Not available                  | Available                  |
| `new` keyword | Not usable                     | Can be used as constructor |
| Syntax        | Short                          | Verbose                    |

---

## 🧠 Anonymous vs Named Functions

| Type          | Description                        | Example                        |
| ------------- | ---------------------------------- | ------------------------------ |
| **Anonymous** | No name, often used inline         | `setTimeout(function() {...})` |
| **Named**     | Has a name for recursion/debugging | `function calc(){}`            |

---

## 🧱 Generator Functions

A special type of function that can pause and resume execution using `yield`.

```js
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = generator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```

---

## 🔒 Async and Await (Asynchronous Functions)

Used to handle asynchronous code more easily.

```js
async function fetchData() {
  const data = await fetch('https://api.example.com');
  console.log(await data.json());
}
fetchData();
```

✅ Makes asynchronous code look synchronous.

---

## 📊 Summary Table

| Topic                | Description                         | Example                          |
| -------------------- | ----------------------------------- | -------------------------------- |
| Function Declaration | Named, hoisted                      | `function add(){}`               |
| Function Expression  | Assigned to variable                | `const add = function(){}`       |
| Arrow Function       | Short, lexical `this`               | `const add = (a,b)=>a+b`         |
| IIFE                 | Runs immediately                    | `(function(){})()`               |
| Closure              | Inner function accessing outer vars | `function outer(){return inner}` |
| Higher Order         | Takes/returns function              | `arr.map(fn)`                    |
| Async                | Handles async operations            | `async/await`                    |

---

### ✍️ Author

**Suman Baidya**

(Prepared for JavaScript and Web Development Notes)
