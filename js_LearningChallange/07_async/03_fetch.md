# Fetch API — Full Detailed Notes

## 📌 Introduction

The **Fetch API** is a modern, promise-based system for making **HTTP requests** in JavaScript. It replaces the older **XMLHttpRequest (XHR)** method and provides a cleaner, more powerful way to work with APIs.

Fetch is built into all modern browsers and works in both frontend and backend (Node.js with `node-fetch` or native in recent versions).

---

## 📌 Why Use Fetch API?

* Simpler and cleaner than XHR
* Returns a **Promise**
* Supports **async/await**
* Provides flexible request and response handling
* Support for streaming, JSON, FormData, and more

---

## 📌 Basic Syntax

```js
fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

* `url` → API endpoint
* `options` → Request method, headers, body, etc.

---

## 📌 Simple GET Request

```js
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err));
```

---

## 📌 Fetch with Async/Await

```js
async function getPost() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getPost();
```

---

## 📌 POST Request with Fetch

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Post',
    body: 'Post content',
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 📌 Available Request Methods

| Method | Usage                 |
| ------ | --------------------- |
| GET    | Retrieve data         |
| POST   | Send data             |
| PUT    | Update entire record  |
| PATCH  | Update partial record |
| DELETE | Remove data           |

---

## 📌 Handling Errors in Fetch

Fetch **does not throw an error** for HTTP errors like 404 or 500.

You must check manually:

```js
async function getData() {
  let res = await fetch('https://api.example.com/data');

  if (!res.ok) {
    throw new Error(`HTTP Error: ${res.status}`);
  }

  let data = await res.json();
  console.log(data);
}
```

---

## 📌 Fetch Response Methods

| Method                   | Description       |
| ------------------------ | ----------------- |
| `response.json()`        | Parse JSON        |
| `response.text()`        | Get text/string   |
| `response.blob()`        | For files, images |
| `response.formData()`    | Receive form data |
| `response.arrayBuffer()` | Binary data       |

---

## 📌 Sending Form Data

```js
const formData = new FormData();
formData.append('name', 'Suman');
formData.append('file', fileInput.files[0]);

fetch('/upload', {
  method: 'POST',
  body: formData
});
```

---

## 📌 Adding Custom Headers

```js
fetch('/data', {
  headers: {
    'Authorization': 'Bearer mytoken123',
    'Accept': 'application/json'
  }
});
```

---

## 📌 Abort Fetch (Cancel Request)

```js
const controller = new AbortController();
const signal = controller.signal;

fetch('/slow-api', { signal })
  .catch(err => console.log(err));

controller.abort();
```

---

## 📌 Handling Multiple Fetch Requests

```js
Promise.all([
  fetch('/data1').then(r => r.json()),
  fetch('/data2').then(r => r.json())
]).then(([d1, d2]) => console.log(d1, d2));
```

---

## 📌 Fetch vs Axios

| Feature               | Fetch           | Axios        |
| --------------------- | --------------- | ------------ |
| Browser Support       | Modern browsers | All browsers |
| Default JSON handling | ❌ No            | ✅ Yes        |
| Auto timeouts         | ❌ No            | ✅ Yes        |
| Interceptors          | ❌ No            | ✅ Yes        |
| Upload progress       | Limited         | Excellent    |

---

## 📌 Real Project Example — Search User

```js
async function searchUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  console.log(data);
}

searchUser(3);
```

---

## 📌 Summary

* Fetch is modern, promise-based, clean.
* Works great with async/await.
* Supports JSON, text, form data, binary, file upload.
* Requires manual error checking.

---

**Author: Suman Baidya**
