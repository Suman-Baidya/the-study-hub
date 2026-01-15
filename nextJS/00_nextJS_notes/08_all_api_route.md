# Next.js API Routes

## HTTP Methods & CRUD Operations

Next.js API Routes allow you to implement **full backend CRUD functionality** (Create, Read, Update, Delete) directly inside a Next.js application.

This document explains **all HTTP methods**, their purpose, and a **complete CRUD backend example** using the **App Router**.

---

## What are API Routes in Next.js?

API Routes are server-side functions that handle HTTP requests.

* Run only on the server
* Secure (can access secrets & databases)
* Deployed as serverless functions
* No separate backend needed

---

## API Route File Convention (App Router)

```
app/api/<route-name>/route.ts
```

Example:

```
app/api/posts/route.ts
```

This creates an endpoint:

```
/api/posts
```

---

## Supported HTTP Methods in Next.js API Routes

Next.js supports the following methods:

| HTTP Method | Purpose               | CRUD   |
| ----------- | --------------------- | ------ |
| GET         | Fetch data            | Read   |
| POST        | Create new data       | Create |
| PUT         | Replace existing data | Update |
| PATCH       | Partially update data | Update |
| DELETE      | Remove data           | Delete |

Each method is exported as a **named function**.

---

## Basic Example: In-Memory Database

> For learning purposes, we will use a simple array as a database.

```ts
let posts = [
  { id: 1, title: 'First Post', content: 'Hello World' },
]
```

---

## CRUD API Example (Posts)

### File Structure

```
app/api/posts/route.ts
```

---

## 1️⃣ GET – Read Data

### Purpose

* Fetch all posts
* Fetch data from backend

### Code

```ts
import { NextResponse } from 'next/server'

let posts = [
  { id: 1, title: 'First Post', content: 'Hello World' },
]

export async function GET() {
  return NextResponse.json(posts)
}
```

---

## 2️⃣ POST – Create Data

### Purpose

* Add new data
* Create new record

### Code

```ts
export async function POST(req: Request) {
  const body = await req.json()

  const newPost = {
    id: Date.now(),
    title: body.title,
    content: body.content,
  }

  posts.push(newPost)

  return NextResponse.json(newPost, { status: 201 })
}
```

---

## 3️⃣ PUT – Update (Replace) Data

### Purpose

* Replace entire object

### Code

```ts
export async function PUT(req: Request) {
  const body = await req.json()

  posts = posts.map(post =>
    post.id === body.id
      ? { id: body.id, title: body.title, content: body.content }
      : post
  )

  return NextResponse.json({ message: 'Post updated (PUT)' })
}
```

---

## 4️⃣ PATCH – Partial Update

### Purpose

* Update only specific fields

### Code

```ts
export async function PATCH(req: Request) {
  const body = await req.json()

  posts = posts.map(post =>
    post.id === body.id
      ? { ...post, ...body }
      : post
  )

  return NextResponse.json({ message: 'Post updated (PATCH)' })
}
```

---

## 5️⃣ DELETE – Remove Data

### Purpose

* Delete record

### Code

```ts
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = Number(searchParams.get('id'))

  posts = posts.filter(post => post.id !== id)

  return NextResponse.json({ message: 'Post deleted' })
}
```

---

## Testing API Routes

### GET

```
GET /api/posts
```

### POST

```
POST /api/posts
{
  "title": "New Post",
  "content": "Post content"
}
```

### PUT / PATCH

```
PUT /api/posts
PATCH /api/posts
{
  "id": 1,
  "title": "Updated Title"
}
```

### DELETE

```
DELETE /api/posts?id=1
```

---

## HTTP Status Codes (Best Practice)

| Code | Meaning      |
| ---- | ------------ |
| 200  | Success      |
| 201  | Created      |
| 400  | Bad Request  |
| 404  | Not Found    |
| 500  | Server Error |

---

## API Routes with Dynamic Params

### Folder Structure

```
app/api/posts/[id]/route.ts
```

Access using:

```
/api/posts/123
```

---

## Dynamic Route Example (GET by ID)

```ts
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const post = posts.find(p => p.id === Number(params.id))

  if (!post) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  return NextResponse.json(post)
}
```

---

## Best Practices

* Validate request body
* Use dynamic routes for IDs
* Handle errors properly
* Use database instead of memory
* Move logic to `lib/` folder

---

## Common Mistakes

❌ Forgetting to export HTTP methods
❌ Using client-only code in API routes
❌ Not validating inputs
❌ Mixing business logic inside route files

---

## Key Takeaways

* Next.js API routes support full CRUD
* HTTP methods map directly to functions
* App Router provides clean structure
* Ideal for full-stack applications

---

## Conclusion

Next.js API routes allow you to build **complete backend systems** inside your frontend project. Understanding CRUD operations with HTTP methods is essential for real-world Next.js development.

---
