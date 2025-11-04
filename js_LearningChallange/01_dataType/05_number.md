# JavaScript Number Type — Full Explanation

Numbers in JavaScript are a fundamental data type used to represent both **integer** and **floating-point** values. JavaScript uses a **64-bit IEEE 754** double-precision format to store all numbers, meaning there is **no separate type for integers** and **floats**.

---

## 🧩 1. Definition

A **Number** in JavaScript represents numeric data — including integers, decimals, and special numeric values like `Infinity`, `-Infinity`, and `NaN` (Not-a-Number).

### **Syntax:**

```js
let x = 10;          // Integer
let y = 10.5;        // Floating-point number
let z = 5e3;         // Exponential notation (5000)
let a = 0xff;        // Hexadecimal (255)
```

---

## ⚙️ 2. Number Characteristics

| Property           | Description                      |
| ------------------ | -------------------------------- |
| **Type**           | Primitive data type              |
| **Format**         | 64-bit floating-point (IEEE 754) |
| **Range**          | ±(2^53 − 1) for integers         |
| **Precision**      | Up to 17 decimal places          |
| **Special Values** | `NaN`, `Infinity`, `-Infinity`   |

---

## 🧮 3. Creating Numbers

### **Number Literals (Preferred):**

```js
let a = 25;
let b = 3.14;
```

### **Using Number Constructor:**

```js
let c = new Number(25); // Object type (not recommended)
```

**Note:** Always use literals. The `new Number()` syntax creates an object, not a primitive value.

---

## 📏 4. Number Properties

| Property                     | Description                          | Example                    |
| ---------------------------- | ------------------------------------ | -------------------------- |
| **Number.MAX_VALUE**         | Largest possible number (~1.79e+308) | `Number.MAX_VALUE`         |
| **Number.MIN_VALUE**         | Smallest positive number (~5e−324)   | `Number.MIN_VALUE`         |
| **Number.MAX_SAFE_INTEGER**  | Largest safe integer (2^53 − 1)      | `Number.MAX_SAFE_INTEGER`  |
| **Number.MIN_SAFE_INTEGER**  | Smallest safe integer (−2^53 + 1)    | `Number.MIN_SAFE_INTEGER`  |
| **Number.POSITIVE_INFINITY** | Positive infinity                    | `Number.POSITIVE_INFINITY` |
| **Number.NEGATIVE_INFINITY** | Negative infinity                    | `Number.NEGATIVE_INFINITY` |
| **Number.NaN**               | Not-a-Number                         | `Number.NaN`               |

---

## 🧰 5. Common Number Methods

JavaScript provides built-in methods in the `Number` object for conversions, checks, and formatting.

### **1. Number.isFinite(value)**

Checks if the value is finite.

```js
Number.isFinite(10);      // true
Number.isFinite(Infinity); // false
```

### **2. Number.isInteger(value)**

Checks if value is an integer.

```js
Number.isInteger(4);     // true
Number.isInteger(4.2);   // false
```

### **3. Number.isNaN(value)**

Checks if value is `NaN`.

```js
Number.isNaN(NaN);       // true
Number.isNaN('Hello');   // false
```

### **4. Number.isSafeInteger(value)**

Checks if number is a safe integer (within ±(2^53 − 1)).

```js
Number.isSafeInteger(9007199254740991); // true
```

### **5. Number.parseInt(string, radix)**

Converts a string to an integer.

```js
Number.parseInt('100'); // 100
Number.parseInt('10px'); // 10
```

### **6. Number.parseFloat(string)**

Converts a string to a floating-point number.

```js
Number.parseFloat('10.5'); // 10.5
```

### **7. toFixed(digits)**

Rounds number to fixed decimal places (returns string).

```js
let x = 3.14159;
x.toFixed(2); // '3.14'
```

### **8. toPrecision(digits)**

Formats number to specific total digits.

```js
let x = 123.456;
x.toPrecision(4); // '123.5'
```

### **9. toExponential(digits)**

