# Next.js Components

## Introduction

Components are the **building blocks** of a Next.js application. In modern Next.js (App Router), components are divided into **Server Components** and **Client Components**.

Understanding how these components work, their differences, and when to use each is **extremely important** for performance, scalability, and clean architecture.

---

## Types of Components in Next.js

Next.js supports two main component types:

1. **Server Components** (Default)
2. **Client Components**

---

## 1. Server Components

### What are Server Components?

Server Components run **only on the server**. Their code is never sent to the browser.

In Next.js App Router, **all components are Server Components by default**.

---

### Key Characteristics of Server Components

* Rendered on the server
* No JavaScript sent to client
* Cannot use browser APIs
* Cannot use React hooks like `useState`, `useEffect`
* Can directly access databases, files, and secrets

---

### Example: Server Component

```tsx
export default async function ServerPage() {
  const data = await fetch('https://api.example.com/data')
    .then(res => res.json())

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
```

---

### Advantages of Server Components

✅ Better performance
✅ Smaller JavaScript bundle
✅ Improved security
✅ Direct backend access
✅ Better SEO

---

### Limitations of Server Components

❌ No interactivity
❌ No event handlers (`onClick`, etc.)
❌ No browser APIs

---

## 2. Client Components

### What are Client Components?

Client Components run **in the browser** and enable interactivity.

To define a Client Component, you must add:

```tsx
'use client'
```

at the top of the file.

---

### Key Characteristics of Client Components

* Rendered on the client
* JavaScript sent to browser
* Can use state, effects, and browser APIs
* Required for interactivity

---

### Example: Client Component

```tsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

---

### Advantages of Client Components

✅ Interactive UI
✅ Event handling
✅ Access to browser APIs

---

### Limitations of Client Components

❌ Larger JS bundle
❌ Slower initial load
❌ Less secure than server components

---

## Server vs Client Components (Comparison)

| Feature      | Server Component | Client Component |
| ------------ | ---------------- | ---------------- |
| Default      | ✅ Yes            | ❌ No             |
| Runs on      | Server           | Browser          |
| Uses State   | ❌                | ✅                |
| Uses Effects | ❌                | ✅                |
| Access DB    | ✅                | ❌                |
| Bundle Size  | Small            | Larger           |
| SEO          | Excellent        | Good             |

---

## Component Composition Rule (Very Important)

* Server Components **can import Client Components**
* Client Components **cannot import Server Components**

✔️ Allowed:

```
Server → Client
```

❌ Not Allowed:

```
Client → Server
```

---

## Mixing Server & Client Components

Example:

```tsx
// Server Component
import Counter from './Counter'

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Counter />
    </div>
  )
}
```

The **Counter** is interactive, but the page itself stays server-rendered.

---

## Data Fetching & Components

### Server Components

* Fetch data directly
* Automatic caching

```tsx
const data = await fetch(url)
```

### Client Components

* Fetch data using hooks

```tsx
useEffect(() => {
  fetch(url)
}, [])
```

---

## When to Use Server Components

Use Server Components for:

* Pages
* Layouts
* Static content
* Data fetching
* SEO-heavy pages

---

## When to Use Client Components

Use Client Components for:

* Buttons
* Forms
* Modals
* Dropdowns
* Carousels
* Any interactive UI

---

## Best Practices (Important)

✅ Prefer Server Components by default
✅ Use Client Components only when needed
✅ Keep Client Components small
✅ Avoid unnecessary `'use client'`

---

## Common Mistakes

❌ Adding `'use client'` globally
❌ Fetching data in Client Components unnecessarily
❌ Accessing `window` in Server Components
❌ Importing Server Component into Client Component

---

## Other Important Component Types

### Layout Components

* Defined using `layout.tsx`
* Always Server Components

---

### Loading Components

* Defined using `loading.tsx`
* Used for skeletons

---

### Error Components

* Defined using `error.tsx`
* Must be Client Components

---

## Key Takeaways

* Server Components are default
* Client Components enable interactivity
* Smaller JS = better performance
* Correct usage is critical

---

## Conclusion

Next.js component architecture is designed for **performance-first development**. By mastering Server and Client Components, you can build applications that are faster, more secure, and easier to scale.

---

# Server vs Client Components in Next.js

## Data Fetching Example (Complete Notes)

This document demonstrates the **difference between Server Components and Client Components** in Next.js using **data fetching examples**. Understanding this difference is critical for performance, SEO, and correct architecture in the **App Router**.

---

## Example API Used

We will fetch data from a public API:

```
https://jsonplaceholder.typicode.com/posts/1
```

---

## 1. Server Component – Data Fetching on Server

### File Structure

```
app/server-example/page.tsx
```

### Code (Server Component)

```tsx
// app/server-example/page.tsx

export default async function ServerExamplePage() {
  // Fetching happens on the SERVER
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const post = await res.json()

  return (
    <div>
      <h1>Server Component Example</h1>
      <p><strong>Title:</strong> {post.title}</p>
      <p>{post.body}</p>
    </div>
  )
}
```

### Explanation

* Runs only on the **server**
* Fetch executes before HTML is sent to browser
* No JavaScript needed for fetching
* Best for **SEO and performance**

---

## 2. Client Component – Data Fetching in Browser

### File Structure

```
app/client-example/page.tsx
```

### Code (Client Component)

```tsx
'use client'

import { useEffect, useState } from 'react'

export default function ClientExamplePage() {
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  // Fetching happens in the BROWSER
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data => {
        setPost(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h1>Client Component Example</h1>
      <p><strong>Title:</strong> {post.title}</p>
      <p>{post.body}</p>
    </div>
  )
}
```

### Explanation

* Runs in the **browser**
* Fetch executes after page loads
* JavaScript bundle is larger
* Required for **interactive UI**

---

## 3. Key Differences (Server vs Client)

| Feature               | Server Component | Client Component    |
| --------------------- | ---------------- | ------------------- |
| Default in App Router | ✅ Yes            | ❌ No                |
| `'use client'`        | ❌ Not needed     | ✅ Required          |
| Fetch runs on         | Server           | Browser             |
| SEO                   | Excellent        | Limited             |
| JavaScript sent       | Minimal          | More                |
| React Hooks           | ❌                | ✅                   |
| Performance           | Faster           | Slower initial load |

---

## 4. Recommended Real-World Pattern

### Server Component (Fetch Data)

```tsx
import ClientButton from './ClientButton'

export default async function Page() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())

  return (
    <div>
      <h1>{data.title}</h1>
      <ClientButton />
    </div>
  )
}
```

### Client Component (Interactivity)

```tsx
'use client'

export default function ClientButton() {
  return <button>Click Me</button>
}
```

### Why This Pattern is Best

* Data stays on the **server**
* Interactivity stays on the **client**
* Smaller JS bundle
* Better performance

---

## 5. Common Mistakes

❌ Fetching critical data inside Client Components
❌ Adding `'use client'` unnecessarily
❌ Using browser APIs in Server Components
❌ Importing Server Components into Client Components

---

## Key Takeaways

* Server Components are default in Next.js
* Fetch data on the server whenever possible
* Use Client Components only for interactivity
* This separation is core to Next.js App Router

---

## Conclusion

Using Server Components for data fetching and Client Components for interactivity results in **faster, more secure, and SEO-friendly** applications. Mastering this pattern is essential for building modern Next.js apps.

---
