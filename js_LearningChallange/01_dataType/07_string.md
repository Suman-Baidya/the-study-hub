# JavaScript String Type — Full Explanation

Strings in JavaScript are one of the most commonly used **data types**, representing sequences of characters enclosed within quotes.

---

## 🧩 1. Definition

A **String** in JavaScript is a sequence of **Unicode characters** used to represent text. Strings are **immutable**, meaning once a string is created, it cannot be changed — any modification creates a new string.

### **Syntax:**

```js
let str1 = "Hello World";      // Double quotes
let str2 = 'JavaScript';        // Single quotes
let str3 = `Template String`;   // Backticks (template literal)
```

---

## 🧱 2. String Characteristics

| Property            | Description                                      |
| ------------------- | ------------------------------------------------ |
| **Type**            | Primitive data type                              |
| **Immutability**    | Cannot be modified after creation                |
| **Index-based**     | Characters can be accessed via index (0-based)   |
| **Unicode support** | Supports special characters, emojis, and symbols |
| **Wrapper Object**  | `String` object provides methods and properties  |

**Example:**

```js
let text = "Hello";
console.log(text[0]); // H
console.log(text.length); // 5
```

---

## 🧮 3. Creating Strings

### **Literal Method:**

```js
let name = 'Suman';
```

### **Using String Constructor:**

```js
let name = new String('Suman'); // Object type (not recommended)
```

**Note:** Prefer **string literals** for performance and simplicity.

---

## 📏 4. String Properties

| Property   | Description                              | Example                |
| ---------- | ---------------------------------------- | ---------------------- |
| **length** | Returns number of characters in a string | `'Hello'.length` → `5` |

---

## 🧰 5. Common String Methods

JavaScript provides numerous built-in string methods for manipulation, searching, and formatting.

### **1. charAt(index)**

Returns character at specified position.

```js
'Hello'.charAt(1); // 'e'
```

### **2. charCodeAt(index)**

Returns Unicode value of character.

```js
'ABC'.charCodeAt(0); // 65
```

### **3. concat(string1, string2, ...)**

Concatenates strings together.

```js
'Hello'.concat(' ', 'World'); // 'Hello World'
```

### **4. includes(substring)**

Checks if substring exists.

```js
'JavaScript'.includes('Script'); // true
```

### **5. indexOf(substring)**

Returns first index of substring.

```js
'banana'.indexOf('a'); // 1
```

### **6. lastIndexOf(substring)**

Returns last index of substring.

```js
'banana'.lastIndexOf('a'); // 5
```

### **7. startsWith(substring)**

Checks if string starts with a given substring.

```js
'Hello World'.startsWith('Hello'); // true
```

### **8. endsWith(substring)**

Checks if string ends with a given substring.

```js
'Hello World'.endsWith('World'); // true
```

### **9. slice(start, end)**

Extracts part of a string.

```js
'Hello World'.slice(0, 5); // 'Hello'
```

### **10. substring(start, end)**

Similar to `slice()`, but does not accept negative indexes.

```js
'Hello'.substring(1, 4); // 'ell'
```

### **11. substr(start, length)** *(Deprecated)*

Extracts part of string by length.

```js
'Hello'.substr(1, 3); // 'ell'
```

### **12. toUpperCase() / toLowerCase()**

Converts to upper/lower case.

```js
'abc'.toUpperCase(); // 'ABC'
'XYZ'.toLowerCase(); // 'xyz'
```

### **13. trim(), trimStart(), trimEnd()**

Removes whitespace.

```js
'  Hello  '.trim(); // 'Hello'
```

### **14. repeat(count)**

Repeats string `count` times.

```js
'Hi'.repeat(3); // 'HiHiHi'
```

### **15. replace(old, new)**

Replaces a substring with another.

```js
'Hello World'.replace('World', 'JavaScript'); // 'Hello JavaScript'
```

### **16. replaceAll(old, new)**

Replaces all occurrences.

```js
'apple apple'.replaceAll('apple', 'banana'); // 'banana banana'
```

### **17. split(separator)**

Splits string into array.

```js
'a,b,c'.split(','); // ['a', 'b', 'c']
```

### **18. match(regex)**

Returns array matching regex pattern.

```js
'abc123'.match(/\d+/); // ['123']
```

### **19. search(regex)**

Returns index of regex match.

```js
'abc123'.search(/\d/); // 3
```

### **20. padStart(targetLength, padString)**

Pads string at start.

```js
'5'.padStart(3, '0'); // '005'
```

### **21. padEnd(targetLength, padString)**

Pads string at end.

```js
'5'.padEnd(3, '0'); // '500'
```

### **22. toString()**

Converts object to string.

```js
(123).toString(); // '123'
```

### **23. valueOf()**

Returns primitive value of String object.

```js
new String('Hello').valueOf(); // 'Hello'
```

---

## 🧩 6. Template Literals (ES6 Feature)

Introduced in **ES6**, template literals allow string interpolation and multiline strings using **backticks (`)**.

**Example:**

```js
let name = 'Suman';
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
```

**Multiline Example:**

```js
let text = `This is
multiple line
string.`;
```

---

## 🔄 7. String Comparison

JavaScript compares strings **lexicographically** (based on Unicode value).

**Example:**

```js
console.log('a' < 'b'); // true
console.log('apple' > 'app'); // true
```

---

## ⚙️ 8. String Conversion

### **To String:**

```js
String(123); // '123'
(456).toString(); // '456'
```

### **To Number:**

```js
Number('123'); // 123
parseInt('50px'); // 50
```

---

## 🧠 9. Immutability Explained

Strings are immutable — methods like `replace()` or `toUpperCase()` return **new strings**, without changing the original.

**Example:**

```js
let text = 'Hello';
text.toUpperCase();
console.log(text); // 'Hello' (unchanged)
```

---

## 🧮 10. String Object vs Primitive

| Type                 | Creation                      | Typeof Result |
| -------------------- | ----------------------------- | ------------- |
| **Primitive String** | `let s = 'Hello'`             | `string`      |
| **String Object**    | `let s = new String('Hello')` | `object`      |

**Example:**

```js
let s1 = 'Hello';
let s2 = new String('Hello');
console.log(typeof s1); // 'string'
console.log(typeof s2); // 'object'
```

---

## 📘 11. Key Takeaways

* Strings are **immutable**, **index-based**, and **Unicode-supported**.
* Use **template literals** for modern string manipulation.
* Avoid using the `new String()` constructor.
* Use string methods for manipulation instead of modifying directly.

---

### ✅ Best Practice

> Always use string literals (`'text'` or `"text"`), prefer **template literals** for dynamic values, and remember that strings are **immutable** in JavaScript.

---

**Author:** Suman Baidya
**Topic:** JavaScript String Type — Full Explanation and Methods
