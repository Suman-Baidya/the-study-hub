# **OOP Four Pillars in JavaScript**

Object-Oriented Programming (OOP) is built on **four pillars**:

* Encapsulation
* Abstraction
* Inheritance
* Polymorphism

Below are the **easiest explanations**, **real-life examples**, and **JavaScript examples**.

---

# ## **1. Encapsulation**

### **Meaning:**

Wrapping related data and functions into a single unit (object or class). It also hides internal details.

### **Real-Life Example:**

A **TV remote** → you press a button, but you don’t know the internal circuit.

### **Why Encapsulation?**

* Protects data
* Prevents unwanted modification
* Makes code clean & maintainable

### **JavaScript Example:**

```js
class BankAccount {
  #balance = 0; // private property

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const user = new BankAccount();
user.deposit(500);
console.log(user.getBalance()); // 500
console.log(user.balance); // ❌ undefined (protected)
```

---

# ## **2. Abstraction**

### **Meaning:**

Showing **only necessary information** and hiding complex details.

### **Real-Life Example:**

Driving a **car** → you know the steering & pedals, but engine mechanics are hidden.

### **Why Abstraction?**

* Reduces complexity
* Improves readability
* Makes systems modular

### **JavaScript Example:**

```js
class CoffeeMachine {
  start() {
    this._heatWater();
    this._grindBeans();
    console.log("Coffee ready!");
  }

  _heatWater() { console.log("Heating water..."); }
  _grindBeans() { console.log("Grinding beans..."); }
}

const cm = new CoffeeMachine();
cm.start();
// Internal methods hidden from user
```

---

# ## **3. Inheritance**

### **Meaning:**

One class can **inherit** properties and methods from another class.

### **Real-Life Example:**

A **child** inherits characteristics from parents.

### **Why Inheritance?**

* Reduces code duplication
* Enables reusability
* Creates hierarchical structure

### **JavaScript Example:**

```js
class User {
  login() {
    console.log("User logged in");
  }
}

class Admin extends User {
  deleteUser() {
    console.log("User deleted");
  }
}

const a = new Admin();
a.login(); // from parent class
a.deleteUser();
```

---

# ## **4. Polymorphism**

### **Meaning:**

Same method name but different behavior.
("Poly" = many, "Morphism" = forms)

### **Real-Life Example:**

A **smartphone camera button**:

* short press = take photo
* long press = record video

### **Why Polymorphism?**

* Flexibility
* Cleaner code
* Easy to extend features

### **JavaScript Example (Method Overriding):**

```js
class Animal {
  speak() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  speak() { // overriding
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak(); // Dog barks
```

### **Polymorphism in Action (Array of Objects):**

```js
const animals = [new Animal(), new Dog()];

animals.forEach(a => a.speak());
// Animal makes sound
// Dog barks
```

---

# ## **Summary Table**

| Pillar        | Meaning                          | Purpose     | Example                               |
| ------------- | -------------------------------- | ----------- | ------------------------------------- |
| Encapsulation | Protect data                     | Security    | Private fields (#balance)             |
| Abstraction   | Hide complexity                  | Simplicity  | Only `start()` shown in CoffeeMachine |
| Inheritance   | Reuse code                       | Structure   | `Admin extends User`                  |
| Polymorphism  | Same method → different behavior | Flexibility | Overriding `speak()`                  |

---

# ## **Easy Memory Trick 💡**

**E-A-I-P** → “Every Apple Is Perfect”

* **E**ncapsulation
* **A**bstraction
* **I**nheritance
* **P**olymorphism

---

If you want diagrams, real project examples, or interview questions, tell me! 😊
