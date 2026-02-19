# Full Beginner Guide: CRUD in Next.js using PostgreSQL + Prisma

This guide explains **step-by-step** how to build a full CRUD (Create, Read, Update, Delete) API in Next.js using:

* ✅ PostgreSQL (Database)
* ✅ Prisma (ORM)
* ✅ Next.js App Router

Everything is written in a beginner-friendly way.

---

# 1. What is CRUD?

CRUD means:

* **C** → Create (Add data)
* **R** → Read (Get data)
* **U** → Update (Edit data)
* **D** → Delete (Remove data)

Example:
If we build a "Task Manager":

* Create → Add new task
* Read → Show all tasks
* Update → Edit task
* Delete → Remove task

---

# 2. Project Setup (Step-by-Step)

## Step 1: Create Next.js App

```bash
npx create-next-app@latest next-crud-app
cd next-crud-app
```

Choose:

* App Router ✅
* TypeScript (recommended) ✅

---

## Step 2: Install Dependencies

Install Prisma + PostgreSQL driver:

```bash
npm install prisma --save-dev
npm install @prisma/client
```

---

# 3. Setup PostgreSQL

You need a PostgreSQL database.

Options:

* Local PostgreSQL
* Neon (free cloud PostgreSQL)
* Supabase

You will get a **DATABASE_URL** like:

```
postgresql://username:password@localhost:5432/mydatabase
```

---

# 4. Initialize Prisma

Run:

```bash
npx prisma init
```

This creates:

```
prisma/
  schema.prisma
.env
```

---

# 5. Configure Database Connection

Open `.env` file:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/mydatabase"
```

---

# 6. Create Prisma Model (Database Table)

Open:

```
prisma/schema.prisma
```

Example: Create a "Post" model

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  createdAt DateTime @default(now())
}
```

This creates a table:

Post Table Columns:

* id
* title
* content
* createdAt

---

# 7. Push Schema to Database

Run:

```bash
npx prisma db push
```

Now your PostgreSQL database has the Post table ✅

---

# 8. Generate Prisma Client

```bash
npx prisma generate
```

Prisma Client allows us to talk to the database.

---

# 9. Create Prisma Client File (Important for Next.js)

Create file:

```
lib/prisma.ts
```

```ts
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "@/lib/generated/prisma/client";

import "dotenv/config";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

declare global {
    var __prisma__: PrismaClient | undefined;
}

const prisma = global.__prisma__ ?? new PrismaClient({adapter});

if (process.env.NODE_ENV !== "production") global.__prisma__ = prisma;

export default prisma;
export {prisma}
```

This prevents multiple Prisma instances in development.

---

# 10. Create API Routes (App Router)

Folder structure:

```
app/api/posts/route.ts
app/api/posts/[id]/route.ts
```

---

# 11. CREATE Operation (POST)

File:

```
app/api/posts/route.ts
```

```ts
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
    },
  })

  return NextResponse.json(post)
}
```

Test using:

* Thunder Client
* Postman

---

# 12. READ Operation (GET All)

Inside same file:

```ts
export async function GET() {
  const posts = await prisma.post.findMany()
  return NextResponse.json(posts)
}
```

This returns all posts.

---

# 13. READ Single Post (GET by ID)

File:

```
app/api/posts/[id]/route.ts
```

```ts
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return NextResponse.json(post)
}
```

---

# 14. UPDATE Operation (PUT)

```ts
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json()

  const updatedPost = await prisma.post.update({
    where: {
      id: Number(params.id),
    },
    data: {
      title: body.title,
      content: body.content,
    },
  })

  return NextResponse.json(updatedPost)
}
```

---

# 15. DELETE Operation

```ts
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await prisma.post.delete({
    where: {
      id: Number(params.id),
    },
  })

  return NextResponse.json({ message: 'Post deleted' })
}
```

---

# 16. Testing CRUD Flow

1. POST → Create post
2. GET → See all posts
3. GET /id → See single post
4. PUT → Update post
5. DELETE → Remove post

---

# 17. Bonus: Connect to Frontend

Example Fetch:

```ts
await fetch('/api/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Hello',
    content: 'World',
  }),
})
```

---

# 18. Important Concepts Explained Simply

## Prisma ORM

Prisma allows us to write JavaScript/TypeScript instead of SQL.

Instead of:

```sql
INSERT INTO Post ...
```

We write:

```ts
prisma.post.create()
```

---

## Why Use Prisma?

* Type-safe queries
* Auto-completion
* Easy migrations
* Beginner friendly

---

# 19. Common Errors

### ❌ PrismaClientInitializationError

→ Check DATABASE_URL

### ❌ Cannot read property 'id'

→ Convert id to Number()

---

# 20. Final Folder Structure

```
app/
  api/
    posts/
      route.ts
      [id]/
        route.ts
lib/
  prisma.ts
prisma/
  schema.prisma
.env
```

---

# 🎉 Congratulations!

You have successfully built a full CRUD API in Next.js using:

* PostgreSQL
* Prisma
* App Router

You now understand:

* Database connection
* Prisma model
* API routes
* CRUD operations
