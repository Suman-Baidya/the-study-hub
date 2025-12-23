# Axios vs Fetch in React

Making HTTP requests is a core part of React applications. React itself does not provide an HTTP client, so developers commonly use **Fetch API** or **Axios**.

---

## 📌 What is Fetch?

**Fetch** is a built-in Web API provided by browsers to make HTTP requests.

### Basic Fetch Example in React

```jsx
useEffect(() => {
  fetch('https://api.example.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}, []);
```

### Key Points of Fetch

* Built into browser (no installation needed)
* Returns a **Promise**
* Needs manual JSON conversion
* Does NOT reject promise on HTTP errors (404, 500)

---

## 📌 What is Axios?

**Axios** is a popular third-party JavaScript library for HTTP requests.

### Installing Axios

```bash
npm install axios
```

### Basic Axios Example in React

```jsx
import axios from 'axios';

useEffect(() => {
  axios.get('https://api.example.com/users')
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
}, []);
```

### Key Points of Axios

* Needs installation
* Automatically converts JSON
* Rejects promise for HTTP errors
* Supports request/response interceptors

---

## 🔄 Fetch vs Axios – Core Differences

| Feature              | Fetch           | Axios             |
| -------------------- | --------------- | ----------------- |
| Built-in             | ✅ Yes           | ❌ No              |
| JSON parsing         | ❌ Manual        | ✅ Automatic       |
| HTTP error handling  | ❌ Manual        | ✅ Automatic       |
| Interceptors         | ❌ No            | ✅ Yes             |
| Timeout support      | ❌ No            | ✅ Yes             |
| Request cancellation | ❌ Hard          | ✅ Easy            |
| Browser support      | Modern browsers | Browser + Node.js |

---

## ⚠ Handling Errors

### Fetch Error Handling

```js
fetch(url)
  .then(res => {
    if (!res.ok) {
      throw new Error('Request failed');
    }
    return res.json();
  })
```

### Axios Error Handling

```js
axios.get(url)
  .catch(error => {
    console.log(error.response.status);
  });
```

✔ Axios is simpler and safer for error handling

---

## ⏱ Timeout Handling

### Axios Timeout

```js
axios.get(url, { timeout: 5000 });
```

❌ Fetch has no native timeout (needs AbortController)

---

## ❌ Request Cancellation

### Axios Cancellation

```js
const controller = new AbortController();
axios.get(url, { signal: controller.signal });
controller.abort();
```

### Fetch Cancellation

```js
const controller = new AbortController();
fetch(url, { signal: controller.signal });
controller.abort();
```

Axios is easier to manage in large apps

---

## 🔐 Axios Interceptors (Very Important)

Used for:

* Adding auth tokens
* Logging
* Global error handling

```js
axios.interceptors.request.use(config => {
  config.headers.Authorization = 'Bearer token';
  return config;
});
```

❌ Fetch does not support interceptors

---

## 🚀 Using Fetch & Axios with Async/Await

### Fetch

```js
const getData = async () => {
  const res = await fetch(url);
  const data = await res.json();
};
```

### Axios

```js
const getData = async () => {
  const res = await axios.get(url);
  console.log(res.data);
};
```

---

## 🧠 Best Practices in React

### ✅ With Fetch

* Always check `res.ok`
* Use `AbortController`
* Wrap calls in `try/catch`

### ✅ With Axios

* Create a reusable axios instance
* Use interceptors for auth
* Centralize API logic

---

## 📦 Creating Axios Instance (Best Practice)

```js
const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
});

export default api;
```

---

## ⚖ Pros and Cons

### Fetch Pros

✔ No dependency
✔ Lightweight
✔ Standard API

### Fetch Cons

❌ Manual error handling
❌ No interceptors
❌ No timeout

---

### Axios Pros

✔ Cleaner syntax
✔ Auto JSON handling
✔ Interceptors
✔ Better error handling

### Axios Cons

❌ Extra dependency
❌ Slightly larger bundle

---

## 🎯 When to Use What?

### Use Fetch When:

* Small project
* Simple API calls
* No auth complexity

### Use Axios When:

* Medium to large apps
* Authentication needed
* Global error handling
* Better maintainability

---

## 🎤 Interview Questions

1. Fetch vs Axios difference?
2. Why Axios is preferred in React?
3. How to handle errors in Fetch?
4. What are interceptors?
5. How to cancel requests?

---

## 🏁 Final Summary

* Fetch is native but limited
* Axios is powerful and developer-friendly
* Axios is preferred in real-world React apps
* Choose based on project size and complexity

---

# AXIOS -- COMPLETE GUIDE (BEGINNER TO ADVANCED)

------------------------------------------------------------------------

## 1. INTRODUCTION TO AXIOS

Axios is a *promise-based HTTP client* for JavaScript. It is used to
communicate with backend servers and APIs. It works in both **browser**
and **Node.js** environments.

It is commonly used with: - React - Next.js - Vue - Angular - Node.js

------------------------------------------------------------------------

## 2. WHY USE AXIOS

-   Supports Promise and async/await\
-   Automatically parses JSON\
-   Cleaner syntax than fetch\
-   Better error handling\
-   Request & response interceptors\
-   Global configuration\
-   Timeout & cancellation support

------------------------------------------------------------------------

## 3. INSTALLATION

### Using NPM

``` bash
npm install axios
```

### Using Yarn

``` bash
yarn add axios
```

### Using CDN

``` html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

------------------------------------------------------------------------

## 4. BASIC SYNTAX

``` js
axios({
  method: 'get',
  url: 'https://api.example.com/users'
});
```

------------------------------------------------------------------------

## 5. HTTP METHODS (SHORT-HAND)

### GET

``` js
axios.get('/users');
```

### POST

``` js
axios.post('/users', { name: 'Suman', age: 25 });
```

### PUT

``` js
axios.put('/users/1', { name: 'Updated' });
```

### PATCH

``` js
axios.patch('/users/1', { age: 26 });
```

### DELETE

``` js
axios.delete('/users/1');
```

------------------------------------------------------------------------

## 6. ASYNC / AWAIT

``` js
async function fetchUsers() {
  const res = await axios.get('/users');
  console.log(res.data);
}
```

------------------------------------------------------------------------

## 7. REQUEST CONFIG

``` js
axios({
  method: 'post',
  url: '/login',
  data: { email: 'a@b.com', password: '123456' },
  headers: { Authorization: 'Bearer token' },
  timeout: 5000
});
```

------------------------------------------------------------------------

## 8. RESPONSE OBJECT

``` js
{
  data: {},
  status: 200,
  headers: {}
}
```

------------------------------------------------------------------------

## 9. ERROR HANDLING

``` js
axios.get('/error').catch(err => {
  if (err.response) console.log(err.response.status);
});
```

------------------------------------------------------------------------

## 10. INTERCEPTORS

``` js
axios.interceptors.request.use(config => config);
axios.interceptors.response.use(res => res);
```

------------------------------------------------------------------------

## 11. AXIOS INSTANCE

``` js
const api = axios.create({
  baseURL: 'https://api.example.com'
});
```

------------------------------------------------------------------------

## 12. FILE UPLOAD

``` js
const formData = new FormData();
formData.append('file', file);
axios.post('/upload', formData);
```

------------------------------------------------------------------------

## 13. CONCLUSION

Axios simplifies API communication and is widely used in real-world
applications.

------------------------------------------------------------------------

