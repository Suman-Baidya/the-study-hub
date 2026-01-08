# Next.js Advanced Routing – Full Notes

## Introduction

Next.js provides a **powerful routing system** built on file and folder conventions. Beyond simple routes, it includes **advanced routing patterns** such as **intercepting routes**, **parallel routes**, **nested layouts**, and **route groups**. These allow developers to build complex, multi-view, and highly dynamic interfaces with clean architecture.

This document covers **all types of routing in Next.js (App Router)** including examples and best practices.

---

## Types of Routing in Next.js

| Type                | Description                             |
| ------------------- | --------------------------------------- |
| Static Routes       | Simple file-based routes                |
| Dynamic Routes      | Routes with parameters                  |
| Catch-All Routes    | Capture multiple path segments          |
| Parallel Routes     | Multiple routes rendered side by side   |
| Intercepting Routes | Load a route over another (like modals) |

---

## 1. Static Routes

Static routes are created automatically using folder and file structure.

Example:

```
app/about/page.tsx → /about
app/contact/page.tsx → /contact
```

---

## 2. Dynamic Routes

Dynamic routes are defined using brackets `[ ]`.

Example:

```
app/blog/[id]/page.tsx → /blog/1
```

Access parameter:

```tsx
export default function BlogPost({ params }) {
  return <h1>Post ID: {params.id}</h1>
}
```

---

## 3. Catch-All & Optional Catch-All Routes

### Catch-All

```
app/docs/[...slug]/page.tsx
```

Matches:

* /docs/a
* /docs/a/b

### Optional Catch-All

```
app/docs/[[...slug]]/page.tsx
```

Matches:

* /docs
* /docs/a

Access params:

```tsx
export default function Docs({ params }) {
  return <p>{params.slug?.join('/')}</p>
}
```

---

## 4. Parallel Routing

### What is Parallel Routing?

Parallel routing allows you to **render multiple pages at the same time**, side by side, within the same layout.

Useful for:

* Dashboards with multiple panels
* Chats (contact list + conversation)
* Split-view UIs

Parallel routes are defined using **named slots** in parentheses `( )` and prefixed with `@`.

---

### Example: Parallel Routing

Folder structure:

```
app/
 ├── layout.tsx
 ├── @team/
 │   └── page.tsx
 ├── @analytics/
 │   └── page.tsx
 └── page.tsx
```

`layout.tsx`:

```tsx
export default function Layout({ team, analytics }) {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>{team}</div>
      <div style={{ flex: 1 }}>{analytics}</div>
    </div>
  )
}
```

* `@team` and `@analytics` are **named slots**.
* Each renders its own route in parallel.

**Result:**
Displays both `@team/page.tsx` and `@analytics/page.tsx` side by side.

---

### Dynamic Example

You can also make parallel routes dynamic:

```
app/@team/[id]/page.tsx
app/@chat/[conversationId]/page.tsx
```

This allows real-time dashboards or multi-tab interfaces.

---

### Fallback Slots

If a parallel route is missing, you can provide a fallback by adding `default.tsx`.

```
app/@team/default.tsx
```

---

## 5. Intercepting Routes

### What is Intercepting Routing?

Intercepting routes allow one route to **load over another**, without a full navigation.

Example: opening a modal without leaving the current page.

Intercepting routes start with **`(.)` or `(..)` prefixes**.

---

### Syntax for Intercepting Routes

| Pattern    | Meaning                       |
| ---------- | ----------------------------- |
| `(.)`      | Intercept route in same level |
| `(..)`     | Intercept route one level up  |
| `(..)(..)` | Two levels up                 |
| `(...)`    | From root                     |

---

### Example: Modal Using Intercepting Route

Folder structure:

```
app/feed/page.tsx
app/feed/@modal/(.)post/[id]/page.tsx
```

`feed/page.tsx`:

```tsx
export default function Feed() {
  return (
    <div>
      <h1>Feed</h1>
      <a href="/post/1">Open Post</a>
    </div>
  )
}
```

`(.)post/[id]/page.tsx`:

```tsx
export default function PostModal({ params }) {
  return (
    <div className="modal">
      <h2>Post {params.id}</h2>
    </div>
  )
}
```

**Result:** When you navigate to `/post/1`, it opens over the current feed instead of navigating away.

---

### Real Use Cases

* Modal over a feed or gallery
* Drawer navigation
* In-app previews

---

## 6. Nested & Shared Layouts

Each folder can have its own `layout.tsx`. Layouts are **hierarchical and persistent**.

```
app/
 ├── layout.tsx (root)
 └── dashboard/
      ├── layout.tsx
      └── page.tsx
```

Both layouts stack together.

---

## 7. Route Groups (Organizational)

Folders wrapped in parentheses **don’t affect URLs**.

Example:

```
app/(admin)/users/page.tsx → /users
```

Use for separating concerns like `(auth)`, `(marketing)`, `(dashboard)`.

---

## 8. Error Handling per Route

Each route segment can have its own error boundary.

```
app/error.tsx
app/dashboard/error.tsx
```

---

## 9. Loading UI per Route

Each segment can define `loading.tsx` for skeletons or placeholders.

```
app/loading.tsx
app/blog/loading.tsx
```

---

## 10. Combining Advanced Routing

You can combine **parallel**, **intercepting**, and **dynamic routes**.

Example (chat app):

```
app/@contacts/page.tsx
app/@chat/[id]/page.tsx
app/@chat/(.)compose/page.tsx
```

* `@contacts` shows user list
* `@chat/[id]` opens a chat
* `(.)compose` opens a modal for composing message

---

## Best Practices

✅ Use **App Router** for modern routing.
✅ Keep intercepting routes shallow to avoid confusion.
✅ Use **default.tsx** for fallback slots in parallel routing.
✅ Keep route names consistent and meaningful.
✅ Combine **layouts + route groups** for scalability.

---

## Common Mistakes

❌ Using `(.)` incorrectly or without layout context.
❌ Forgetting to define fallback slots in parallel routes.
❌ Placing modals outside the intercept route folder.
❌ Mixing App Router and Pages Router logic.

---

## Conclusion

Next.js routing goes far beyond static and dynamic pages. With **parallel routing**, **intercepting routing**, and **nested layouts**, developers can create modern, multi-view, and modal-based UIs with ease. Mastering these routing patterns is key to building advanced, production-grade Next.js applications.

---
