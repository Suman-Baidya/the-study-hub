# Getting Started with Next.js

## Introduction

Next.js is a powerful React framework used to build **fast, scalable, and SEO-friendly** web applications. Before building advanced features, it is important to understand **how to install Next.js, what is required to start, how to write a Hello World app, and how the folder structure works**.

This document covers **everything a beginner needs to start with Next.js**.

---

## Requirements to Start with Next.js

Before installing Next.js, ensure the following are installed on your system:

### 1. Node.js

* Version **18.17 or later** is recommended
* Check version:

```bash
node -v
```

### 2. Package Manager (One of the following)

* npm (comes with Node.js)
* yarn
* pnpm

Check npm:

```bash
npm -v
```

### 3. Basic Knowledge (Recommended)

* HTML & CSS
* JavaScript (ES6+)
* React fundamentals

---

## Installing Next.js (Create a New Project)

The easiest way to start is using **create-next-app**.

### Using npm

```bash
npx create-next-app@latest my-next-app
```

### Using yarn

```bash
yarn create next-app my-next-app
```

### Using pnpm

```bash
pnpm create next-app my-next-app
```

During setup, you will be asked:

* Use TypeScript? → Yes (recommended)
* Use ESLint? → Yes
* Use Tailwind CSS? → Optional
* Use App Router? → Yes (recommended)

---

## Starting the Development Server

Move into the project folder:

```bash
cd my-next-app
```

Start the server:

```bash
npm run dev
```

Open browser and visit:

```
http://localhost:3000
```

---

## Writing Your First Hello World App

### Using App Router (Recommended)

File:

```
app/page.tsx
```

```tsx
export default function Home() {
  return <h1>Hello World</h1>
}
```

Save the file and refresh the browser.

---

### Using Pages Router (Legacy)

File:

```
pages/index.js
```

```js
export default function Home() {
  return <h1>Hello World</h1>
}
```

---

## Understanding Next.js Folder Structure (App Router)

A typical Next.js project using App Router looks like this:

```
my-next-app/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── globals.css
├── public/
├── components/
├── styles/
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## Important Folders Explained

### 1. app/

* Core routing directory
* Uses **file-based routing**

Common files:

* `page.tsx` → Page UI
* `layout.tsx` → Shared layout
* `loading.tsx` → Loading state
* `error.tsx` → Error handling
* `not-found.tsx` → 404 page

---

### 2. public/

* Stores static assets

Example:

```
public/logo.png → /logo.png
```

---

### 3. components/

* Reusable UI components
* Buttons, Navbar, Footer, Cards

---

### 4. styles/

* Global or modular CSS files

---

### 5. next.config.js

* Next.js configuration file
* Used for images, redirects, rewrites

---

### 6. package.json

* Project dependencies
* Scripts like `dev`, `build`, `start`

---

## Understanding Routing via Folder Structure

### Basic Route

```
app/about/page.tsx → /about
```

### Nested Route

```
app/blog/post/page.tsx → /blog/post
```

### Dynamic Route

```
app/posts/[id]/page.tsx → /posts/1
```

---

## Client vs Server Components (Basic Understanding)

* By default, components are **Server Components**
* To use browser APIs, add:

```tsx
'use client'
```

Use client components for:

* onClick events
* useState, useEffect

---

## Common Scripts Explained

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

* `dev` → Development mode
* `build` → Production build
* `start` → Run production server

---

## Key Takeaways

* Next.js requires Node.js
* `create-next-app` is the easiest setup
* App Router is the modern standard
* File-based routing simplifies navigation
* Folder structure is predictable and scalable

---

## Conclusion

Starting with Next.js is simple and beginner-friendly. By understanding the installation process, basic requirements, Hello World example, and folder structure, you build a strong foundation for creating modern web applications.

---
