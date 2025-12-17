# React Router – Full Notes (Beginner to Advanced)

## 🌐 What is Routing?

Routing means **navigating between different pages or views** in a web application.

In traditional websites:

* Every page reloads from the server

In React (SPA – Single Page Application):

* Page does **NOT reload**
* Only components change

This is handled by **React Router**.

---

## 📦 What is React Router?

**React Router** is a popular library used to handle **client-side routing** in React applications.

It allows you to:

* Create multiple pages
* Navigate without page reload
* Pass data via URL
* Protect routes

👉 Current version: **React Router v6+**

---

## 🛠️ Installation

```bash
npm install react-router-dom
```


---

## 🧱 Basic Routing Setup

### Step 1: Wrap App with BrowserRouter

```jsx
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

## 📍 Core Components of React Router

### 1️⃣ BrowserRouter

* Keeps UI in sync with URL
* Uses HTML5 history API

### 2️⃣ Routes

* Container for all Route components

### 3️⃣ Route

* Maps URL path to component

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
```

---

## 🔗 Navigation with Link

### Why not `<a>` tag?

* `<a>` reloads the page ❌
* `<Link>` avoids reload ✅

```jsx
import { Link } from "react-router-dom";

<Link to="/about">About</Link>
```

---

## 🚦 useNavigate Hook

Used to navigate programmatically.

```jsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

---

## 📌 Dynamic Routes (URL Params)

```jsx
<Route path="/user/:id" element={<User />} />
```

```jsx
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}
```

---

## ❓ Route Not Found (404 Page)

```jsx
<Route path="*" element={<NotFound />} />
```

---

## 🔐 Protected Routes (Auth)

```jsx
function PrivateRoute({ children }) {
  const isAuth = true; // example
  return isAuth ? children : <Navigate to="/login" />;
}
```

```jsx
<Route path="/dashboard" element={
  <PrivateRoute>
    <Dashboard />
  </PrivateRoute>
} />
```

---

## 🧩 Nested Routes

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

Use `<Outlet />` inside parent component.

```jsx
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
```

---

## 📄 useLocation Hook

```jsx
import { useLocation } from "react-router-dom";

const location = useLocation();
console.log(location.pathname);
```

---

## 📤 Passing State via Route

```jsx
navigate("/profile", { state: { name: "Suman" } });
```

```jsx
const location = useLocation();
console.log(location.state.name);
```

---

## ⚖️ React Router v5 vs v6 (Quick)

| Feature        | v5 | v6 |
| -------------- | -- | -- |
| Switch         | ✅  | ❌  |
| Routes         | ❌  | ✅  |
| component prop | ✅  | ❌  |
| element prop   | ❌  | ✅  |

---

## ✅ Best Practices

* Use lazy loading for routes
* Create a separate routes file
* Protect sensitive routes
* Avoid inline navigation logic

---

## 🧠 Interview Questions

1. What is SPA?
2. Difference between Link and NavLink?
3. What is useNavigate?
4. How to protect routes?
5. What is Outlet?

---