Converts number to exponential notation.

```js
let x = 1234;
x.toExponential(2); // '1.23e+3'
```

### **10. toString(base)**

Converts number to string in specified base.

```js
let num = 255;
num.toString(16); // 'ff'
num.toString(2);  // '11111111'
```

### **11. valueOf()**

Returns primitive value of a `Number` object.

```js
let n = new Number(100);
n.valueOf(); // 100
```

---

## 🧩 6. Special Numeric Values

### **NaN (Not-a-Number)**

Represents invalid or undefined numeric result.

```js
console.log(0 / 0); // NaN
console.log(parseInt('abc')); // NaN
```

### **Infinity and -Infinity**

Represents numbers beyond the floating-point range.

```js
console.log(1 / 0);  // Infinity
console.log(-1 / 0); // -Infinity
```

### **isNaN() Function**

Checks if a value is NaN.

```js
isNaN('abc'); // true
```

---

## 🧮 7. Math Object Methods (Commonly Used with Numbers)

The `Math` object provides mathematical constants and methods for number operations.

| Method                  | Description               | Example                   |
| ----------------------- | ------------------------- | ------------------------- |
| **Math.abs(x)**         | Returns absolute value    | `Math.abs(-5)` → `5`      |
| **Math.ceil(x)**        | Rounds up                 | `Math.ceil(4.3)` → `5`    |
| **Math.floor(x)**       | Rounds down               | `Math.floor(4.9)` → `4`   |
| **Math.round(x)**       | Rounds to nearest integer | `Math.round(4.6)` → `5`   |
| **Math.trunc(x)**       | Removes fractional part   | `Math.trunc(4.9)` → `4`   |
| **Math.pow(x, y)**      | x to the power y          | `Math.pow(2, 3)` → `8`    |
| **Math.sqrt(x)**        | Square root               | `Math.sqrt(9)` → `3`      |
| **Math.random()**       | Random number (0 to <1)   | `Math.random()`           |
| **Math.max(a, b, ...)** | Returns largest           | `Math.max(2, 5, 7)` → `7` |
| **Math.min(a, b, ...)** | Returns smallest          | `Math.min(2, 5, 7)` → `2` |
| **Math.sign(x)**        | Returns sign of number    | `Math.sign(-3)` → `-1`    |

---

## 🔄 8. Type Conversion

### **To Number:**

```js
Number('10'); // 10
parseInt('10.5'); // 10
parseFloat('10.5'); // 10.5
```

### **To String:**

```js
(10).toString(); // '10'
String(10);      // '10'
```

### **To Boolean:**

```js
Boolean(0);   // false
Boolean(123); // true
```

---

## ⚖️ 9. Number Precision & Floating-Point Issues

Due to IEEE 754 format, floating-point arithmetic can produce rounding errors.

**Example:**

```js
0.1 + 0.2 === 0.3; // false
console.log(0.1 + 0.2); // 0.30000000000000004
```

**Solution:** Use `toFixed()` or rounding techniques.

```js
+(0.1 + 0.2).toFixed(2); // 0.3
```

---

## 🧠 10. Number Object vs Primitive

| Type                 | Creation                 | typeof Result |
| -------------------- | ------------------------ | ------------- |
| **Primitive Number** | `let x = 10`             | `number`      |
| **Number Object**    | `let y = new Number(10)` | `object`      |

---

## 📘 11. Key Takeaways

* JavaScript stores all numbers as **64-bit floating point**.
* Always use **literals**, not `new Number()`.
* Be aware of **floating-point precision issues**.
* Use `Number.isFinite()`, `Number.isNaN()` for checks.
* Use **`Math` methods** for mathematical operations.

---

### ✅ Best Practice

> Prefer **Number literals** for simplicity, handle **NaN and Infinity** safely, and use `Math` and `Number` utilities for numerical operations.

---

**Author:** Suman Baidya
**Topic:** JavaScript Number Type — Full Explanation and Methods
