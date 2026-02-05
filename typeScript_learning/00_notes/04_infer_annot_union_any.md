# TypeScript Types – Type Inference, Type Annotations, Unions & `any`

This note explains **how TypeScript understands types**, when you should write types explicitly, and how to use unions and `any` correctly with **real-world examples**.

---

## 1. Type Inference

### What is Type Inference?

**Type inference** means TypeScript automatically figures out the type of a variable, function return value, or expression **without you explicitly writing the type**.

> TypeScript tries to be smart so you write **less code but stay type-safe**.

---

### 1.1 Variable Type Inference

```ts
let count = 10;
```

TypeScript infers:

```ts
let count: number;
```

❌ This will cause an error:

```ts
count = "ten"; // Error: string is not assignable to number
```

---

### 1.2 Function Return Type Inference

```ts
function add(a: number, b: number) {
  return a + b;
}
```

TypeScript infers the return type as:

```ts
(number)
```

---

### 1.3 Array Inference

```ts
let numbers = [1, 2, 3];
```

Inferred as:

```ts
number[]
```

---

### 1.4 Object Inference

```ts
let user = {
  id: 1,
  name: "Suman",
};
```

Inferred type:

```ts
{
  id: number;
  name: string;
}
```

---

### 1.5 When Inference is Enough

* Local variables
* Simple functions
* Initialized values

✅ **Prefer inference when it’s clear**

---

## 2. Type Annotations

### What are Type Annotations?

**Type annotations** are explicit type declarations written by the developer.

> You tell TypeScript exactly what type something should be.

---

### 2.1 Variable Annotations

```ts
let age: number = 25;
let username: string = "admin";
let isLoggedIn: boolean = true;
```

---

### 2.2 Function Parameter Annotations

```ts
function greet(name: string) {
  return `Hello, ${name}`;
}
```

❌ Without annotation:

```ts
function greet(name) { }
// name is 'any'
```

---

### 2.3 Function Return Type Annotations

```ts
function multiply(a: number, b: number): number {
  return a * b;
}
```

Useful when:

* Function is complex
* Public APIs
* Preventing accidental return changes

---

### 2.4 Object Type Annotations

```ts
let user: {
  id: number;
  name: string;
  isAdmin?: boolean;
};
```

---

### 2.5 Array Annotations

```ts
let scores: number[] = [90, 80, 70];
```

---

### When Annotations Are Necessary

* Function parameters
* Variables without initial value
* Public functions & APIs
* Complex objects

---

## 3. Union Types

### What are Union Types?

A **union type** allows a value to be **one of multiple types**.

Syntax:

```ts
TypeA | TypeB
```

---

### 3.1 Basic Union Example

```ts
let id: number | string;

id = 101;
id = "A101";
```

❌ Invalid:

```ts
id = true; // Error
```

---

### 3.2 Union in Functions (Real Example)

```ts
function printId(id: number | string) {
  console.log(id);
}
```

---

### 3.3 Type Narrowing with Unions

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}
```

TypeScript **narrows the type automatically**.

---

### 3.4 Union with Objects

```ts
type SuccessResponse = {
  status: "success";
  data: string;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;
```

---

### 3.5 Union with Arrays

```ts
let values: (number | string)[] = [1, "two", 3];
```

---

## 4. The `any` Type

### What is `any`?

`any` disables TypeScript’s type checking completely.

> Using `any` = writing plain JavaScript inside TypeScript

---

### 4.1 Example of `any`

```ts
let value: any = 10;

value = "hello";
value = true;
value();
```

❌ No errors, but **very dangerous**

---

### 4.2 Where `any` Comes From

* Missing type annotations
* JavaScript files
* Un-typed third-party libraries

Example:

```ts
let data; // inferred as any
```

---

### 4.3 Real-World Problem with `any`

```ts
function processUser(user: any) {
  console.log(user.name.toUpperCase());
}

processUser(null); // Runtime crash
```

---

### 4.4 Better Alternative: `unknown`

```ts
function processUser(user: unknown) {
  if (typeof user === "object" && user !== null) {
    console.log("Valid user");
  }
}
```

---

### 4.5 When `any` is Acceptable

* Gradual migration from JS
* Prototyping
* Temporary workaround

⚠️ Always remove `any` later

---

## 5. Comparison Summary

| Feature     | Type Safety | Recommended |
| ----------- | ----------- | ----------- |
| Inference   | ✅ High      | Yes         |
| Annotations | ✅ High      | Yes         |
| Union Types | ✅ Very High | Yes         |
| `any`       | ❌ None      | Avoid       |

---

## 6. Best Practices

* Prefer **type inference** where obvious
* Use **annotations** for clarity & APIs
* Use **union types** instead of `any`
* Enable `strict` mode
* Replace `any` with `unknown` when possible

---

## 7. Summary

* Type inference reduces boilerplate
* Type annotations add clarity & safety
* Union types handle flexible data safely
* `any` removes all protection

---

✅ **Good TypeScript code uses fewer annotations but stronger types**
