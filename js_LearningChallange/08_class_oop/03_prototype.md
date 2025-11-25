# 🧬 JavaScript Prototype – Full Detailed Notes

JavaScript is a **prototype-based** programming language, meaning that objects can inherit features directly from other objects. This inheritance model is based on the concept of **prototypes**.

---

# ⭐ What Is a Prototype?

Every JavaScript object has an internal hidden property called **`[[Prototype]]`**, which refers to another object.

This “other object” becomes the **prototype**, and the current object inherits methods & properties from it.

### Example:

```js
const obj = {};
console.log(obj.__proto__);
```

This prints many built‑in methods like:

* `toString()`
* `valueOf()`
* `hasOwnProperty()`

These come from **Object.prototype**, not from your `obj`.

---

# 🧠 Prototype Chain

When you try to access a property:

1. JavaScript checks the **object itself**.
2. If not found → checks **its prototype**.
3. If not found → checks **prototype's prototype**.
4. Keeps going until it reaches **null**.

➡️ This lookup sequence is called the **Prototype Chain**.

### Example:

```js
const person = { name: "Suman" };
console.log(person.toString()); // from Object.prototype
```

---

# 🗂️ Functions Also Have Prototypes

When you create a function, JavaScript automatically attaches a special property to it:

```js
function Person() {}
console.log(Person.prototype); // {} by default
```

➡️ Anything you add to `Person.prototype` becomes available to all objects created from that function using `new`.

---

# 🏗️ Constructor Functions & Prototype

Before ES6 classes, constructor functions were used to create reusable object blueprints.

### Example:

```js
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.greet = function () {
  return `Hello, I am ${this.name}`;
};

const u1 = new User("Suman", 25);
console.log(u1.greet());
```

✔️ The method `greet` is not stored inside `u1`.
✔️ It is inherited from `User.prototype`.

---

# 🧱 Why Use Prototypes?

### ✅ Memory Efficiency

Instead of having thousands of copies of the same method in each object, all objects can share **one method** via prototype.

### Example:

```js
function Car() {}
Car.prototype.start = function () {
  console.log("Car started");
};
```

All cars share the same `start` method.

---

# 🔄 Overriding Prototype Properties

Objects can override prototype methods.

```js
const obj = {
  toString() {
    return "Custom ToString";
  }
};

console.log(obj.toString()); // Custom ToString
```

The object’s own method is used instead of inherited one.

---

# 🧰 `__proto__` vs `prototype`

| Term        | Used By   | Purpose                                        |
| ----------- | --------- | ---------------------------------------------- |
| `__proto__` | Objects   | Refers to object's prototype (the hidden link) |
| `prototype` | Functions | Blueprint for instances created by `new`       |

### Visual:

```
new Function() → Instance.__proto__ === Function.prototype
```

---

# ⚙️ Creating Objects With `Object.create()`

You can manually set prototype of an object.

```js
const parent = { greet() { console.log("Hi!") } };
const child = Object.create(parent);

child.greet(); // inherited
```

This is the cleanest way to use prototype-based inheritance.

---

# 🧩 Adding Methods to Built‑in Prototypes (Not Recommended)

You *can* modify built‑in prototypes like `Array`, `Object`, `String`.

```js
Array.prototype.first = function () {
  return this[0];
};

console.log([10, 20, 30].first());
```

### ❌ Why Not Recommended?

* Can break existing code
* Can cause naming conflicts
* Hard to debug

---

# 🔗 Prototype Chain Example Diagram

```
let obj = {};

obj → Object.prototype → null
```

```
function Person() {}
let p = new Person();

p → Person.prototype → Object.prototype → null
```

---

# 🧠 How Prototypes Work Internally

1. Function created → gets a `.prototype` object.
2. Create object using `new` → object's `__proto__` points to that `.prototype`.
3. Lookup happens via the **prototype chain**.

---

# 🚀 Relation Between Classes and Prototypes

ES6 `class` syntax is just a cleaner way to use prototypes.

```js
class User {
  greet() {
    console.log("Hello");
  }
}

// Internally:
// User.prototype.greet = function(){}
```

So **JavaScript still uses prototypes behind the scenes**.

---

# 🧾 Summary

### ✔ JavaScript objects use prototype-based inheritance.

