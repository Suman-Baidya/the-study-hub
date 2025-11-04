# JavaScript Objects

## 🧠 Introduction

An **Object** in JavaScript is a collection of key-value pairs (properties). It is one of the most important data types in JS and forms the foundation of most complex structures like arrays, functions, and classes.

Objects are used to store and organize data efficiently. Each property has a **key (name)** and a **value**, where the value can be any type — a number, string, function, array, or another object.

```js
let person = {
  name: "Suman",
  age: 25,
  profession: "Developer"
};
console.log(person.name); // Suman
```

---

## ⚙️ Characteristics of Objects

* **Key-value pairs** structure.
* **Keys** are strings or symbols.
* **Values** can be any data type.
* **Dynamic:** You can add, modify, or delete properties at any time.
* **Reference type:** Stored and compared by reference, not by value.

---

## 🏗️ Creating Objects

There are several ways to create objects in JavaScript:

### 1. Using Object Literals (Recommended)

```js
let car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2024
};
```

### 2. Using the `new Object()` Constructor

```js
let car = new Object();
car.brand = "Tesla";
car.model = "Model 3";
```

### 3. Using Constructor Functions

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let person1 = new Person("Suman", 25);
```

### 4. Using ES6 `class`

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let p1 = new Person("Dipu", 30);
```

### 5. Using `Object.create()`

```js
let prototypeObj = {greet() { return "Hello!"; }};
let user = Object.create(prototypeObj);
user.name = "Suman";
```

---

## 📋 Accessing Object Properties

You can access properties using **dot notation** or **bracket notation**.

```js
let user = { name: "Suman", age: 25 };
console.log(user.name); // Dot notation
console.log(user["age"]); // Bracket notation
```

---

## 🧮 Modifying Objects

```js
let person = { name: "Suman", age: 25 };

// Add new property
person.city = "Kolkata";

// Modify property
person.age = 26;

// Delete property
delete person.city;
```

---

## 🧾 Object Methods

| Method                            | Description                                   | Example                                   |
| --------------------------------- | --------------------------------------------- | ----------------------------------------- |
| `Object.keys(obj)`                | Returns an array of property names            | `Object.keys(person)`                     |
| `Object.values(obj)`              | Returns an array of property values           | `Object.values(person)`                   |
| `Object.entries(obj)`             | Returns array of key-value pairs              | `Object.entries(person)`                  |
| `Object.assign(target, source)`   | Copies properties from one object to another  | `Object.assign({}, person)`               |
| `Object.freeze(obj)`              | Freezes object (no changes allowed)           | `Object.freeze(person)`                   |
| `Object.seal(obj)`                | Prevents adding/removing but allows modifying | `Object.seal(person)`                     |
| `Object.create(proto)`            | Creates new object with specified prototype   | `Object.create(proto)`                    |
| `Object.hasOwn(obj, key)`         | Checks if object has own property             | `Object.hasOwn(person, 'name')`           |
| `Object.getOwnPropertyNames(obj)` | Lists all property names                      | `Object.getOwnPropertyNames(person)`      |
| `Object.fromEntries(array)`       | Creates object from key-value pairs           | `Object.fromEntries([["name", "Suman"]])` |

---

## 🔄 Iterating Over Objects

### Using `for...in`

```js
let user = { name: "Suman", age: 25, city: "Kolkata" };
for (let key in user) {
  console.log(key + ": " + user[key]);
}
```

### Using `Object.keys()` and `forEach()`

```js
Object.keys(user).forEach(key => {
  console.log(key, user[key]);
});
```

### Using `Object.entries()`

```js
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
```

---

## 🧩 Nested Objects

Objects can contain other objects as properties.

```js
let student = {
  name: "Suman",
  address: {
    city: "Kolkata",
    zip: 700119
  }
};
console.log(student.address.city); // Kolkata
```

---

## 📦 Object Destructuring

You can extract values easily using destructuring syntax.

```js
let person = { name: "Suman", age: 25 };
const { name, age } = person;
console.log(name); // Suman
```

Nested destructuring:

```js
let student = {
  name: "Dipu",
  address: { city: "Bongaon", pin: 743245 }
};
const { address: { city } } = student;
console.log(city); // Bongaon
```

---

## 🧱 Object Spread Operator

You can clone or merge objects using the spread (`...`) operator.

```js
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 };
console.log(merged); // { a:1, b:2, c:3, d:4 }
```

---

## 🔒 Immutability in Objects

### 1. `Object.freeze()`

Makes the object immutable.

```js
let config = { api: "/v1" };
Object.freeze(config);
config.api = "/v2"; // ignored
```

### 2. `Object.seal()`

Prevents adding or deleting properties but allows modification.

```js
let user = { name: "Suman" };
Object.seal(user);
user.name = "Baidya"; // allowed
```

---

## 🧠 Comparing Objects

Objects are compared by **reference**, not by value.

```js
let a = { x: 1 };
let b = { x: 1 };
console.log(a === b); // false
let c = a;
console.log(a === c); // true
```

---

## ⚡ Advanced Topics

### 1. `this` Keyword

Refers to the object that is executing the current function.

```js
let person = {
  name: "Suman",
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
};
person.greet();
```

### 2. Getter and Setter

Used to control access to object properties.

```js
let user = {
  firstName: "Suman",
  lastName: "Baidya",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }
};
user.fullName = "Dipu Mukherjee";
console.log(user.firstName); // Dipu
```

---

## 📊 Summary Table

| Topic    | Description                          | Example                       |
| -------- | ------------------------------------ | ----------------------------- |
| Creation | Literal, Constructor, Class          | `{}`, `new Object()`, `class` |
| Access   | Dot, Bracket                         | `obj.key`, `obj['key']`       |
| Modify   | Add, Update, Delete                  | `obj.newKey = value`          |
| Methods  | `keys()`, `values()`, `entries()`    | `Object.keys(obj)`            |
| Loop     | `for...in`, `entries()`              | Iterate properties            |
| Advanced | Destructuring, Spread, Getter/Setter | Modern ES6+ features          |

---

### ✍️ Author

**Suman Baidya**
(Prepared for JavaScript Object Concepts and Web Development Notes)
