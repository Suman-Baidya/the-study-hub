# TypeScript Advanced Types – Assertion, `unknown`, and `never`

This note explains **three advanced but very important TypeScript concepts** that help you write **safe, predictable, and bug‑free code**:

* Type Assertions
* `unknown` type
* `never` type

These are heavily used in **real-world apps**, **libraries**, and **interview questions**.

---

## 1. Type Assertions

### What is a Type Assertion?

A **type assertion** tells TypeScript:

> “Trust me, I know the type of this value better than you.”

It **does not change the runtime value**, it only affects the compiler.

---

### Syntax of Type Assertions

#### Angle Bracket Syntax (Not for JSX)

```ts
let value: unknown = "hello";
let str = <string>value;
```

#### `as` Syntax (Recommended)

```ts
let value: unknown = "hello";
let str = value as string;
```

✅ **Use `as` syntax**, especially in React (`.tsx`).

---

### Example: DOM Element Assertion

```ts
const input = document.getElementById("email") as HTMLInputElement;

input.value = "test@example.com";
```

Why needed?

* `getElementById` returns `HTMLElement | null`
* TypeScript doesn’t know the exact element type

---

### Unsafe Assertion (Be Careful ❌)

```ts
let value: unknown = 10;

let text = value as string;
console.log(text.toUpperCase()); // Runtime error
```

⚠️ Type assertions **can hide bugs** if used incorrectly.

---

### When to Use Type Assertions

* DOM manipulation
* Third-party libraries without types
* Narrowing `unknown` after checks

---

## 2. The `unknown` Type

### What is `unknown`?

`unknown` is a **type-safe alternative to `any`**.

* You can assign *anything* to `unknown`
* You **cannot use** it without narrowing

---

### `unknown` vs `any`

| Feature           | `any` | `unknown` |
| ----------------- | ----- | --------- |
| Assign any value  | ✅     | ✅         |
| Access properties | ✅     | ❌         |
| Call functions    | ✅     | ❌         |
| Type safety       | ❌     | ✅         |

---

### Basic Example

```ts
let data: unknown;

data = "hello";
data = 42;
```

❌ Not allowed:

```ts
data.toUpperCase(); // Error
```

---

### Narrowing `unknown`

```ts
function printValue(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

---

### `unknown` with Objects

```ts
function handleResponse(res: unknown) {
  if (typeof res === "object" && res !== null) {
    console.log("Valid object");
  }
}
```

---

### Real-World Use Cases for `unknown`

* API responses
* `JSON.parse()` result
* User input
* Catch block errors

```ts
try {
  JSON.parse("invalid");
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}
```

---

## 3. The `never` Type

### What is `never`?

`never` represents **values that never occur**.

A function returns `never` when it:

* Throws an error
* Runs forever

---

### Example: Function That Never Returns

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

---

### Infinite Loop Example

```ts
function infiniteLoop(): never {
  while (true) {}
}
```

---

### `never` in Type Narrowing

Used to ensure **all cases are handled**.

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number };

function assertNever(value: never): never {
  throw new Error("Unhandled case");
}

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
    default:
      return assertNever(shape); // Compile-time safety
  }
}
```

---

### `never` vs `void`

| Type    | Meaning                  |
| ------- | ------------------------ |
| `void`  | Function returns nothing |
| `never` | Function never finishes  |

---

## 4. Assertions vs Type Guards

| Feature         | Type Assertion | Type Guard |
| --------------- | -------------- | ---------- |
| Runtime check   | ❌ No           | ✅ Yes      |
| Compiler safety | ⚠️ Risky       | ✅ Safe     |
| Preferred       | ❌ Less         | ✅ More     |

> Prefer **type guards** over assertions whenever possible.

---

## 5. Best Practices

* Avoid blind type assertions
* Use `unknown` instead of `any`
* Always narrow `unknown`
* Use `never` for exhaustive checks
* Let TypeScript infer when possible

---

## 6. Summary

* Type assertions override the compiler
* `unknown` forces safe checks
* `never` ensures impossible states stay impossible

---
