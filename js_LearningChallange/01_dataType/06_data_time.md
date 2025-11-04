# JavaScript Date Type — Full Explanation

The **Date** object in JavaScript is used to represent and manipulate **dates and times**. It provides powerful methods for creating, formatting, and performing operations on dates.

---

## 🧩 1. Definition

The `Date` object is a **built-in JavaScript object** that stores date and time information. It internally represents time as the **number of milliseconds since January 1, 1970 (UTC)**, known as the **Unix Epoch**.

### **Syntax:**

```js
let date = new Date();
```

This creates a Date object representing the current date and time.

---

## 🧱 2. Creating Date Objects

JavaScript provides multiple ways to create `Date` instances.

### **1. Current Date and Time**

```js
let now = new Date();
console.log(now);
```

### **2. Specific Date and Time**

```js
let d = new Date('2025-10-31T17:00:00');
```

### **3. Using Individual Parameters**

```js
let d = new Date(year, month, day, hour, minute, second, millisecond);
let date = new Date(2025, 9, 31, 17, 30, 0); // Month is 0-based (9 = October)
```

### **4. Using Milliseconds (Unix Timestamp)**

```js
let d = new Date(0); // Jan 1, 1970 UTC
```

---

## 🧭 3. Date Methods — Getting Components

| Method                  | Description                         | Example                        |
| ----------------------- | ----------------------------------- | ------------------------------ |
| **getFullYear()**       | Returns 4-digit year                | `d.getFullYear()` → `2025`     |
| **getMonth()**          | Returns month (0–11)                | `d.getMonth()` → `9` (October) |
| **getDate()**           | Returns day of month (1–31)         | `d.getDate()` → `31`           |
| **getDay()**            | Returns day of week (0–6, Sunday=0) | `d.getDay()` → `5` (Friday)    |
| **getHours()**          | Returns hour (0–23)                 | `d.getHours()` → `17`          |
| **getMinutes()**        | Returns minutes (0–59)              | `d.getMinutes()`               |
| **getSeconds()**        | Returns seconds (0–59)              | `d.getSeconds()`               |
| **getMilliseconds()**   | Returns milliseconds (0–999)        | `d.getMilliseconds()`          |
| **getTime()**           | Returns milliseconds since 1970     | `d.getTime()`                  |
| **getTimezoneOffset()** | Returns timezone offset in minutes  | `d.getTimezoneOffset()`        |

---

## ⏱️ 4. Date Methods — Setting Components

| Method                    | Description                       |
| ------------------------- | --------------------------------- |
| **setFullYear(year)**     | Sets the year                     |
| **setMonth(month)**       | Sets the month (0–11)             |
| **setDate(day)**          | Sets day of the month             |
| **setHours(hour)**        | Sets hour                         |
| **setMinutes(minute)**    | Sets minutes                      |
| **setSeconds(second)**    | Sets seconds                      |
| **setMilliseconds(ms)**   | Sets milliseconds                 |
| **setTime(milliseconds)** | Sets full date using milliseconds |

**Example:**

```js
let d = new Date();
d.setFullYear(2030);
d.setMonth(11); // December
d.setDate(25);
```

---

## 📅 5. Date Formatting Methods

| Method                   | Description                        | Example                                              |
| ------------------------ | ---------------------------------- | ---------------------------------------------------- |
| **toString()**           | Returns full string representation | `d.toString()` → `Fri Oct 31 2025 17:30:00 GMT+0530` |
| **toDateString()**       | Returns date only                  | `d.toDateString()` → `Fri Oct 31 2025`               |
| **toTimeString()**       | Returns time only                  | `d.toTimeString()` → `17:30:00 GMT+0530`             |
| **toISOString()**        | Returns ISO format string          | `d.toISOString()` → `2025-10-31T12:00:00.000Z`       |
| **toLocaleDateString()** | Returns localized date string      | `d.toLocaleDateString()` → `10/31/2025`              |
| **toLocaleTimeString()** | Returns localized time string      | `d.toLocaleTimeString()`                             |
| **toUTCString()**        | Returns UTC string                 | `d.toUTCString()` → `Fri, 31 Oct 2025 12:00:00 GMT`  |

