# 🧠 JavaScript DOM (Document Object Model) — Full Notes

## 📘 Introduction

The **Document Object Model (DOM)** is a **programming interface** for web documents. It represents the structure of an HTML or XML document as a **tree of objects**, allowing developers to **interact, manipulate, and modify** the content, structure, and style of a webpage dynamically using JavaScript.

---

## 🌳 What is the DOM?

When a browser loads a webpage:

1. It reads the **HTML** file.
2. Parses it into a **tree structure**.
3. Each element, attribute, and text node becomes a **DOM node**.
4. JavaScript can then use the **DOM API** to interact with these nodes.

---

## 🧩 DOM Tree Structure (Diagram)

```
Document
│
└── <html>
    ├── <head>
    │   └── <title>DOM Example</title>
    │
    └── <body>
        ├── <h1>Hello DOM</h1>
        ├── <p>This is a paragraph.</p>
        └── <div>
            ├── <ul>
            │   ├── <li>Item 1</li>
            │   └── <li>Item 2</li>
            └── </ul>
```

Each tag (like `<html>`, `<body>`, `<p>`) becomes a **node** in the DOM tree.

---

## ⚙️ DOM Components

| Component      | Description                                           |
| -------------- | ----------------------------------------------------- |
| **Document**   | Root of the DOM tree; represents the entire page.     |
| **Elements**   | Represent HTML tags (`<div>`, `<p>`, etc.).           |
| **Attributes** | Represent tag properties (`id`, `class`, etc.).       |
| **Text Nodes** | Contain actual text inside elements.                  |
| **Comments**   | Represent comment nodes in HTML (`<!-- comment -->`). |

---

## 🧠 Accessing DOM Elements

### 1️⃣ By ID

```js
const heading = document.getElementById("title");
```

### 2️⃣ By Class

```js
const items = document.getElementsByClassName("item");
```

### 3️⃣ By Tag Name

```js
const paragraphs = document.getElementsByTagName("p");
```

### 4️⃣ Using `querySelector`

```js
const firstDiv = document.querySelector("div");
const allDivs = document.querySelectorAll("div");
```

---

## 🧰 Manipulating DOM Elements

### Changing Text or HTML

```js
document.getElementById("title").innerText = "New Title";
document.getElementById("content").innerHTML = "<b>Bold Content</b>";
```

### Changing CSS

```js
document.querySelector("p").style.color = "blue";
document.querySelector("p").style.fontSize = "20px";
```

### Adding or Removing Elements

```js
const div = document.createElement("div");
div.textContent = "Hello World!";
document.body.appendChild(div);

document.body.removeChild(div);
```

---

## 🔁 Traversing the DOM

| Property                         | Description                        |
| -------------------------------- | ---------------------------------- |
| `parentNode`                     | Accesses the parent of an element. |
| `childNodes`                     | Returns a NodeList of child nodes. |
| `firstChild`, `lastChild`        | Access first or last child.        |
| `nextSibling`, `previousSibling` | Navigate between siblings.         |

### Example:

```js
const parent = document.querySelector("ul").parentNode;
console.log(parent.tagName); // DIV
```

---

## 🎯 DOM Events

The DOM supports **event-driven programming**, meaning you can respond to user actions (clicks, input, scroll, etc.).

### Example

```js
const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  alert("Button clicked!");
});
```

### Common Events

| Event       | Description                           |
| ----------- | ------------------------------------- |
| `click`     | Triggered when an element is clicked. |
| `mouseover` | Triggered when mouse hovers.          |
| `keydown`   | When a key is pressed.                |
| `load`      | When the page finishes loading.       |
| `submit`    | When a form is submitted.             |

---

## 🧩 DOM vs HTML

| Feature        | HTML                      | DOM                    |
| -------------- | ------------------------- | ---------------------- |
| Nature         | Static document           | Dynamic object model   |
| Representation | Text-based markup         | Object tree            |
| Modification   | Cannot change dynamically | Can be updated with JS |
| Access         | Only file editing         | Through JS API         |

---

## ⚡ Example: DOM Manipulation

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Example</title>
</head>
<body>
  <h1 id="heading">Old Heading</h1>
  <button id="changeBtn">Change Heading</button>

  <script>
    document.getElementById("changeBtn").addEventListener("click", () => {
      const h1 = document.getElementById("heading");
      h1.innerText = "Updated Heading!";
      h1.style.color = "green";
    });
  </script>
</body>
</html>
```

---

## 🧩 Chart Example — DOM Update Flow

```
User Action (Click)
      ↓
Event Listener (addEventListener)
      ↓
JavaScript Function Executes
      ↓
DOM API Updates Node Properties
      ↓
Browser Repaints → Visible Changes on Screen
```

---

## 🚀 Real-World Uses

* Dynamic UI updates (e.g., React, Vue work with Virtual DOMs).
* Form validation.
* Interactive animations.
* Creating, editing, or deleting elements.
* Reading or modifying attributes dynamically.

---

## ⚠️ Common Mistakes to Avoid

❌ Accessing elements before DOM loads
✅ Use `window.onload` or `DOMContentLoaded` event.

❌ Using `innerHTML` with user data (can cause XSS)
✅ Use `textContent` or DOM APIs.

❌ Manipulating DOM too often
✅ Use **Document Fragments** or **Virtual DOM** for performance.

---

## 🧾 Summary

* DOM = Object representation of HTML.
* Every element = Node in the DOM tree.
* Allows dynamic changes to content, style, and structure.
* DOM manipulation is the core of **interactive web development**.

---

**Author: Suman Baidya**
