# JavaScript Event Object Properties – Full Notes

This document explains all important **Event Object properties** in JavaScript with definitions, examples, tables, and use cases.

---

## 🎯 1. `type`

Specifies **which event** was triggered.

```js
document.addEventListener("click", (e) => {
  console.log(e.type); // "click"
});
```

---

## 🕒 2. `timeStamp`

Time (in milliseconds) when the event occurred.

```js
document.addEventListener("click", (e) => {
  console.log(e.timeStamp);
});
```

---

## ⛔ 3. `defaultPrevented`

Returns **true** if `e.preventDefault()` has been called.

```js
document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.defaultPrevented); // true
});
```

---

## 🎯 4. `target`

The exact element where the event originally happened.

```js
document.addEventListener("click", (e) => {
  console.log(e.target);
});
```

---

## 🔁 5. `toElement` (Old IE Only)

Target element the cursor moved **towards** in a `mouseover` event.
Deprecated → Use `relatedTarget`.

---

## 🏁 6. `srcElement` (Old IE)

Same as `target`. No longer used.

---

## 🔄 7. `currentTarget`

The element that the **event listener is attached to**.

```js
document.getElementById("box").addEventListener("click", (e) => {
  console.log(e.target);        // inner element clicked
  console.log(e.currentTarget); // #box element
});
```

---

## 🖱️ 8. Mouse Coordinates

### `clientX` & `clientY`

Mouse position relative to **viewport**.

### `screenX` & `screenY`

Mouse position relative to **device screen**.

```js
document.addEventListener("click", (e) => {
  console.log(e.clientX, e.clientY);
  console.log(e.screenX, e.screenY);
});
```

---

## 🎹 9. Modifier Keys

Used to detect if certain keys were pressed.

### `altKey` → Alt key pressed?

### `ctrlKey` → Ctrl key pressed?

### `shiftKey` → Shift key pressed?

```js
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "s") {
    console.log("Ctrl + S detected");
    e.preventDefault();
  }
});
```

---

## ⌨️ 10. `keyCode` (Deprecated)

Old numeric value for key pressed.
Modern replacement: **`e.key`** or **`e.code`**.

```js
document.addEventListener("keydown", (e) => {
  console.log(e.key);  // "a", "Enter", "Escape" etc.
});
```

---

## 📌 Summary Table

| Property                  | Description                       | Modern? |
| ------------------------- | --------------------------------- | ------- |
| `type`                    | Name of event                     | ✔️      |
| `timeStamp`               | When the event occurred           | ✔️      |
| `defaultPrevented`        | Whether preventDefault() was used | ✔️      |
| `target`                  | Element that triggered the event  | ✔️      |
| `currentTarget`           | Element listening to event        | ✔️      |
| `toElement`               | Mouse moved to (mouseover)        | ❌ old   |
| `srcElement`              | Same as target                    | ❌ old   |
| `clientX/Y`               | Mouse pos (viewport)              | ✔️      |
| `screenX/Y`               | Mouse pos (screen)                | ✔️      |
| `altKey/ctrlKey/shiftKey` | Modifier key states               | ✔️      |
| `keyCode`                 | Deprecated key identifier         | ❌       |

---