---

## ⏰ 6. Working with Time & Differences

### **1. Getting Timestamps**

```js
Date.now(); // Current time in milliseconds since 1970
```

### **2. Finding Time Difference (in ms)**

```js
let start = new Date('2025-01-01');
let end = new Date('2025-12-31');
let diff = end - start;
console.log(diff / (1000 * 60 * 60 * 24)); // Convert ms to days
```

### **3. Comparing Dates**

```js
let d1 = new Date('2025-10-31');
let d2 = new Date('2025-11-01');
console.log(d1 < d2); // true
```

---

## 🔄 7. Converting Between Formats

### **To String:**

```js
let date = new Date();
date.toString();
```

### **To Number (timestamp):**

```js
+new Date(); // or date.getTime();
```

### **To ISO format:**

```js
new Date().toISOString(); // '2025-10-31T12:00:00.000Z'
```

---

## 🧮 8. Date Parsing

You can create a date from a string using the constructor.

```js
new Date('2025-10-31'); // ISO format
new Date('October 31, 2025 17:00:00'); // Long format
```

**Note:** Prefer ISO format (`YYYY-MM-DDTHH:mm:ssZ`) for reliability across browsers.

---

## ⚙️ 9. UTC Methods

For handling dates in **Coordinated Universal Time (UTC)**, JavaScript provides UTC equivalents.

| Local Method    | UTC Equivalent     |
| --------------- | ------------------ |
| `getFullYear()` | `getUTCFullYear()` |
| `getMonth()`    | `getUTCMonth()`    |
| `getDate()`     | `getUTCDate()`     |
| `getHours()`    | `getUTCHours()`    |
| `getMinutes()`  | `getUTCMinutes()`  |
| `getSeconds()`  | `getUTCSeconds()`  |

**Example:**

```js
let d = new Date();
console.log(d.getUTCFullYear());
```

---

## 📆 10. Static Methods of Date

| Method                         | Description                      | Example                    |
| ------------------------------ | -------------------------------- | -------------------------- |
| **Date.now()**                 | Returns current timestamp        | `Date.now()`               |
| **Date.parse(dateString)**     | Parses a date string → timestamp | `Date.parse('2025-10-31')` |
| **Date.UTC(year, month, ...)** | Returns timestamp for UTC date   | `Date.UTC(2025, 9, 31)`    |

---

## ⚖️ 11. Time Zones & Offsets

* JavaScript `Date` always stores time in **UTC** internally.
* Methods like `toString()` display local time according to the system timezone.

**Example:**

```js
let d = new Date();
console.log(d.toUTCString()); // UTC
console.log(d.toString()); // Local time
```

---

## 🧠 12. Common Date Operations

### **Add Days to Date:**

```js
let d = new Date();
d.setDate(d.getDate() + 5);
```

### **Subtract Days from Date:**

```js
d.setDate(d.getDate() - 10);
```

### **Find Difference Between Two Dates (in Days):**

```js
let diff = (d2 - d1) / (1000 * 60 * 60 * 24);
```

---

## 🧩 13. Date Object vs Primitive

| Type          | Example      | typeof Result |
| ------------- | ------------ | ------------- |
| **Primitive** | `Date.now()` | `number`      |
| **Object**    | `new Date()` | `object`      |

---

## ⚙️ 14. Common Issues & Tips

* Months are **zero-indexed** (January = 0, December = 11).
* Use **UTC methods** when working with global applications.
* Avoid manual date string parsing — use ISO format.
* For advanced date handling, consider libraries like **Day.js** or **Luxon**.

---

## 📘 15. Key Takeaways

* `Date` represents both **date and time** values.
* Internally stored as **milliseconds since Jan 1, 1970 (UTC)**.
* Provides methods for **getting, setting, comparing, and formatting** dates.
* Be aware of **timezone differences** and **zero-based months**.

---

### ✅ Best Practice

> Always use **ISO date format**, **UTC methods** for global consistency, and built-in Date methods for calculations.

---

**Author:** Suman Baidya
**Topic:** JavaScript Date Type — Full Explanation and Methods
