# Stack Memory vs Heap Memory in JavaScript

Understanding **memory management** is essential to grasp how JavaScript handles variables, objects, and functions internally. JavaScript uses two types of memory allocation areas — **Stack Memory** and **Heap Memory**.

---

## 🧠 1. Introduction

When a JavaScript program runs, it needs to store data (like variables, functions, and objects) in memory. The **JavaScript engine** (like V8) divides this memory into two regions:

* **Stack Memory** → For storing **primitive data** and **function execution contexts**.
* **Heap Memory** → For storing **non-primitive (reference) data** like objects, arrays, and functions.

---

## 📦 2. Stack Memory

### **Definition:**

Stack memory is a **simple, linear** memory structure that stores **primitive values** and **function call information**.

It works on the **LIFO (Last In, First Out)** principle — the last function or variable pushed into the stack is the first one to be popped out.

### **Stores:**

* Primitive data types (`number`, `string`, `boolean`, `undefined`, `null`, `symbol`, `bigint`)
* Function call details (execution context)

**Example:**

```js
let x = 10;
let y = 'Hello';
```

Here, `x` and `y` are stored directly in the **stack memory**.

### **How Stack Works:**

1. Each time a function is called, a new **stack frame** is created.
2. When the function finishes, the frame is **popped off** the stack.

**Example:**

```js
function add(a, b) {
  let sum = a + b;
  return sum;
}

let result = add(5, 10);
```

Execution Steps:

1. Stack creates a global context.
2. When `add()` is called, a new stack frame is created.
3. After returning the result, that frame is removed from the stack.

---

## 🧱 3. Heap Memory

### **Definition:**

Heap memory is a **larger, unordered memory area** used to store **objects and reference types**.

Unlike stack memory, the heap doesn’t follow a specific order. It’s where **dynamic memory allocation** happens.

### **Stores:**

* Non-primitive data types (Objects, Arrays, Functions)

**Example:**

```js
let person = { name: 'Suman', age: 25 };
```

Here, the variable `person` is stored in the **stack**, but the actual object `{ name: 'Suman', age: 25 }` is stored in the **heap**, and `person` holds a **reference (pointer)** to that object.

---

## ⚙️ 4. Stack vs Heap — Key Differences

| Feature                | **Stack Memory**                      | **Heap Memory**                   |
| ---------------------- | ------------------------------------- | --------------------------------- |
| **Data Type Stored**   | Primitive values                      | Non-primitive values              |
| **Memory Size**        | Small                                 | Large                             |
| **Order**              | LIFO (Last In, First Out)             | No specific order                 |
| **Allocation Speed**   | Fast                                  | Slower                            |
| **Access Type**        | Direct access                         | Indirect (via reference)          |
| **Garbage Collection** | Automatic (when scope ends)           | Automatic (by reference counting) |
| **Used For**           | Execution context and local variables | Objects, arrays, functions        |

---

## 🔍 5. Example: Stack and Heap Together

```js
let name = 'Suman'; // stored in Stack
let user = {         // user ref in Stack, object in Heap
  id: 101,
  city: 'Kolkata'
};

let anotherUser = user; // anotherUser points to the same Heap object

anotherUser.city = 'Bongaon';

console.log(user.city); // Output: Bongaon
```

### **Explanation:**

* `name` → stored in Stack.
* `user` → reference stored in Stack; object stored in Heap.
* `anotherUser` → points to the same Heap memory as `user`.
* Changing one affects the other because both share the same reference.

---

## 🔄 6. Memory Allocation & Garbage Collection

### **1. Memory Allocation:**

* When you declare a variable or object, JavaScript engine allocates memory in Stack or Heap.

### **2. Garbage Collection:**

* JavaScript automatically frees unused memory using **garbage collection**.
* If there are **no references** to an object in the heap, it’s removed automatically.

**Example:**

```js
let user = { name: 'Suman' };
user = null; // reference removed, eligible for garbage collection
```

---

## ⚡ 7. Stack Overflow & Memory Leaks

### **Stack Overflow:**

Occurs when too many function calls are made recursively without termination.

**Example:**

```js
function infinite() {
  infinite(); // never stops calling itself
}
infinite(); // ❌ RangeError: Maximum call stack size exceeded
```

### **Memory Leak:**

Occurs when references to heap objects are not properly released.

**Example:**

```js
let arr = [];
while (true) {
  arr.push(new Array(1000)); // keeps allocating memory
}
```

---

## 🧠 8. Visualization Summary

```
Stack Memory:
--------------
|   name: 'Suman'     |
|   user: (ref → 0x01) |
------------------------

Heap Memory:
--------------
0x01 → { id: 101, city: 'Bongaon' }
```

---

## 📘 9. Key Takeaways

* **Stack Memory** → For simple, short-lived data (primitive values, call stacks).
* **Heap Memory** → For complex, dynamic data (objects, arrays, functions).
* Stack is **fast but limited**, while Heap is **flexible but slower**.
* JavaScript handles memory automatically using **garbage collection**.

---

### ✅ Best Practice

> Keep functions small, avoid global variables, and release unused object references to maintain optimal memory performance.

---

**Author:** Suman Baidya
**Topic:** JavaScript Memory Management — Stack vs Heap
