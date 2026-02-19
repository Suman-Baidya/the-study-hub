# Next.js + MongoDB CRUD Project

This guide teaches you how to build a **complete CRUD (Create, Read, Update, Delete) project** using **Next.js App Router + MongoDB (Mongoose)**.

You will clearly understand:

* How database works in Next.js
* How models are created
* How API routes work
* How frontend connects to backend

---

## What We Will Build

A **simple User Management system**:

* Add user
* View users
* Update user
* Delete user

---

## Tech Stack

* Next.js (App Router)
* MongoDB
* Mongoose
* API Routes
* Server + Client Components

---

## Step 1: Create Next.js Project

```bash
npx create-next-app@latest next-mongo-crud
cd next-mongo-crud
npm run dev
```

---

## Step 2: Install MongoDB & Mongoose

```bash
npm install mongoose
```

---

## Step 3: Setup Environment Variables

Create `.env.local`:

```
MONGODB_URI=mongodb+srv://username:password@cluster/dbname
```

⚠️ Never expose this in client code.

---

## Step 4: Project Structure (Important)

```
app/
 ├─ api/
 │   └─ users/
 │       ├─ route.ts
 │       └─ [id]/route.ts
 ├─ users/
 │   └─ page.tsx
lib/
 ├─ db.ts
 └─ models/
     └─ User.ts
```

---

## Step 5: MongoDB Connection

📁 `lib/db.ts`

```ts
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI not defined')
}

let cached = (global as any).mongoose || { conn: null, promise: null }

async function connectDB() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then(m => m)
  }

  cached.conn = await cached.promise
  return cached.conn
}

;(global as any).mongoose = cached

export default connectDB
```

🔹 This prevents multiple DB connections (important in Next.js).

---

## Step 6: Create User Model

📁 `lib/models/User.ts`

```ts
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
```

---

## Step 7: API Routes – CREATE & READ

📁 `app/api/users/route.ts`

```ts
import { NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import User from '@/lib/models/User'

// READ users
export async function GET() {
  await connectDB()
  const users = await User.find()
  return NextResponse.json(users)
}

// CREATE user
export async function POST(req: Request) {
  await connectDB()
  const body = await req.json()

  const user = await User.create(body)
  return NextResponse.json(user, { status: 201 })
}
```

---

## Step 8: API Routes – UPDATE & DELETE

📁 `app/api/users/[id]/route.ts`

```ts
import { NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import User from '@/lib/models/User'

// UPDATE user
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB()
  const body = await req.json()

  const updatedUser = await User.findByIdAndUpdate(
    params.id,
    body,
    { new: true }
  )

  return NextResponse.json(updatedUser)
}

// DELETE user
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB()

  await User.findByIdAndDelete(params.id)
  return NextResponse.json({ message: 'User deleted' })
}
```

---

## Step 9: Frontend – Display Users

📁 `app/users/page.tsx`

```tsx
'use client'

import { useEffect, useState } from 'react'

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <div key={user._id}>
          {user.name} - {user.email}
        </div>
      ))}
    </div>
  )
}
```

---

## Step 10: How Data Flow Works

1. User interacts with frontend
2. Frontend calls `/api/users`
3. API route connects DB
4. Mongoose model performs query
5. Response sent back

---

## Step 11: Testing CRUD

| Action      | Method | URL            |
| ----------- | ------ | -------------- |
| Get users   | GET    | /api/users     |
| Create user | POST   | /api/users     |
| Update user | PUT    | /api/users/:id |
| Delete user | DELETE | /api/users/:id |

---

## Best Practices

* Always cache DB connection
* Use environment variables
* Separate DB, models, routes
* Validate request body

---

## Common Mistakes

❌ Connecting DB in client components
❌ Creating model multiple times
❌ Hardcoding credentials
❌ Missing error handling

---

## What You Learned

* MongoDB connection in Next.js
* Mongoose models
* API routes CRUD
* Frontend-backend integration

---

## Next Improvements

* Add form for create/update
* Add loading & error UI
* Add validation (Zod)
* Add authentication

---

## Conclusion

This CRUD project represents **real-world full-stack Next.js development**. Once you understand this flow, you can build scalable applications using Next.js and MongoDB.

---
