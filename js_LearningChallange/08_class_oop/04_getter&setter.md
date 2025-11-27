# 🔐 Getters and Setters in JavaScript

JavaScript provides **Getters** and **Setters** to control access to object properties. They allow us to define **computed**, **protected**, or **custom behavior** when reading or writing values.

---

## 📌 What Are Getters?

A **getter** is a method that is executed when a property is **accessed**.

* Declared using the keyword `get`
* Allows computed values
* Behaves like a normal property (no parentheses needed)

### Example:

```js
const user = {
  firstName: "Suman",
  lastName: "Baidya",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(user.fullName); // Output: Suman Baidya
```

✔️ `fullName` acts as a property but runs logic internally.

---

## 📝 What Are Setters?

A **setter** is a method that is executed when a property is **assigned**.

* Declared using the keyword `set`
* Used for validation or updating multiple fields

### Example:

```js
const user = {
  firstName: "",
  lastName: "",
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

user.fullName = "Dipu Mukherjee";
console.log(user.firstName); // Dipu
console.log(user.lastName);  // Mukherjee
```

✔️ Setter updates multiple internal properties.

---

## 🔄 Getters + Setters Together

Using both makes objects more **secure** and **structured**.

```js
class Product {
  constructor(price) {
    this._price = price;
  }

  get price() {
    return `$${this._price}`;
  }

  set price(value) {
    if (value > 0) this._price = value;
    else console.error("Invalid price!");
  }
}

const p = new Product(500);
p.price = 700;
console.log(p.price); // $700
```

✔️ Price is validated before update.
✔️ `_price` acts as a **protected** internal property.

---

## 📌 Why `_propertyName`?

It’s a **naming convention** for internal/private-like variables.

* Prevents infinite recursion in getter/setter
* Shows that it should not be accessed directly

Wrong example (⚠️ will cause infinite loop):

```js
set price(value) {
  this.price = value; // ❌ refers to itself again
}
```

---

## 🧠 Defining Getters/Setters Using `Object.defineProperty()`

More advanced and configurable approach.

```js
let person = {};
Object.defineProperty(person, "name", {
  set(value) {
    this._name = value.trim();
  },
  get() {
    return this._name.toUpperCase();
  }
});

person.name = "  joy  ";
console.log(person.name); // JOY
```

✔️ You can define additional property controls like `enumerable`, `configurable`.

---

## 🎯 Benefits of Getters & Setters

| Feature                      | Getter | Setter |
| ---------------------------- | ------ | ------ |
| Protects data                | ✔      | ✔      |
| Adds validation              | ❌      | ✔      |
| Compute property dynamically | ✔      | ❌      |
| Controls read/write access   | ✔      | ✔      |
| Helpful for private fields   | ✔      | ✔      |

---

## ❌ When Not to Use Getters/Setters

* When performance is critical (method calls are slower than direct access)
* When no validation or extra logic needed
* For simple data storage

---

## 💬 Real-Life Use Cases

| Use Case        | Example                      |
| --------------- | ---------------------------- |
| Validation      | Price can't be negative      |
| Computed values | Full name, age from DOB      |
| Data security   | Hide internal properties     |
| Logging         | Track when properties change |
| Framework Rules | React state update patterns  |

---

## 🏁 Summary

* Getters **retrieve** property values with custom logic
* Setters **assign** property values with validation or security
* Improve readability and safety
* Used in objects and classes
* Enable better abstraction & encapsulation

---
