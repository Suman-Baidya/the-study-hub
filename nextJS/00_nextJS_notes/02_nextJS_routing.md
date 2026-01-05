# Next.js Routing – Full Notes

## Introduction

Routing is the backbone of any web application. It defines how users navigate between pages and how URLs map to UI components.

Next.js provides **built-in file-based routing**, eliminating the need for external routing libraries.

There are **two routing systems** in Next.js:

1. **Pages Router** (`pages/` directory) – Legacy
2. **App Router** (`app/` directory) – Modern & Recommended

---

## 1. Pages Router (Legacy Routing System)

### What is Pages Router?

The Pages Router uses the `pages/` directory. Each file automatically becomes a route.

Example structure:

```
pages/index.js        → /
pages/about.js        → /about
pages/contact.js      → /contact
```

---

### Basic Page Example

```js
export default function About() {
  return <h1>About Page</h1>
}
```

---

### Nested Routing

```
pages/blog/index.js   → /blog
pages/blog/post.js    → /blog/post
```

---

### Dynamic Routing

Used when URL segments are dynamic.

```
pages/posts/[id].js   → /posts/1
```

```js
import { useRouter } from 'next/router'

export default function Post() {
  const { id } = useRouter().query
  return <h1>Post ID: {id}</h1>
}
```

---

### Catch-All Routes

```
pages/docs/[...slug].js
```

Supports:

* /docs/a
* /docs/a/b

---

### Navigation (Pages Router)

```js
import Link from 'next/link'

<Link href="/about">About</Link>
```

Programmatic navigation:

```js
router.push('/contact')
```

---

### Data Fetching in Pages Router

| Method             | Description              |
| ------------------ | ------------------------ |
| getStaticProps     | Build-time rendering     |
| getServerSideProps | Runs on every request    |
| getStaticPaths     | For dynamic static pages |

---

### Limitations of Pages Router

* No built-in layouts
* No React Server Components
* Manual loading & error states
* Less scalable for large apps

---

## 2. App Router (Modern Routing System)

### What is App Router?

Introduced in **Next.js 13**, App Router is built on **React Server Components** and provides a more powerful, scalable routing system.

It uses the `app/` directory.

---

### Basic Routing

```
app/page.tsx        → /
app/about/page.tsx  → /about
```

```tsx
export default function AboutPage() {
  return <h1>About Page</h1>
}
```

---

### Nested Routing

```
app/dashboard/page.tsx
app/dashboard/settings/page.tsx
```

Routes:

* /dashboard
* /dashboard/settings

---

### Layouts (Key Feature)

Layouts persist across route changes.

```
app/layout.tsx
app/dashboard/layout.tsx
```

```tsx
export default function DashboardLayout({ children }) {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  )
}
```

---

### Dynamic Routing (App Router)

```
app/posts/[id]/page.tsx
```

```tsx
export default function Post({ params }) {
  return <h1>Post ID: {params.id}</h1>
}
```

---

### Catch-All & Optional Routes

```
[...slug]   → Catch-all
[[...slug]] → Optional catch-all
```

---

### Route Groups (No URL Change)

```
app/(auth)/login/page.tsx
app/(auth)/register/page.tsx
```

URLs:

* /login
* /register

Used for **project organization only**.

---

### Navigation (App Router)

```tsx
import Link from 'next/link'
```

Programmatic navigation:

```tsx
import { useRouter } from 'next/navigation'
router.push('/login')
```

---

### Loading UI

```
app/loading.tsx
```

Automatically shown while route is loading.

---

### Error Handling

```
app/error.tsx
app/not-found.tsx
```

Provides route-level error boundaries.

---

### Data Fetching (App Router)

Uses native `fetch` with caching:

```ts
await fetch(url, { cache: 'no-store' })
```

Supports:

* Static Rendering
* Dynamic Rendering
* Incremental Static Regeneration (ISR)

---

### Server vs Client Components

* Default: **Server Components**
* Use client components when needed

```tsx
'use client'
```

---

## App Router vs Pages Router (Comparison)

| Feature           | Pages Router   | App Router  |
| ----------------- | -------------- | ----------- |
| Directory         | pages/         | app/        |
| Layouts           | ❌              | ✅           |
| Server Components | ❌              | ✅           |
| Loading UI        | ❌              | ✅           |
| Error Handling    | Basic          | Advanced    |
| Data Fetching     | getStaticProps | fetch-based |
| Recommended       | ❌              | ✅           |

---

## Which Router Should You Use?

### Pages Router

* Legacy projects
* Small demos

### App Router

* New projects
* Production apps
* SEO & performance-focused apps

---

## Key Takeaways

* Next.js uses **file-based routing**
* App Router is the **future of Next.js**
* Layouts and server components improve performance
* Pages Router is still supported but not recommended for new apps

---

## Conclusion

The **App Router** represents the modern approach to building scalable, high-performance Next.js applications. While Pages Router remains available for backward compatibility, **App Router should be the default choice for all new development**.

---
