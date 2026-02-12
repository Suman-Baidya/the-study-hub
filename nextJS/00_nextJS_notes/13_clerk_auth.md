# Clerk Authentication in Next.js (Full Notes)

## 1. What is Clerk?

**Clerk** is a complete authentication and user management solution for modern web applications. It provides:

* 🔐 Authentication (Sign up, Sign in, Sign out)
* 👤 User management (profiles, sessions)
* 🌍 Social logins (Google, GitHub, etc.)
* 🔑 Passwordless & OTP login
* 🛡️ Built-in security (JWTs, session handling)
* ⚡ Seamless integration with **Next.js App Router & Pages Router**

Clerk removes the need to manually handle:

* Password hashing
* Token storage
* OAuth configuration
* Session security

---

## 2. Why Use Clerk with Next.js?

Clerk is highly optimized for Next.js and provides:

* Native **App Router** support
* Middleware-based route protection
* Server Components compatibility
* Client-side & server-side authentication APIs
* Pre-built UI components

---

## 3. Prerequisites

Before starting:

* Node.js 18+
* Next.js 13+ (App Router recommended)
* A Clerk account ([https://clerk.com](https://clerk.com))

---

## 4. Installing Clerk in Next.js

### 4.1 Create a Next.js App

```bash
npx create-next-app@latest clerk-nextjs
cd clerk-nextjs
```

### 4.2 Install Clerk Package

```bash
npm install @clerk/nextjs
```

---

## 5. Clerk Dashboard Setup

1. Go to **Clerk Dashboard**
2. Create a new application
3. Choose authentication methods (Email, Google, GitHub, etc.)
4. Copy your API keys

You will get:

* **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY**
* **CLERK_SECRET_KEY**

---

## 6. Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
```

⚠️ Never expose `CLERK_SECRET_KEY` to the client

---

## 7. Clerk Provider Setup

### 7.1 App Router Setup (Recommended)

Wrap your app with `ClerkProvider`.

**`app/layout.tsx`**

```tsx
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
```

---

## 8. Clerk Authentication Components

Clerk provides ready-made UI components.

### 8.1 Sign In Page

```tsx
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <SignIn />
}
```

### 8.2 Sign Up Page

```tsx
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <SignUp />
}
```

### 8.3 User Button (Profile Menu)

```tsx
import { UserButton } from '@clerk/nextjs'

export default function Navbar() {
  return <UserButton afterSignOutUrl="/" />
}
```

---

## 9. Authentication State (Client Side)

### 9.1 `useUser()` Hook

```tsx
'use client'

import { useUser } from '@clerk/nextjs'

export default function Dashboard() {
  const { user, isLoaded, isSignedIn } = useUser()

  if (!isLoaded) return <p>Loading...</p>
  if (!isSignedIn) return <p>Not signed in</p>

  return <h1>Welcome, {user.firstName}</h1>
}
```

---

## 10. Protecting Routes

### 10.1 Middleware Protection (Recommended)

Create `middleware.ts` in root:

```ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/profile(.*)'
])

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect()
})

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
}
```

---

## 11. Server-Side Authentication

### 11.1 `auth()` in Server Components

```tsx
import { auth } from '@clerk/nextjs/server'

export default function ServerPage() {
  const { userId } = auth()

  if (!userId) return <p>Unauthorized</p>

  return <p>User ID: {userId}</p>
}
```

---

## 12. Accessing User Data on Server

```ts
import { currentUser } from '@clerk/nextjs/server'

export async function GET() {
  const user = await currentUser()

  return Response.json({
    id: user?.id,
    email: user?.emailAddresses[0]?.emailAddress,
  })
}
```

---

## 13. Role-Based Access Control (RBAC)

### 13.1 Using Metadata

Set role in Clerk Dashboard → User Metadata:

```json
{
  "role": "admin"
}
```

### 13.2 Check Role

```ts
const user = await currentUser()

if (user?.publicMetadata.role !== 'admin') {
  throw new Error('Access denied')
}
```

---

## 14. Sessions in Clerk

* Clerk manages sessions automatically
* Supports multiple active sessions
* Secure HTTP-only cookies

Useful APIs:

```ts
import { auth } from '@clerk/nextjs/server'

const { sessionId, userId } = auth()
```

---

## 15. Sign Out

```tsx
import { SignOutButton } from '@clerk/nextjs'

export default function Logout() {
  return <SignOutButton />
}
```

---

## 16. Custom Sign In / Sign Up Pages

You can redirect Clerk to custom routes:

```tsx
<SignIn path="/sign-in" routing="path" />
<SignUp path="/sign-up" routing="path" />
```

---

## 17. OAuth & Social Login

Enable providers from Clerk Dashboard:

* Google
* GitHub
* Facebook
* Apple

No extra frontend code required 🎉

---

## 18. Security Best Practices

* Never expose secret keys
* Always protect sensitive routes with middleware
* Use server-side auth for APIs
* Use HTTPS in production

---

## 19. Common Errors & Fixes

### ❌ Hydration Error

* Ensure `use client` is used where needed

### ❌ Middleware Not Working

* Check matcher configuration

### ❌ User is null

* Use `isLoaded` before accessing user

---

## 20. Clerk vs NextAuth

| Feature        | Clerk     | NextAuth |
| -------------- | --------- | -------- |
| UI Components  | ✅ Yes     | ❌ No     |
| Setup Time     | Very Fast | Moderate |
| OAuth Config   | Minimal   | Manual   |
| User Dashboard | Built-in  | None     |

---

## 21. When to Use Clerk?

Use Clerk if:

* You want fast authentication setup
* You need social login easily
* You want minimal backend auth logic

---

## 22. Summary

* Clerk is a powerful auth solution for Next.js
* Works perfectly with App Router
* Provides UI + backend security
* Saves huge development time

---
