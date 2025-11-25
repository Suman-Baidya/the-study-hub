# JavaScript OOP (Object-Oriented Programming) — Full Detailed Notes

## 📌 Introduction to OOP in JavaScript

**Object-Oriented Programming (OOP)** is a programming paradigm based on the concept of "objects" — data structures that contain properties (data) and methods (functions).

JavaScript is **prototype-based**, not class-based originally, but ES6 introduced `class` syntax to simplify OOP.

OOP helps make code:

* Modular
* Reusable
* Maintainable
* Scalable

---

## 📌 Why OOP in JavaScript?

JavaScript powers large-scale applications (React, Node.js, games, dashboards, etc.). OOP helps by:

* Grouping related data and behavior
* Reducing duplication with inheritance
* Allowing encapsulation and data protection
* Structuring large project code

---

# 🧱 Core OOP Concepts in JavaScript

## 1. **Object Literals**

Simplest way to create an object.

```js
const user = {
  name: "Suman",
  age: 25,
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};
```

### Pros:

* Simple and easy
* Great for small objects

### Cons:

* Not reusable for multiple objects
* Repeated code

---

## 2. **Constructor Functions** (Pre-ES6)

A function used to create objects.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Suman", 22);
```

### Why use this?

* Makes reusable templates
* Works with prototypes for inheritance

---

## 3. **The `new` Keyword**

Using `new` does four things:

1. Creates a new empty object
2. Sets `this` to point to that object
3. Links object to prototype
4. Returns the object

```js
const person = new Person("Joy", 30);
```

---

## 4. **Prototype & Prototypal Inheritance**

Every JavaScript object has a **hidden internal property** called `[[Prototype]]`.

```js
Person.prototype.sayHi = function() {
  console.log("Hello");
};
```

### Why prototypes?

* Saves memory (methods shared across instances)
* Enables inheritance

Example:

```js
p1.sayHi();
```

---

## 5. **Instance**

Any object created from a constructor or class:

```js
const student = new Person("Amit", 20); // instance
```

---

## 6. **ES6 Classes** (Modern OOP)

Classes provide cleaner syntax but still use prototypes underneath.

```js
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  drive() {
    console.log(`${this.brand} is driving`);
  }
}

const c1 = new Car("BMW", "X5");
c1.drive();
```

### Benefits of Classes:

* Cleaner syntax
* Clear structure
* Easier inheritance using `extends`

---

## 7. **Inheritance in Classes**

```js
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const d = new Dog();
d.speak();
d.bark();
```

---

## 8. **`super()` Keyword**

Used to call the parent class constructor.

```js
class A {
  constructor(x) {
    this.x = x;
  }
}

class B extends A {
  constructor(x, y) {
    super(x);
    this.y = y;
  }
}
```

---

## 9. **The `this` Keyword in OOP**

`this` changes based on context.

### In object:

```js
const obj = {
  name: "Suman",
  show() {
    console.log(this.name);
  }
};
```

### In class:

`this` refers to instance.

### In events / global / arrow functions:

* Arrow functions **do NOT bind** `this`

```js
const obj = {
  name: "JS",
  arrow: () => console.log(this),
  normal() { console.log(this); }
};
```

---

# 🧩 Four Pillars of OOP in JavaScript

## 1. **Encapsulation**

Keeping data private and exposing only necessary parts.

```js
class BankAccount {
  #balance = 0; // private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
```

---

## 2. **Abstraction**

Hiding complex logic and showing only essentials.

```js
class Car {
  start() {
    this.#checkSystems();
    console.log("Car started");
  }

  #checkSystems() {
    // hidden logic
  }
}
```

---

## 3. **Inheritance**

Child classes inheriting from parent classes.

---

## 4. **Polymorphism**

Same method, different implementation.

```js
class Animal {
  sound() { console.log("Some sound"); }
}
class Cat extends Animal {
  sound() { console.log("Meow"); }
}
```

---

# 🧠 OOP Memory Model in JS

* Methods stored in **prototype**, not instance
* Objects store data only
* Saves memory in large-scale systems

---

# 🏗️ Object Creation Patterns

1. Object literal
2. Factory function
3. Constructor function
4. Class
5. Object.create()

---

## Example: Factory Function

```js
function createUser(name) {
  return {
    name,
    greet() {
      console.log(`Hello ${name}`);
    }
  };
}
```

---

# 🔄 Comparing Approaches

| Method               | Reusable    | Requires `new` | Uses Prototype |
| -------------------- | ----------- | -------------- | -------------- |
| Object Literal       | ❌ No        | ❌ No           | ❌              |
| Factory Function     | ⚠️ Somewhat | ❌ No           | ❌              |
| Constructor Function | ✅ Yes       | ✅ Yes          | ✅              |
| Class                | ✅ Yes       | ✅ Yes          | ✅              |

---

# 🎯 Why OOP is Important in JavaScript

* Used in **React (class components)**
* Used in **Node.js frameworks**
* Used for **game engines, simulations**
* Organizes large codebases
* Enables real-world modeling

---

# 📌 Summary

JavaScript supports OOP through:

* Objects
* Prototypes
* Constructor functions
* Classes (ES6)

OOP helps structure and scale applications by enabling:

* Encapsulation
* Abstraction
* Inheritance
* Polymorphism

---

**Author: Suman Baidya**
