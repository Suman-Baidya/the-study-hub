# TypeScript Objects – Complete Guide

This note covers **everything about objects in TypeScript**, from basics to advanced patterns. Objects are the **most used data structure** in TypeScript, especially in **React, Next.js, APIs, and backend development**.

---

## 1. What is an Object in TypeScript?

An **object** is a collection of **key–value pairs**, where keys are strings (or symbols) and values have specific types.

```ts
const user = {
  id: 1,
  name: "Suman",
};
```

TypeScript adds **type safety** on top of JavaScript objects.

---

## 2. Object Type Annotation

### Inline Object Type

```ts
let user: { id: number; name: string };

user = { id: 1, name: "Admin" };
```

---

### Object Type with Optional Properties

```ts
let user: {
  id: number;
  name: string;
  age?: number;
};
```

`?` means the property is optional.

---

### Readonly Properties

```ts
let user: {
  readonly id: number;
  name: string;
};
```

❌ Cannot reassign `id`.

---

## 3. Using `type` with Objects

```ts
type User = {
  id: number;
  name: string;
  isAdmin?: boolean;
};

const user: User = {
  id: 1,
  name: "Suman",
};
```

---

## 4. Using `interface` with Objects

```ts
interface User {
  id: number;
  name: string;
}
```

Interfaces are **preferred for object shapes**.

---

## 5. Nested Objects

```ts
interface Address {
  city: string;
  zip: number;
}

interface User {
  id: number;
  name: string;
  address: Address;
}
```

---

## 6. Object Type Inference

```ts
const user = {
  id: 1,
  name: "Suman",
};
```

TypeScript infers:

```ts
{
  id: number;
  name: string;
}
```

---

## 7. Excess Property Checks

```ts
interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Admin",
  age: 25, // ❌ Error
};
```

Helps catch typos early.

---

## 8. Index Signatures (Dynamic Keys)

```ts
interface StringMap {
  [key: string]: string;
}

const headers: StringMap = {
  "Content-Type": "application/json",
};
```

---

## 9. Record Utility Type

```ts
type UserRoles = "admin" | "user";

type RolePermissions = Record<UserRoles, string[]>;

const permissions: RolePermissions = {
  admin: ["read", "write"],
  user: ["read"],
};
```

---

## 10. Object Methods

```ts
interface User {
  name: string;
  greet(): string;
}

const user: User = {
  name: "Suman",
  greet() {
    return `Hello ${this.name}`;
  },
};
```

---

## 11. Object Destructuring with Types

```ts
function printUser({ name, id }: { name: string; id: number }) {
  console.log(name, id);
}
```

---

## 12. Object Spread Operator

```ts
const user = { name: "A", age: 20 };
const updatedUser = { ...user, age: 21 };
```

Type safety is preserved.

---

## 13. Object Type Narrowing

```ts
type Admin = { role: "admin"; permissions: string[] };
type User = { role: "user"; email: string };

type Account = Admin | User;

function handleAccount(account: Account) {
  if (account.role === "admin") {
    account.permissions;
  } else {
    account.email;
  }
}
```

---

## 14. Optional Chaining with Objects

```ts
user.address?.city;
```

---

## 15. Object with `unknown`

```ts
function parse(data: unknown) {
  if (typeof data === "object" && data !== null) {
    console.log("Valid object");
  }
}
```

---

## 16. Object Type Assertions

```ts
const input = document.getElementById("email") as HTMLInputElement;
```

---

## 17. Immutable Objects

```ts
const user = {
  id: 1,
  name: "Suman",
} as const;
```

All properties become **readonly + literal types**.

---

## 18. Mapped Types (Objects from Objects)

```ts
type User = {
  id: number;
  name: string;
};

type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};
```

---

## 19. Utility Types for Objects

| Utility       | Purpose                 |
| ------------- | ----------------------- |
| `Partial<T>`  | All properties optional |
| `Required<T>` | All required            |
| `Readonly<T>` | All readonly            |
| `Pick<T, K>`  | Select properties       |
| `Omit<T, K>`  | Remove properties       |

---

## 20. Common Mistakes

* Using `any` for objects
* Overusing inline object types
* Forgetting optional properties
* Mutating readonly objects

---

## 21. Best Practices

* Prefer `interface` for object shapes
* Use `type` for unions & composition
* Use utility types for transformations
* Avoid `any`
* Enable `strict` mode

---

## 22. Summary

* Objects are central to TypeScript
* Type safety prevents runtime bugs
* Interfaces + utility types scale well
* Proper object typing improves maintainability

---

✅ **Mastering objects = mastering TypeScript**
