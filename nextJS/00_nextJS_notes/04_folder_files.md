# Next.js Folder & File Conventions

## Introduction

Next.js follows a **strict folder and file convention**. Understanding these conventions is **extremely important**, because routing, layouts, loading states, and error handling all depend on **file and folder names**.

This document explains:

* Which folders create routes
* Reserved files and their purpose
* How routing works internally
* Best practices for project structure

---

## Types of Folders and Files in Next.js

Understanding the **types of folders and files** in Next.js helps you clearly separate routing logic, UI components, backend logic, and utilities.

---

### 1. Routing Folders

These folders **create routes** automatically.

* `app/` → Modern routing system (recommended)
* `pages/` → Legacy routing system

Only specific files inside these folders actually generate routes.

---

### 2. Reserved Routing Files (Special Meaning)

These files have **special behavior** and are handled internally by Next.js.

| File               | Type           | Purpose                 |
| ------------------ | -------------- | ----------------------- |
| `page.tsx`         | Route file     | Creates a public page   |
| `layout.tsx`       | Layout file    | Persistent shared UI    |
| `loading.tsx`      | UI state       | Loading indicator       |
| `error.tsx`        | Error boundary | Handles runtime errors  |
| `not-found.tsx`    | Error page     | 404 handling            |
| `route.ts`         | Backend        | API endpoints           |
| `global-error.tsx` | Global error   | App-wide crash handling |

---

### 3. Dynamic Route Folders

Used for **dynamic URLs**.

| Folder Type | Example       | URL         |
| ----------- | ------------- | ----------- |
| Dynamic     | `[id]`        | `/posts/1`  |
| Catch-all   | `[...slug]`   | `/docs/a/b` |
| Optional    | `[[...slug]]` | `/docs`     |

---

### 4. Route Group Folders

Folders wrapped in parentheses **do not affect URLs**.

```
(app)/login/page.tsx → /login
```

Used only for organization.

---

### 5. Non-Routing Folders (Safe Folders)

These folders **never create routes**, even if placed inside `app/`.

Common examples:

```
components/
lib/
utils/
services/
hooks/
constants/
```

Used for reusable logic and UI.

---

### 6. Configuration Files

Used to configure project behavior.

| File             | Purpose                |
| ---------------- | ---------------------- |
| `next.config.js` | Next.js configuration  |
| `tsconfig.json`  | TypeScript config      |
| `package.json`   | Dependencies & scripts |
| `.env`           | Environment variables  |

---

### 7. Styling Files

| File/Folder    | Purpose          |
| -------------- | ---------------- |
| `globals.css`  | Global styles    |
| `*.module.css` | Scoped styles    |
| `styles/`      | CSS organization |

---

### 8. Static Asset Folder

#### `public/`

Stores static files such as images and fonts.

```
public/logo.png → /logo.png
```

---

### 9. Metadata & SEO Files

| File       | Purpose          |
| ---------- | ---------------- |
| `metadata` | SEO config       |
| `head.tsx` | Custom head tags |

---

### 10. Test & Utility Files

Non-production helper files:

```
__tests__/
*.test.ts
*.spec.ts
```

---

## Core Routing Directories in Next.js

Next.js supports **two routing systems**, but modern projects should focus on **App Router**.

| Directory | Purpose                             |
| --------- | ----------------------------------- |
| `app/`    | Modern routing system (recommended) |
| `pages/`  | Legacy routing system               |

⚠️ You should **not mix routing logic** between both unnecessarily.

---

## The `app/` Directory (App Router)

The `app/` folder is the **heart of routing** in modern Next.js.

### Important Rule

> **Only folders inside `app/` create routes**.

Example:

```
app/page.tsx        → /
app/about/page.tsx  → /about
```

---

## Route-Creating Files

### `page.tsx`

* Defines a **public route**
* Required to make a folder a route

```
app/blog/page.tsx → /blog
```

Without `page.tsx`, the folder does **not** become a route.

---

## Layout System (Reserved Files)

### `layout.tsx`

* Shared UI across routes
* Persists during navigation

```
app/layout.tsx
app/dashboard/layout.tsx
```

```tsx
export default function Layout({ children }) {
  return <>{children}</>
}
```

📌 Layouts **do not re-render** on navigation.

---

## Global Styles

### `globals.css`

* Global CSS file
* Imported inside `app/layout.tsx`

```tsx
import './globals.css'
```

---

## Loading State

### `loading.tsx`

* Automatically shown while route loads
* Works per route level

```
app/loading.tsx
app/blog/loading.tsx
```

---

## Error Handling

### `error.tsx`

* Route-level error boundary
* Catches runtime errors

```
app/error.tsx
```

### `global-error.tsx`

* Catches **entire app errors**

---

## Not Found (404 Handling)

### `not-found.tsx`

* Custom 404 page

```
app/not-found.tsx
```

---

## Route Groups (No URL Impact)

### `(folderName)`

Used for **organizing files** without affecting the URL.

```
app/(auth)/login/page.tsx → /login
app/(auth)/register/page.tsx → /register
```

---

## Dynamic Routes

### `[param]`

Used for dynamic URL segments.

```
app/posts/[id]/page.tsx → /posts/1
```

Access value:

```tsx
export default function Page({ params }) {
  return <p>{params.id}</p>
}
```

---

## Catch-All Routes

### `[...slug]`

```
app/docs/[...slug]/page.tsx
```

Matches:

* /docs/a
* /docs/a/b

---

### Optional Catch-All

### `[[...slug]]`

Matches:

* /docs
* /docs/a

---

## Route Segments & URL Mapping

| Folder/File              | URL       |
| ------------------------ | --------- |
| `app/page.tsx`           | `/`       |
| `app/blog/page.tsx`      | `/blog`   |
| `app/blog/[id]/page.tsx` | `/blog/1` |

---

## API Routes (Backend)

### `route.ts`

* Used to create API endpoints
* Replaces `pages/api/*`

```
app/api/posts/route.ts → /api/posts
```

```ts
export async function GET() {
  return Response.json({ message: 'Hello API' })
}
```

---

## Metadata Files (SEO)

### `metadata`

* SEO-friendly metadata

```ts
export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
}
```

### `head.tsx` (Optional)

* Custom head tags per route

---

## Special Reserved Files Summary

| File             | Purpose        |
| ---------------- | -------------- |
| page.tsx         | Creates route  |
| layout.tsx       | Shared layout  |
| loading.tsx      | Loading UI     |
| error.tsx        | Error handling |
| not-found.tsx    | 404 page       |
| route.ts         | API route      |
| global-error.tsx | App-wide error |

---

## Non-Routing Folders (Safe to Use Anywhere)

These folders **do not create routes**:

```
components/
lib/
utils/
services/
hooks/
styles/
```

Best practice:

* Keep business logic outside `app/` where possible

---

## Public Folder

### `public/`

* Static files

```
public/logo.png → /logo.png
```

---

## Best Practices (Important)

✅ Use App Router for new projects
✅ Keep routes minimal
✅ Use route groups for organization
✅ Avoid deeply nested routes
✅ Separate UI and logic

---

## Common Mistakes

❌ Forgetting `page.tsx`
❌ Mixing App Router & Pages Router
❌ Overusing client components
❌ Placing business logic inside routes

---

## Key Takeaways

* Folder & file names control routing
* Reserved files have special behavior
* Route groups do not affect URLs
* Understanding conventions avoids bugs

---

## Conclusion

Next.js folder and file conventions are **powerful but strict**. Once mastered, they provide a clean, scalable, and maintainable architecture for modern web applications.

---
