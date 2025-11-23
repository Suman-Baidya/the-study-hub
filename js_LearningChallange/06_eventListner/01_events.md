# 🎉 JavaScript Events — Full Notes & Examples

JavaScript **events** allow you to detect and respond to actions that happen in the browser. These actions can be triggered by the user (click, keypress), the browser (page load), or even JavaScript code.

This document covers **all important JavaScript events**, their **uses**, **types**, **example codes**, and best practices.

---

# 📘 1. What Are JavaScript Events?

Events are **signals** that something has happened in the browser.
Examples:

* A button is clicked.
* The mouse moves.
* A key is pressed.
* The page has fully loaded.
* A form is submitted.

JavaScript listens for these events and runs functions called **event handlers**.

---

# ⭐ 2. How to Use Events in JavaScript

There are **3 ways** to attach events:

### ✔ Method 1: Inline Event Handling (Not Recommended)

```html
<button onclick="alert('Clicked!')">Click Me</button>
```

### ✔ Method 2: DOM Property

```js
const btn = document.getElementById('btn');
btn.onclick = function() {
  console.log("Button clicked!");
};
```

### ✔ Method 3: `addEventListener()` (Best Practice)

```js
btn.addEventListener("click", () => {
  console.log("Clicked using addEventListener!");
});
```

---

# 🔥 3. Types of JavaScript Events

JavaScript events can be grouped into categories:

1. **Mouse Events**
2. **Keyboard Events**
3. **Form Events**
4. **Window Events**
5. **Clipboard Events**
6. **Touch Events**
7. **Input Events**
8. **Document Events**

Let’s explore each with examples.

---

# 🐭 4. Mouse Events

| Event       | Description                   |
| ----------- | ----------------------------- |
| `click`     | Fires on a mouse click        |
| `dblclick`  | Double-click                  |
| `mousedown` | Mouse button pressed          |
| `mouseup`   | Mouse button released         |
| `mouseover` | Mouse enters an element       |
| `mouseout`  | Mouse leaves an element       |
| `mousemove` | Mouse moves inside an element |

### ✔ Example: Handling Click

```html
<button id="btn">Click</button>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    alert("Button clicked!");
  });
</script>
```

### ✔ Example: Mouse Hover

```js
document.getElementById("box").addEventListener("mouseover", () => {
  console.log("Mouse entered box");
});
```

---

# 🎹 5. Keyboard Events

| Event      | Description                    |
| ---------- | ------------------------------ |
| `keydown`  | Key pressed (fires repeatedly) |
| `keyup`    | Key released                   |
| `keypress` | Deprecated, use `keydown`      |

### ✔ Example: Detect Key Press

```js
window.addEventListener("keydown", function(e) {
  console.log("Key pressed: " + e.key);
});
```

---

# 📝 6. Form Events

| Event    | Description                 |
| -------- | --------------------------- |
| `submit` | Form submission             |
| `change` | Value changed               |
| `input`  | Value changing continuously |
| `focus`  | Element focused             |
| `blur`   | Element loses focus         |

### ✔ Example: Prevent Form Submission

```html
<form id="myform">
  <input type="text" />
  <button>Submit</button>
</form>

<script>
  document.getElementById("myform").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submission stopped");
  });
</script>
```

---

# 🌍 7. Window Events

| Event    | Description       |
| -------- | ----------------- |
| `load`   | Page fully loaded |
| `scroll` | User scrolls      |
| `resize` | Window resized    |

### ✔ Example: Page Loaded

```js
window.addEventListener("load", () => {
  console.log("Page fully loaded!");
});
```

### ✔ Example: Scroll Event

```js
window.addEventListener("scroll", () => {
  console.log("Scrolling...");
});
```

---

# 📋 8. Clipboard Events

| Event   | Description    |
| ------- | -------------- |
| `copy`  | Content copied |
| `cut`   | Content cut    |
| `paste` | Content pasted |

### ✔ Example

```js
document.addEventListener("copy", () => {
  alert("You copied something!");
});
```

---

# 📱 9. Touch Events (Mobile)

| Event        | Description            |
| ------------ | ---------------------- |
| `touchstart` | User touches screen    |
| `touchend`   | Finger leaves screen   |
| `touchmove`  | Finger moves on screen |

### ✔ Example

```js
document.addEventListener("touchstart", () => {
  console.log("Screen touched");
});
```

---

# ✏️ 10. Input Events

| Event   | Description     |
| ------- | --------------- |
| `input` | Fires on typing |

### ✔ Example

```js
document.getElementById("txt").addEventListener("input", () => {
  console.log("Typed something");
});
```

---

# 📄 11. Document Events

| Event              | Description            |
| ------------------ | ---------------------- |
| `DOMContentLoaded` | HTML parsed completely |

### ✔ Example

```js
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready");
});
```

---

# 🔥 12. Event Object (`event` or `e`)

Every event handler receives a useful object.

### ✔ Example

```js
document.addEventListener("click", function(e) {
  console.log(e.type);     // event type
  console.log(e.target);   // clicked element
});
```

---

# 🎯 13. Event Bubbling & Capturing

Two phases:

1. **Capturing phase** (top to bottom)
2. **Bubbling phase** (bottom to top — default)

### ✔ Example Using Capture

```js
div.addEventListener("click", handler, true); // capturing mode
```

---

# 📌 14. Event Delegation (Very Important)

Attach one event to a **parent**, not all child elements.

### ✔ Example: Click on any list item

```js
document.getElementById("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked: " + e.target.textContent);
  }
});
```

✔ More efficient
✔ Great for dynamic content

---

# ⚠️ 15. Common Mistakes to Avoid

❌ Using inline events
✔ Use `addEventListener()`

❌ Overwriting events using `.onclick`
✔ `addEventListener()` supports multiple handlers

❌ Not removing event listeners
✔ Use `removeEventListener()` to prevent memory leaks

---

# 📌 16. Summary Table of Events

| Category  | Examples                   |
| --------- | -------------------------- |
| Mouse     | click, dblclick, mouseover |
| Keyboard  | keydown, keyup             |
| Form      | submit, change, input      |
| Window    | load, resize, scroll       |
| Touch     | touchstart, touchend       |
| Clipboard | copy, paste                |
| Document  | DOMContentLoaded           |

---


### 🖊️ Author: **Suman Baidya**
