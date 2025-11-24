# 📘 JavaScript Interview Preparation – Day 3

## **Topic: Functions (Basic → Advanced)**

---

# ## **1. What is a Function in JavaScript?**

A function is a block of reusable code designed to perform a task.

### **Example:**

```js
function greet() {
  console.log("Hello!");
}
greet();
```

---

# ## **2. Function Declaration vs Function Expression**

### **Function Declaration**

```js
function add(a, b) {
  return a + b;
}
```

* Hoisted (you can use it before declaration)

### **Function Expression**

```js
const add = function(a, b) {
  return a + b;
};
```

* Not hoisted

---

# ## **3. Arrow Functions**

Shorter syntax, no `this`, no `arguments` object.

### Example

```js
const add = (a, b) => a + b;
```

---

# ## **4. What is IIFE? (Immediately Invoked Function Expression)**

Executes immediately after creation.

### Example

```js
(function() {
  console.log("IIFE executed");
})();
```

---

# ## **5. What are First-Class Functions?**

JavaScript treats functions as values.

* Can assign to variables
* Can pass as arguments
* Can return from functions

### Example

```js
function greet() { return "Hello"; }
const fn = greet;
```

---

# ## **6. Higher-Order Functions**

A function that accepts another function OR returns a function.

### Example

```js
function apply(fn, val) {
  return fn(val);
}
```

---

# ## **7. Callbacks**

A function passed as an argument.

### Example

```js
function fetchData(callback) {
  callback("Data loaded");
}
```

---

# ## **8. Closures**

A function that remembers variables from its outer scope even after the outer function has returned.

### Example

```js
function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
```

---

# ## **9. What is `this` in JavaScript?**

`this` refers to the object executing the function.

### In methods

```js
const obj = {
  name: "Suman",
  show() { console.log(this.name); }
};
```

### In arrow functions

Arrow functions don't bind `this`.

---

# ## **10. What is Function Hoisting?**

Function declarations are fully hoisted.
Function expressions are **not**.

### Example

```js
greet(); // works
function greet() { console.log("Hi"); }
```

---

# ## **11. Rest Parameters**

Groups remaining arguments into an array.

### Example

```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
```

---

# ## **12. Spread Operator in Functions**

Used to expand an array.

### Example

```js
const arr = [1, 2, 3];
console.log(Math.max(...arr));
```

---

# ## **13. Default Parameters**

Gives default values to parameters.

### Example

```js
function greet(name = "User") {
  console.log("Hello", name);
}
```

---

# ## **14. Pure vs Impure Functions**

### Pure

* No side effects
* Same input → same output

### Impure

* Modifies external state

---

# ## **15. Function Currying**

Transforms a function of multiple arguments into nested functions.

### Example

```js
function add(a) {
  return function(b) {
    return a + b;
  };
}
```

---

# ## **16. Function Composition**

Combining multiple functions.

### Example

```js
const compose = (f, g) => (x) => f(g(x));
```

---

# ## **17. Memoization**

Caching results to improve performance.

### Example

```js
function memo(fn) {
  const cache = {};
  return function(x) {
    if (cache[x]) return cache[x];
    cache[x] = fn(x);
    return cache[x];
  };
}
```

---

# ## **18. Debouncing**

Waits until user stops an action.

### Example

```js
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
```

---

# ## **19. Throttling**

Limits function execution to one time per interval.

### Example

```js
function throttle(fn, limit) {
  let flag = true;
  return function() {
    if (flag) {
      fn();
      flag = false;
      setTimeout(() => (flag = true), limit);
    }
  };
}
```

---

# ## **20. The `arguments` Object**

Works only in normal functions, not arrow functions.

```js
function test() {
  console.log(arguments);
}
```

---

