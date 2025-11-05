# ⚛️ React Props — Complete Guide

## 🧠 Introduction

In React, **props** (short for **properties**) are used to pass **data** and **functions** from one component to another, usually from **parent to child**. Props make React components **reusable** and **dynamic**.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Welcome name="Suman" />;
}
```

✅ Output: **Hello, Suman!**

---

## ⚙️ 1. What are Props?

* Props are **read-only** objects that store values sent to a component.
* They can be **strings, numbers, arrays, objects, functions, or even JSX elements**.
* Props are **immutable** — they cannot be modified inside the child component.

Example:

```jsx
function User(props) {
  return <p>{props.username} is {props.age} years old.</p>;
}

<User username="John" age={25} />;
```

---

## 🏗️ 2. Passing and Receiving Props

### Passing Props (Parent → Child)

Props are passed just like HTML attributes:

```jsx
<Profile name="Alice" age={22} />
```

### Receiving Props (Child Component)

```jsx
function Profile(props) {
  return <h2>{props.name} is {props.age} years old.</h2>;
}
```

---

## 💡 3. Destructuring Props

Destructuring makes code cleaner and more readable.

```jsx
function Profile({ name, age }) {
  return <h2>{name} is {age} years old.</h2>;
}
```

---

## 🧩 4. Default Props

Default props provide fallback values when no props are passed.

```jsx
function Button({ label }) {
  return <button>{label}</button>;
}

Button.defaultProps = {
  label: 'Click Me',
};
```

✅ If `<Button />` is rendered without props → Output: **Click Me**

---

## 🧠 5. Props vs State

| Feature            | Props              | State                    |
| ------------------ | ------------------ | ------------------------ |
| **Mutability**     | Immutable          | Mutable                  |
| **Ownership**      | Passed from parent | Managed inside component |
| **Update Trigger** | Parent changes     | Component logic changes  |
| **Usage**          | Communication      | Data handling            |

---

## ⚡ 6. Passing Functions as Props

Props can also be used to pass functions, allowing **child-to-parent communication**.

```jsx
function Child({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}

function Parent() {
  function handleClick() {
    alert('Button clicked in child!');
  }
  return <Child onClick={handleClick} />;
}
```

✅ The parent controls behavior triggered in the child.

---

## 🧮 7. Props with Class Components

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---

## 🧠 8. Props and Children

React provides a special prop called `children` that represents the nested elements inside a component.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

<Card>
  <h2>Title</h2>
  <p>This is the card body.</p>
</Card>
```

✅ The content between `<Card>` tags becomes `props.children`.

---

## 🧰 9. PropTypes for Type Checking

`PropTypes` ensures that components receive props of the correct type.

```jsx
import PropTypes from 'prop-types';

function User({ name, age }) {
  return <h2>{name} is {age} years old.</h2>;
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
```

✅ Helps catch bugs during development.

---

## 🧠 10. Common Mistakes with Props

❌ Trying to modify props:

```jsx
props.name = 'New Name'; // Error — props are read-only
```

✅ Instead, manage modifiable data in **state**:

```jsx
const [name, setName] = useState('Old Name');
setName('New Name');
```

---

## 🔄 11. Re-rendering and Props

A component **re-renders** when:

* Its **props** change.
* Its **state** changes.
* Its **parent** re-renders.

To prevent unnecessary re-renders, use **React.memo()**:

```jsx
const Child = React.memo(function Child({ value }) {
  console.log('Rendered!');
  return <p>{value}</p>;
});
```

---

## 💡 12. Advanced Concept: Props Spreading

```jsx
function Input(props) {
  return <input {...props} />;
}

<Input type="text" placeholder="Enter name" />;
```

✅ Spreads all props automatically, useful for generic components.

---

## 🧭 Summary

* Props allow **data and function sharing** between components.
* They are **immutable**, **read-only**, and **controlled by parent components**.
* Use **PropTypes** for validation and **defaultProps** for defaults.
* Remember: **Props down, Events up!** — Data flows down, events bubble up.

---

## ✍️ Author

**Suman Baidya**
*Prepared for React.js Learners — Deep Dive into Props and Component Communication*
