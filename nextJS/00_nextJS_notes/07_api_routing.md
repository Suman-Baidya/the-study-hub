# Next.js API Routing

## Complete Notes with Real Backend–Frontend Example

Next.js allows you to build **backend APIs inside the same project** using **API Routes**. This removes the need for a separate backend server for many use cases.

---

## What is API Routing in Next.js?

API Routing lets you create **HTTP endpoints** (GET, POST, PUT, DELETE) directly inside your Next.js project.

* Acts like a backend server
* Runs only on the **server**
* Secure (no browser access to secrets)
* Ideal for forms, auth, database, payments, etc.

---

## Types of API Routing in Next.js

### 1. App Router API Routes (Modern – Recommended)

```
app/api/**/route.ts
```

### 2. Pages Router API Routes (Legacy)

```
pages/api/*.ts
```

This document focuses on **App Router API routing**.

---

## Basic Folder Structure

```
app/
 ├─ api/
 │   ├─ users/
 │   │   └─ route.ts
 │   └─ contact/
 │       └─ route.ts
 ├─ page.tsx
```

Each folder inside `api/` becomes an endpoint.

---

## Creating an API Route

### Example: GET API

### File

```
app/api/users/route.ts
```

### Code

```ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    users: ['Suman', 'Amit', 'Ravi'],
  })
}
```

### URL

```
http://localhost:3000/api/users
```

---

## HTTP Methods Supported

| Method | Function    |
| ------ | ----------- |
| GET    | Fetch data  |
| POST   | Send data   |
| PUT    | Update data |
| DELETE | Remove data |
|        |             |

---

## Real Example: Contact Form (Backend + Frontend)

### 1. Backend API (POST Request)

#### File

```
app/api/contact/route.ts
```

#### Code

```ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  const { name, email, message } = body

  // Example: Save to database or send email
  console.log(name, email, message)

  return NextResponse.json({
    success: true,
    message: 'Message sent successfully',
  })
}
```

---

### 2. Frontend Form (Client Component)

#### File

```
app/contact/page.tsx
```

#### Code

```tsx
'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const formData = {
      name: 'Suman',
      email: 'suman@example.com',
      message: 'Hello from Next.js',
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await res.json()
    setStatus(data.message)
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Send Message</button>
      <p>{status}</p>
    </form>
  )
}
```

---

## How Frontend Connects to Backend

1. User submits form
2. Browser sends request to `/api/contact`
3. `route.ts` handles request on server
4. Response sent back to frontend
5. UI updates based on response

---

## Environment Variables (Security)

Store secrets safely:

```
.env.local
```

```
DATABASE_URL=secret
API_KEY=private
```

Access only on server:

```ts
process.env.DATABASE_URL
```

---

## API Routing vs Traditional Backend

| Feature    | Next.js API       | Express Backend |
| ---------- | ----------------- | --------------- |
| Setup      | Simple            | Complex         |
| Deployment | Same app          | Separate        |
| Scaling    | Serverless        | Manual          |
| Best for   | Small–Medium apps | Large systems   |

---

## Best Practices

* Keep API logic server-only
* Validate request data
* Handle errors properly
* Use environment variables
* Separate business logic into `lib/`

---

## Common Mistakes

❌ Calling API routes directly in Server Components unnecessarily
❌ Storing secrets in client code
❌ Missing HTTP method exports
❌ Not validating request body

---

## Key Takeaways

* API routes turn Next.js into a full-stack framework
* App Router API routes are modern & powerful
* Frontend and backend live together
* Ideal for forms, auth, and databases

---

## Conclusion

Next.js API routing allows you to build secure, scalable backend logic without leaving your frontend project. Mastering API routes is essential for full-stack Next.js development.

---
