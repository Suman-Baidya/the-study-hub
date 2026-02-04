# Database Connection in Next.js

## Complete Step-by-Step Guide (App Router)

Next.js is a **full-stack framework**, meaning you can connect and use databases directly inside the same project. This guide explains **how database connections work in Next.js**, best practices, and a **step-by-step real example**.

---

## 1. Where Database Logic Lives in Next.js

Database connections should run **only on the server**.

✅ Correct places:

* API Routes (`app/api/**/route.ts`)
* Server Components
* Server Actions
* `lib/` or `db/` folder

❌ Never in:

* Client Components
* Browser-side code

---

## 2. Common Databases Used with Next.js

| Database   | Type      | Usage                   |
| ---------- | --------- | ----------------------- |
| MongoDB    | NoSQL     | Startups, flexible data |
| PostgreSQL | SQL       | Production, relational  |
| MySQL      | SQL       | Traditional apps        |
| SQLite     | SQL       | Small apps              |
| Redis      | Key-Value | Caching                 |

---

## 3. Recommended Project Structure

```
app/
 ├─ api/
 │   └─ users/route.ts
lib/
 ├─ db.ts
 └─ models/
     └─ user.ts
.env.local
```

---

## 4. Environment Variables Setup

Create `.env.local` file:

```
DATABASE_URL=mongodb+srv://user:password@cluster/dbname
```

Access it only on server:

```ts
process.env.DATABASE_URL
```

---

## 5. Example 1: MongoDB Connection (Step-by-Step)

### Step 1: Install Dependencies

```
npm install mongoose
```

---

### Step 2: Create Database Connection File

📁 `lib/db.ts`

```ts
import mongoose from 'mongoose'

const MONGODB_URI = process.env.DATABASE_URL!

if (!MONGODB_URI) {
  throw new Error('Please define DATABASE_URL')
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then(m => m)
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect
```

---

### Step 3: Create a Model

📁 `lib/models/user.ts`

```ts
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
```

---

### Step 4: Use DB in API Route

📁 `app/api/users/route.ts`

```ts
import { NextResponse } from 'next/server'
import dbConnect from '@/lib/db'
import User from '@/lib/models/user'

export async function GET() {
  await dbConnect()
  const users = await User.find()

  return NextResponse.json(users)
}

export async function POST(req: Request) {
  await dbConnect()
  const body = await req.json()

  const user = await User.create(body)
  return NextResponse.json(user, { status: 201 })
}
```

---

## 6. Example 2: PostgreSQL using Prisma

### Step 1: Install Prisma

```
npm install prisma @prisma/client
```

```
npx prisma init
```

---

### Step 2: Configure Database

📁 `prisma/schema.prisma`

```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```

---

### Step 3: Run Migration

```
npx prisma migrate dev
```

---

### Step 4: Prisma Client Setup

📁 `lib/prisma.ts`

```ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as any

export const prisma =
  globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
```

---

### Step 5: Use Prisma in API Route

```ts
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}
```

---

## 7. Server Components with Database

```ts
import dbConnect from '@/lib/db'
import User from '@/lib/models/user'

export default async function Page() {
  await dbConnect()
  const users = await User.find()

  return <pre>{JSON.stringify(users, null, 2)}</pre>
}
```

---

## 8. Important Best Practices

* Use **connection caching** (serverless)
* Never expose DB credentials
* Use `.env.local`
* Separate DB logic in `lib/`
* Prefer API routes or Server Actions

---

## 9. Common Mistakes

❌ Connecting DB inside Client Component
❌ Creating new DB connection per request
❌ Hardcoding credentials
❌ Skipping error handling

---

## 10. Database Connection Flow

1. Request hits API route
2. DB connection is established
3. Query is executed
4. Response returned

---

## Key Takeaways

* Next.js supports full backend DB access
* DB runs only on server
* MongoDB & Prisma are common choices
* Correct structure avoids performance issues

---

## Conclusion

Connecting databases in Next.js is straightforward when following proper server-side patterns. With the right structure and best practices, Next.js becomes a powerful full-stack framework.

---
