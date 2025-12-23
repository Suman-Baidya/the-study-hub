# React Form Handling

Form handling is one of the most important concepts in React. Almost every real-world application uses forms for **login, signup, search, feedback, payments, settings**, etc.

---

## 📌 What is Form Handling in React?

Form handling means:

* Capturing user input
* Storing input values
* Validating data
* Submitting data

React handles forms using **state**, **refs**, and **controlled/uncontrolled components**.

---

## 🧠 Controlled vs Uncontrolled Components

### 1️⃣ Controlled Components (Recommended)

* Form data is handled by **React state**
* React is the single source of truth

### 2️⃣ Uncontrolled Components

* Form data is handled by **DOM itself**
* Accessed using `useRef`

---

## 🧱 Basic Controlled Form Example

```jsx
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}
```

✔ React controls the input values
✔ Best for validation and logic

---

## 🧾 Handling All Input Types

### 📝 Text Input

```jsx
<input type="text" value={name} onChange={e => setName(e.target.value)} />
```

---

### 🔢 Number Input

```jsx
<input type="number" value={age} onChange={e => setAge(+e.target.value)} />
```

---

### 📧 Email Input

```jsx
<input type="email" value={email} onChange={e => setEmail(e.target.value)} />
```

---

### 🔐 Password Input

```jsx
<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
```

---

### ☑ Checkbox

```jsx
<input
  type="checkbox"
  checked={agree}
  onChange={e => setAgree(e.target.checked)}
/>
```

---

### 🔘 Radio Button

```jsx
<input type="radio" value="male" checked={gender === "male"} />
<input type="radio" value="female" checked={gender === "female"} />
```

---

### 📂 File Input

```jsx
<input type="file" onChange={e => setFile(e.target.files[0])} />
```

---

### 📋 Select Dropdown

```jsx
<select value={country} onChange={e => setCountry(e.target.value)}>
  <option value="">Select</option>
  <option value="India">India</option>
</select>
```

---

### 🧾 Textarea

```jsx
<textarea value={message} onChange={e => setMessage(e.target.value)} />
```

---

## 🧠 Single State for Multiple Inputs

```jsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: ""
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
```

```jsx
<input name="name" value={formData.name} onChange={handleChange} />
```

✔ Clean and scalable

---

## 🔐 Form Validation (Basic)

```jsx
if (!email.includes("@")) {
  alert("Invalid email");
}
```

Better approach:

* Validate on submit
* Show error messages

---

## ⚡ Using useRef for Forms (Uncontrolled)

### When to use useRef?

* Simple forms
* No re-render needed
* Better performance

```jsx
import { useRef } from "react";

function Login() {
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" ref={emailRef} />
      <button>Submit</button>
    </form>
  );
}
```

---

## ⚖ useState vs useRef (Very Important)

| Feature            | useState        | useRef     |
| ------------------ | --------------- | ---------- |
| Triggers re-render | ✅ Yes           | ❌ No       |
| Best for           | Form logic      | DOM access |
| Validation         | Easy            | Hard       |
| Controlled         | Yes             | No         |
| Performance        | Slightly slower | Faster     |

### 📌 Rule of Thumb

* Use **useState** → controlled forms
* Use **useRef** → simple access, focus, file input

---

## 🎯 Auto Focus Using useRef

```jsx
const inputRef = useRef();

useEffect(() => {
  inputRef.current.focus();
}, []);
```

---

## 🚀 Advanced Form Handling Tips

### 1️⃣ Prevent Default Reload

```jsx
e.preventDefault();
```

### 2️⃣ Disable Submit Button

```jsx
<button disabled={!isValid}>Submit</button>
```

### 3️⃣ Reset Form

```jsx
setFormData({ name: "", email: "" });
```

---

## 🧩 Popular Form Libraries (Advanced)

* Formik
* React Hook Form
* Yup (validation)

---

## 🎤 Interview Questions

1. Controlled vs uncontrolled components?
2. useState vs useRef?
3. How to handle multiple inputs?
4. How to validate form?
5. Best way to manage large forms?

---

## 🏁 Final Summary

* Controlled forms use `useState`
* Uncontrolled forms use `useRef`
* Validation is easier with state
* React forms are powerful and flexible
* Forms are core to real-world React apps

---

✍️ *Complete React Form Handling Notes – Beginner to Advanced*
