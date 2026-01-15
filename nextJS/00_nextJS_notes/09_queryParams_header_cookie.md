### Next.js API Routes

# Query Parameters, Headers, and Cookies

In Next.js API Routes (App Router), handling **Query Parameters**, **Headers**, and **Cookies** is essential for building real-world backend features like filtering data, authentication, sessions, and personalization.

This document explains each concept in detail with **clear examples and use cases**.

---

## 1. Query Parameters

### What are Query Parameters?

Query parameters are values appended to the URL to send **optional or filtering data** to the server.

Example URL:

```
/api/posts?page=1&limit=10
```

Here:

* `page = 1`
* `limit = 10`

---

### Accessing Query Parameters in API Routes

In App Router API routes, query parameters are accessed using the `URL` object.

### Example: GET with Query Parameters

**File:**

```
app/api/posts/route.ts
```

```ts
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const page = searchParams.get('page')
  const limit = searchParams.get('limit')

  return NextResponse.json({
    page,
    limit,
  })
}
```

---

### Common Use Cases for Query Parameters

* Pagination (`page`, `limit`)
* Filtering (`category=car`)
* Sorting (`sort=price`)
* Searching (`q=nextjs`)

---

## 2. Headers

### What are Headers?

Headers are **metadata** sent with HTTP requests and responses.

They are commonly used for:

* Authentication tokens
* Content type
* Custom metadata

---

### Reading Headers in API Routes

Next.js provides a `headers()` helper.

### Example: Reading Request Headers

```ts
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const headersList = headers()
  const authToken = headersList.get('authorization')

  return NextResponse.json({
    token: authToken,
  })
}
```

---

### Setting Response Headers

```ts
return NextResponse.json(
  { success: true },
  {
    headers: {
      'X-Custom-Header': 'NextJS',
    },
  }
)
```

---

### Common Headers Examples

| Header        | Purpose      |
| ------------- | ------------ |
| Authorization | Auth token   |
| Content-Type  | Data format  |
| User-Agent    | Client info  |
| Cookie        | Session data |

---

## 3. Cookies

### What are Cookies?

Cookies are small pieces of data stored in the browser and automatically sent with requests.

Used mainly for:

* Authentication
* Sessions Management
* Personalization
* Preferences

---

### Reading Cookies in API Routes

Next.js provides a `cookies()` helper.

```ts
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const cookieStore = cookies()
  const user = cookieStore.get('user')

  return NextResponse.json({
    user: user?.value,
  })
}
```

---

### Setting Cookies in API Routes

```ts
import { NextResponse } from 'next/server'

export async function POST() {
  const response = NextResponse.json({ success: true })

  response.cookies.set('token', 'abc123', {
    httpOnly: true,
    secure: true,
    path: '/',
    maxAge: 60 * 60,
  })

  return response
}
```

---

### Important Cookie Options

| Option   | Description           |
| -------- | --------------------- |
| httpOnly | Not accessible via JS |
| secure   | HTTPS only            |
| path     | Cookie scope          |
| maxAge   | Expiry time           |
| sameSite | CSRF protection       |

---

## 4. Real-World Example (Auth Flow)

### Login API

```ts
export async function POST() {
  const response = NextResponse.json({ loggedIn: true })

  response.cookies.set('session', 'user-session-id', {
    httpOnly: true,
    secure: true,
  })

  return response
}
```

### Protected API

```ts
import { cookies } from 'next/headers'

export async function GET() {
  const session = cookies().get('session')

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({ data: 'Protected data' })
}
```

---

## Query Params vs Headers vs Cookies (Comparison)

| Feature    | Query Params | Headers     | Cookies  |
| ---------- | ------------ | ----------- | -------- |
| Visibility | URL          | Hidden      | Hidden   |
| Security   | Low          | Medium      | High     |
| Size       | Small        | Medium      | Small    |
| Use Case   | Filters      | Auth tokens | Sessions |

---

## Best Practices

* Use **query params** for filtering and pagination
* Use **headers** for auth tokens (JWT)
* Use **cookies** for sessions
* Never store sensitive data in query params
* Use `httpOnly` cookies for security

---

## Common Mistakes

❌ Putting secrets in query params
❌ Forgetting cookie security options
❌ Relying on headers in client components
❌ Not validating query values

---

## Key Takeaways

* Query parameters control request behavior
* Headers carry metadata and auth info
* Cookies manage sessions securely
* Next.js provides helpers for all three

---

## Conclusion

Mastering query parameters, headers, and cookies is essential for building **secure, scalable, and real-world** Next.js backend systems.

---