### ✔ Every object has `[[Prototype]]` (accessible via `__proto__`).

### ✔ Functions have `.prototype` used for inheritance when calling `new`.

### ✔ Prototype chain helps JS find missing properties.

### ✔ Saves memory because methods are shared.

### ✔ Classes use prototypes internally.

---

# 🎯 Final Words

Understanding **prototypes** is essential for mastering:

* Inheritance
* Constructors
* Classes
* `this` keyword behavior
* Object creation patterns
* Performance optimizations

If you want diagrams, example problems, interview questions, or animations — just tell me! 🚀

# 📊 Prototype Diagrams

## 🔗 Basic Prototype Chain Diagram

```
let obj = {};

obj
  ↑
  └── __proto__ → Object.prototype
                                ↑
                                └── __proto__ → null
```

## 🧱 Constructor Function Prototype Chain

```
function Person() {}
let p = new Person();

p
  ↑
  └── __proto__ → Person.prototype
                       ↑
                       └── __proto__ → Object.prototype
                                             ↑
                                             └── null
```

## 🏫 Class Prototype Diagram

```
class User {}
let u = new User();

u
  ↑
  └── __proto__ → User.prototype
                        ↑
                        └── __proto__ → Object.prototype
                                                  ↑
                                                  └── null
```

---

# ⚔️ Class vs Prototype (Side-by-Side Comparison)

| Feature           | Prototype-based                             | Class-based (ES6)                  |
| ----------------- | ------------------------------------------- | ---------------------------------- |
| Syntax            | Older, more manual                          | Cleaner, modern syntax             |
| Inheritance       | `Object.create()`, `__proto__`, prototypes  | `extends`, `super`                 |
| Method Definition | Added using `Function.prototype.method`     | Defined directly inside class body |
| Behind the Scenes | Directly uses JavaScript's prototype system | Still uses prototypes internally!  |
| Instantiation     | `new Constructor()`                         | `new ClassName()`                  |
| Readability       | Harder for beginners                        | Easier & more structured           |
| Flexibility       | Very flexible and dynamic                   | More controlled and predictable    |
| Performance       | Same, since both use prototypes             | Same (syntactic sugar)             |

### ✔️ Summary

* **Classes are syntactic sugar** over prototypes.
* JavaScript **always uses prototype inheritance internally**, even with classes.

---

# 📝 Interview Questions on Prototype

## 🔰 Beginner Level

1. **What is a prototype in JavaScript?**
2. **What is the prototype chain?**
3. **Difference between `__proto__` and `prototype`?**
4. **Does every object have a prototype?**
5. **What is `Object.prototype`?**

## 🧠 Intermediate Level

1. How does JavaScript find properties during lookup?
2. Why are prototype methods memory-efficient?
3. Can you override prototype properties? Provide an example.
4. Why should you avoid modifying built-in prototypes?
5. How does inheritance work in constructor functions?

## 🚀 Advanced Level

1. How do classes internally use prototypes?
2. Explain how `new` works behind the scenes.
3. What is the difference between own properties vs inherited properties?
4. How does prototypal inheritance differ from classical inheritance?
5. Explain prototype shadowing.

---

# 🧩 Practical Deep Concepts

## 🔄 Shadowing Prototype Properties

When an object has a property with the same name as its prototype:

```js
const parent = { greet() { console.log("Hello") } };
const child = Object.create(parent);

child.greet = function () { console.log("Hi") }
child.greet(); // Hi → overrides prototype
```

## 📥 Checking for Own Properties

```js
obj.hasOwnProperty("name");
```

Helps distinguish between own vs inherited properties.

---

# 🧪 Exercises (Highly Useful for Mastery)

1. Create a prototype chain of 3 levels and demonstrate lookup.
2. Implement your own `Array.prototype.unique()` method.
3. Create a constructor function and add shared methods.
4. Convert a prototype-based class to ES6 class syntax.
5. Create custom inheritance using `Object.create()`.

---

# 🎯 Final Takeaway

JavaScript's entire inheritance and OOP system is built on **prototypes**, even when we use classes. Understanding prototypes gives you:

* Stronger debugging skills
* More control over inheritance
* Better performance understanding
* Deeper JavaScript mastery

