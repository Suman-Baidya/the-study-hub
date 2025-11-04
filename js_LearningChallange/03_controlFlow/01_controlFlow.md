# JavaScript Control Flow

## 🧠 Introduction

**Control Flow** in JavaScript refers to the order in which individual statements, instructions, or function calls are executed or evaluated in a program. By default, JavaScript executes code **from top to bottom**, but with control flow statements, we can alter this flow to make decisions, repeat tasks, or handle exceptions.

---

## ⚙️ Types of Control Flow Statements

### 1. **Conditional Statements**

These allow you to execute different code blocks based on conditions.

#### 🔹 `if` Statement

Used to execute code when a condition is true.

```js
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}
```

#### 🔹 `if...else` Statement

Used when there are two possible outcomes.

```js
let temperature = 30;
if (temperature > 25) {
  console.log("It's hot.");
} else {
  console.log("It's cool.");
}
```

#### 🔹 `if...else if...else` Ladder

Used when multiple conditions exist.

```js
let score = 85;
if (score >= 90) {
  console.log("A grade");
} else if (score >= 75) {
  console.log("B grade");
} else {
  console.log("C grade");
}
```

#### 🔹 Ternary Operator (`?:`)

A shorthand for `if...else`.

```js
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);
```

#### 🔹 `switch` Statement

Used to execute one block of code among many options.

```js
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("End of the week");
    break;
  default:
    console.log("Midweek days");
}
```

✅ **Note:** Always use `break` to prevent *fall-through* to other cases.

---

### 2. **Looping (Iteration) Statements**

Loops allow executing a block of code multiple times.

#### 🔹 `for` Loop

Used when the number of iterations is known.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

#### 🔹 `while` Loop

Used when the condition is checked before each iteration.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

#### 🔹 `do...while` Loop

Executes the code **at least once** before checking the condition.

```js
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);
```

#### 🔹 `for...in` Loop

Used to iterate over **object properties**.

```js
const person = { name: 'John', age: 25 };
for (let key in person) {
  console.log(key + ': ' + person[key]);
}
```

#### 🔹 `for...of` Loop

Used to iterate over **iterable objects** (like arrays, strings, etc.).

```js
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color);
}
```

#### 🔹 `break` and `continue`

* `break`: exits the loop completely.
* `continue`: skips the current iteration and continues with the next.

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 4) break;    // stop at 4
  console.log(i);
}
```

---

### 3. **Exception Handling (Error Control Flow)**

Allows handling runtime errors gracefully using `try...catch...finally`.

```js
try {
  let result = 10 / 0;
  console.log(result);
  throw new Error("Custom error example");
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("This block always executes.");
}
```

#### Explanation:

* `try`: The block where you test code for errors.
* `catch`: Handles any errors that occur.
* `finally`: Executes whether an error occurs or not.

---

### 4. **Control Flow in Functions**

Functions can return values to alter the flow of execution.

```js
function checkEven(num) {
  if (num % 2 === 0) return 'Even';
  return 'Odd';
}
console.log(checkEven(5)); // Odd
```

---

### 5. **Control Flow with Asynchronous Code**

In asynchronous operations like Promises and `async/await`, control flow is managed differently.

#### 🔹 Promise Example

```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

#### 🔹 Async/Await Example

```js
async function getData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getData();
```

✅ `await` pauses execution until the Promise is resolved.

---

## 🔄 Control Flow Summary Table

| Type               | Keywords / Statements                                | Purpose                            |
| ------------------ | ---------------------------------------------------- | ---------------------------------- |
| **Conditional**    | `if`, `else`, `switch`, `?:`                         | Decide which code block to execute |
| **Loops**          | `for`, `while`, `do...while`, `for...in`, `for...of` | Repeat code blocks                 |
| **Loop Control**   | `break`, `continue`                                  | Alter loop behavior                |
| **Error Handling** | `try`, `catch`, `finally`, `throw`                   | Manage runtime errors              |
| **Async Flow**     | `Promise`, `then`, `catch`, `async`, `await`         | Control asynchronous operations    |

---

## 🧩 Best Practices

✅ Use `===` for strict comparison.
✅ Always include `break` in `switch` statements.
✅ Avoid infinite loops by ensuring loop conditions will eventually be false.
✅ Use `try...catch` for error-prone code.
✅ Prefer `for...of` over traditional loops for arrays.
✅ Use `async/await` for better readability in asynchronous control flow.

---

### ✍️ Author

**Suman Baidya**
(Prepared for JavaScript Control Flow — Basic to Advanced Concepts)
