# let vs const vs var in JavaScript

JavaScript provides three main ways to declare variables: **var**, **let**, and **const**. Understanding the differences between them is crucial for writing clean, efficient, and bug-free code.

---

## 🧩 1. Definitions

### **var**

* Introduced in **ES5 (and earlier)**.
* Declares a **function-scoped** or **globally-scoped** variable.
* Can be **re-declared** and **updated** within the same scope.

**Example:**

```js
var name = "Suman";
var name = "Baidya"; // Re-declaration allowed
console.log(name); // Output: Baidya
```

---

### **let**

* Introduced in **ES6 (2015)**.
* Declares a **block-scoped** variable.
* Can be **updated** but **not re-declared** within the same scope.

**Example:**

```js
let city = "Kolkata";
city = "Bongaon"; // ✅ Allowed
// let city = "Delhi"; ❌ Error: Identifier 'city' has already been declared
console.log(city); // Output: Bongaon
```

---

### **const**

* Introduced in **ES6 (2015)**.
* Declares a **block-scoped** variable.
* Must be **initialized at the time of declaration**.
* Cannot be **updated** or **re-declared**.

**Example:**

```js
const PI = 3.1416;
// PI = 3.14; ❌ TypeError: Assignment to constant variable
console.log(PI);
```

---

## 🔍 2. Scope Comparison

| Keyword | Scope Type | Block Scoped | Function Scoped | Global Scoped |
| ------- | ---------- | ------------ | --------------- | ------------- |
| `var`   | Function   | ❌ No         | ✅ Yes           | ✅ Yes         |
| `let`   | Block      | ✅ Yes        | ❌ No            | ❌ No          |
| `const` | Block      | ✅ Yes        | ❌ No            | ❌ No          |

**Example:**

```js
if (true) {
  var x = 10;
  let y = 20;
  const z = 30;
}
console.log(x); // ✅ 10
// console.log(y); ❌ ReferenceError
// console.log(z); ❌ ReferenceError
```

---

## ⏳ 3. Hoisting Behavior

| Keyword | Hoisted | Initialized to `undefined` | Temporal Dead Zone (TDZ) |
| ------- | ------- | -------------------------- | ------------------------ |
| `var`   | ✅ Yes   | ✅ Yes                      | ❌ No                     |
| `let`   | ✅ Yes   | ❌ No                       | ✅ Yes                    |
| `const` | ✅ Yes   | ❌ No                       | ✅ Yes                    |

**Example:**

```js
console.log(a); // undefined (var is hoisted)
var a = 10;

// console.log(b); // ❌ ReferenceError (TDZ)
let b = 20;

// console.log(c); // ❌ ReferenceError (TDZ)
const c = 30;
```

---

## ⚖️ 4. Re-declaration and Re-assignment

| Keyword | Re-declaration | Re-assignment |
| ------- | -------------- | ------------- |
| `var`   | ✅ Allowed      | ✅ Allowed     |
| `let`   | ❌ Not Allowed  | ✅ Allowed     |
| `const` | ❌ Not Allowed  | ❌ Not Allowed |

---

## 💡 5. Pros and Cons

### **var**

**Pros:**

* Works in older browsers (backward compatibility).
* Function-scoped (sometimes useful for legacy code).

**Cons:**

* Causes **unexpected behavior** due to hoisting.
* No block scope → can lead to bugs.
* Easy to accidentally re-declare variables.

---

### **let**

**Pros:**

* Block-scoped → safer and cleaner.
* Can be updated when needed.
* Avoids issues of variable hoisting.

**Cons:**

* Cannot be re-declared in the same scope.

---

### **const**

**Pros:**

* Prevents accidental reassignment.
* Encourages **immutability** in code.
* Block-scoped → safe and predictable.

**Cons:**

* Must be initialized immediately.
* Cannot be reassigned even when needed.

---

## 🧠 6. When to Use Each

| Situation                                                  | Recommended Keyword | Reason                  |
| ---------------------------------------------------------- | ------------------- | ----------------------- |
| When variable value **changes** frequently                 | `let`               | Flexibility with safety |
| When variable value **should not change**                  | `const`             | Prevents mutation       |
| When writing **old JS code** or maintaining legacy systems | `var`               | Browser compatibility   |

---

## 🚫 7. When *Not* to Use

| Keyword | Avoid When                                           |
| ------- | ---------------------------------------------------- |
| `var`   | In modern JavaScript (can cause scope-related bugs). |
| `let`   | When the value never changes.                        |
| `const` | When the value needs to be reassigned or updated.    |

---

## 🧰 8. Example Summary

```js
// ✅ Modern Best Practice
const API_URL = "https://example.com/api"; // constant value
let userCount = 0; // variable value

userCount += 1;
console.log(API_URL, userCount);
```

---

## 📘 9. Key Takeaways

* Use **const** by default.
* Use **let** if you know the value will change.
* Avoid **var** in modern JavaScript.

---

### ✅ Best Practice

> **Always prefer `const` and `let` over `var`.** It ensures cleaner, more reliable, and maintainable code.

---

**Author:** Suman Baidya
**Topic:** JavaScript Variable Declaration — `let`, `const`, and `var`
