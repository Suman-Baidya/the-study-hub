
# JavaScript Events – Full Notes

## 📌 Introduction to JavaScript Events

JavaScript **events** are actions or occurrences that happen in the browser, which the JavaScript code can respond to. These actions may be triggered by the user (like clicking or typing), by the browser (like page load), or by the system (like network status changes).

Events allow developers to make websites **interactive, dynamic, and user-friendly**.

---

## ⭐ Why Events Are Used

* To respond to user actions (clicks, typing, hovering).
* To validate forms.
* To create interactive UI (dropdown, modal, sliders).
* To track user behavior.
* To update content dynamically without reloading the page.

---

## 📌 Types of JavaScript Events

Here are the most important and commonly used events with examples.

---

# 1️⃣ Mouse Events

| Event         | Description                               |
| ------------- | ----------------------------------------- |
| `onclick`     | Triggered when the user clicks an element |
| `ondblclick`  | Double-click event                        |
| `onmouseover` | When the mouse moves over an element      |
| `onmouseout`  | When the mouse leaves an element          |
| `onmousedown` | When a mouse button is pressed            |
| `onmouseup`   | When the mouse button is released         |

### ✔ Example

```html
<button onclick="changeText()">Click Me</button>
<p id="demo"></p>

<script>
function changeText() {
  document.getElementById("demo").innerText = "Button Clicked!";
}
</script>
```

---

# 2️⃣ Keyboard Events

| Event        | Description                              |
| ------------ | ---------------------------------------- |
| `onkeydown`  | Key pressed down                         |
| `onkeyup`    | Key released                             |
| `onkeypress` | Key pressed (deprecated but still found) |

### ✔ Example

```html
<input type="text" onkeydown="keyPressed()" />
<p id="show"></p>

<script>
function keyPressed() {
  document.getElementById("show").innerText = "You pressed a key!";
}
</script>
```

---

# 3️⃣ Form Events

| Event      | Description              |
| ---------- | ------------------------ |
| `onsubmit` | When form is submitted   |
| `onchange` | When input value changes |
| `onfocus`  | Input gets focus         |
| `onblur`   | Input loses focus        |

### ✔ Example

```html
<input type="text" onchange="alert('Value changed!')" />
```

### Form Submit Example

```html
<form onsubmit="return submitForm()">
  <input type="text" />
  <button type="submit">Submit</button>
</form>

<script>
function submitForm() {
  alert("Form Submitted!");
  return false; // prevent page reload
}
</script>
```

---

# 4️⃣ Window Events

| Event      | Description                |
| ---------- | -------------------------- |
| `onload`   | When page finishes loading |
| `onresize` | When window size changes   |
| `onscroll` | When user scrolls          |

### ✔ Example (Page Loaded)

```html
<body onload="welcome()">
<script>
function welcome() {
  alert("Page Loaded Successfully");
}
</script>
</body>
```

---

# 5️⃣ Input & Clipboard Events

| Event     | Description            |
| --------- | ---------------------- |
| `oninput` | Every time user types  |
| `onpaste` | When content is pasted |
| `oncopy`  | When content is copied |
| `oncut`   | When content is cut    |

### ✔ Example

```html
<input oninput="display(this.value)" />
<p id="out"></p>

<script>
function display(val) {
  document.getElementById('out').innerText = val;
}
</script>
```

---

# 6️⃣ Touch Events (Mobile)

| Event          | Description  |
| -------------- | ------------ |
| `ontouchstart` | Touch begins |
| `ontouchend`   | Touch ends   |
| `ontouchmove`  | Finger moves |

### ✔ Example

```html
<div ontouchstart="alert('Touched!')">Touch Here</div>
```

---

# 7️⃣ Event Listeners (Best Practice)

Instead of using inline events (`onclick="..."`), we use **addEventListener()**.

## ✔ Syntax

```js
element.addEventListener(event, function);
```

### ✔ Example

```html
<button id="btn">Click Here</button>
<p id="msg"></p>

<script>
document.getElementById('btn').addEventListener('click', function() {
  document.getElementById('msg').innerText = 'Clicked using addEventListener()';
});
</script>
```

