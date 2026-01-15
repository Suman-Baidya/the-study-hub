# Next.js API Routes

## Request Headers & Response Headers (Detailed Notes)

In Next.js API Routes, **Request Headers** and **Response Headers** play a crucial role in authentication, content negotiation, caching, security, and communication between frontend and backend.

This document explains **what they are, how they work, how to read and set them**, and real-world examples.

---

## 1. What are Request Headers?

Request headers are **metadata sent by the client (browser or frontend)** to the server with every HTTP request.

They provide information about:

* Who is making the request
* What type of data is being sent
* Authentication details

### Common Request Headers

| Header        | Purpose                  |
| ------------- | ------------------------ |
| Authorization | Auth token (JWT, Bearer) |
| Content-Type  | Format of request body   |
| Accept        | Expected response format |
| User-Agent    | Browser / client info    |
| Cookie        | Session data             |

---

## Reading Request Headers in Next.js (App Router)

Next.js provides the `headers()` helper to read request headers on the server.

### Example: Read Request Headers

```ts
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const headersList = headers()

  const auth = headersList.get('authorization')
  const userAgent = headersList.get('user-agent')

  return NextResponse.json({
    authorization: auth,
    userAgent,
  })
}
```

---

## Reading Headers from Request Object

You can also read headers from the `Request` object.

```ts
export async function POST(req: Request) {
  const contentType = req.headers.get('content-type')

  return Response.json({ contentType })
}
```

---

## Real-World Example: Auth Header Validation

```ts
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const token = headers().get('authorization')

  if (!token || token !== 'Bearer secret123') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({ data: 'Protected data' })
}
```

---

## 2. What are Response Headers?

Response headers are **metadata sent by the server back to the client**.

They control:

* Caching behavior
* Security rules
* Custom server information

---

## Setting Response Headers in Next.js

Response headers can be set using `NextResponse`.

### Example: Set Custom Response Headers

```ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    { success: true },
    {
      headers: {
        'X-App-Name': 'NextJS',
        'Cache-Control': 'no-store',
      },
    }
  )
}
```

---

## Security Response Headers (Important)

### Common Security Headers

| Header                    | Purpose                  |
| ------------------------- | ------------------------ |
| Cache-Control             | Caching rules            |
| Content-Security-Policy   | XSS protection           |
| X-Frame-Options           | Clickjacking protection  |
| Strict-Transport-Security | HTTPS enforcement        |
| X-Content-Type-Options    | MIME sniffing prevention |

---

### Example: Security Headers

```ts
return NextResponse.json(
  { ok: true },
  {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
    },
  }
)
```

---

## 3. Request vs Response Headers (Comparison)

| Feature  | Request Headers | Response Headers |
| -------- | --------------- | ---------------- |
| Sent by  | Client          | Server           |
| Purpose  | Send metadata   | Control behavior |
| Security | Auth info       | Protection rules |
| Access   | Server-side     | Client receives  |

---

## Request Headers in Frontend Fetch

```ts
fetch('/api/posts', {
  headers: {
    Authorization: 'Bearer token123',
    'Content-Type': 'application/json',
  },
})
```

---

## Inspecting Headers (Debugging)

* Browser DevTools → Network tab
* API tools (Postman, Thunder Client)
* Server logs

---

## Best Practices

* Use request headers for auth tokens
* Always validate headers on server
* Use response headers for security
* Avoid exposing sensitive info
* Use caching headers wisely

---

## Common Mistakes

❌ Trusting headers without validation
❌ Sending secrets in client JS
❌ Forgetting cache headers
❌ Using headers instead of cookies for sessions

---

## Key Takeaways

* Request headers send metadata to server
* Response headers control server behavior
* Next.js provides helpers for both
* Headers are critical for security & performance

---

## Conclusion

Understanding request and response headers is essential for building **secure, performant, and scalable** Next.js applications, especially for authentication, APIs, and production systems.

---

**File Type:** Markdown (.md)