### ⭐ Advantages of addEventListener()

* Cleaner code
* Can attach multiple events to a single element
* Supports modern event types

---

# 8️⃣ Event Bubbling & Capturing

There are two ways an event flows:

### 1. **Event Bubbling** (Default)

Inner → Outer (Child → Parent)

### 2. **Event Capturing**

Outer → Inner (Parent → Child)

### ✔ Example

```js
element.addEventListener('click', fn, true);  // capturing

element.addEventListener('click', fn, false); // bubbling
```

---

# 9️⃣ Preventing Default Action

Some elements have default actions (links, forms).

### ✔ Example

```html
<a href="https://google.com" id="link">Open Google</a>

<script>
document.getElementById('link').addEventListener('click', function(event) {
  event.preventDefault(); // stop link
  alert('Default Prevented!');
});
</script>
```

---

# 🔟 Event Object (`event`)

`event` contains details about the event.

### ✔ Example

```js
document.addEventListener('click', function(e) {
  console.log(e.target); // which element was clicked
});
```

---

# 🎯 Final Summary

JavaScript events allow you to:

* Handle user actions
* Build interactive UI
* Control browser behavior
* Capture input & validate data
* Make dynamic websites

Events are the **heart of frontend interaction**, and mastering them is essential for becoming a great JavaScript or React developer.

---

If you want, I can also prepare:
✅ Event Flow diagrams
✅ Event Delegation notes
✅ Interview questions on JS events

Just tell me! 💡

## 📊 Event Flow Diagram

Below is a simplified diagram explaining how event flow works in JavaScript:

```
                ┌───────────────────────────┐
                │        Window              │
                └─────────────▲─────────────┘
                              │ (Capturing Phase)
                ┌─────────────┴─────────────┐
                │         Document           │
                └─────────────▲─────────────┘
                              │
                ┌─────────────┴─────────────┐
                │          <html>            │
                └─────────────▲─────────────┘
                              │
                ┌─────────────┴─────────────┐
                │          <body>            │
                └─────────────▲─────────────┘
                              │
                ┌─────────────┴─────────────┐
                │      Parent Element        │
                └─────────────▲─────────────┘
                              │
                ┌─────────────┴─────────────┐
                │      Target Element        │
                └─────────────┬─────────────┘
                              │ (Target Phase)
                ┌─────────────▼─────────────┐
                │      Parent Element        │
                └─────────────┬─────────────┘
                              │ (Bubbling Phase)
                ┌─────────────▼─────────────┐
                │          <body>            │
                └─────────────▼─────────────┘
                │          <html>            │
                └─────────────▼─────────────┘
                │         Document           │
                └─────────────▼─────────────┘
                         Window
```

### 🔎 Explanation

* **Capturing Phase:** Event travels *top → down* (Window → Document → HTML → Body → Parent → Target).
* **Target Phase:** Event reaches the element that triggered it.
* **Bubbling Phase:** Event travels *bottom → up* (Target → Parent → Body → HTML → Document → Window).

---

## 🧩 Event Flow Example (Capturing vs Bubbling)

```html
<div id="outer" style="padding:20px; background:lightblue;">
  Outer
  <div id="inner" style="padding:20px; background:lightgreen;">
    Inner
  </div>
</div>
```

```js
document.getElementById("outer").addEventListener("click", () => {
  console.log("Outer clicked - bubbling");
});

document.getElementById("inner").addEventListener("click", () => {
  console.log("Inner clicked - bubbling");
});

// Capturing phase
document.getElementById("outer").addEventListener(
  "click",
  () => {
    console.log("Outer clicked - capturing");
  },
  true // capturing enabled
);
```

### 📝 Output Order When Clicking `inner`

1. **Outer (capturing)**
2. **Inner (target)**
3. **Outer (bubbling)**

---

## 🎯 Why Event Flow Matters?

* Helps understand **event delegation**.
* Prevent unexpected behaviors in nested elements.
* Optimize performance by attaching fewer event listeners.
* Control UI interactions more precisely.

---
