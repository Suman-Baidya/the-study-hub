# TypeScript Functions – Complete Guide

Functions are the **core building block** of TypeScript applications. This note covers **everything about functions in TypeScript**, from basics to advanced patterns used in **React, Next.js, Node.js, and APIs**.

---

## 1. Why Type Functions in TypeScript?

TypeScript adds:

* Parameter type safety
* Return type safety
* Better autocomplete
* Early error detection

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

## 2. Function Declaration

```ts
function greet(name: string): string {
  return `Hello ${name}`;
}
```

---

## 3. Function Expression

```ts
const greet = function (name: string): string {
  return `Hello ${name}`;
};
```

---

## 4. Arrow Functions

```ts
const greet = (name: string): string => {
  return `Hello ${name}`;
};
```

Short form:

```ts
const greet = (name: string) => `Hello ${name}`;
```

---

## 5. Parameter Type Annotation

```ts
function multiply(a: number, b: number) {
  return a * b; // return type inferred
}
```

---

## 6. Return Type Annotation

```ts
function divide(a: number, b: number): number {
  return a / b;
}
```

Use explicit return types for **public APIs**.

---

## 7. Optional Parameters

```ts
function greet(name: string, age?: number) {
  console.log(name, age);
}
```

Optional parameters must come **after required ones**.

---

## 8. Default Parameters

```ts
function greet(name: string = "Guest") {
  return name;
}
```

---

## 9. Rest Parameters

```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
```

---

## 10. Function Types

### Using `type`

```ts
type AddFn = (a: number, b: number) => number;

const add: AddFn = (a, b) => a + b;
```

---

### Using `interface`

```ts
interface AddFn {
  (a: number, b: number): number;
}
```

---

## 11. Callback Functions

```ts
function fetchData(callback: (data: string) => void) {
  callback("Done");
}
```

---

## 12. Void Return Type

```ts
function log(message: string): void {
  console.log(message);
}
```

---

## 13. Never Return Type

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

---

## 14. Function Overloading

```ts
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any) {
  return a + b;
}
```

---

## 15. Generics in Functions

```ts
function identity<T>(value: T): T {
  return value;
}
```

Usage:

```ts
identity<string>("Hello");
identity(100);
```

---

## 16. Constraints in Generics

```ts
function getLength<T extends { length: number }>(value: T) {
  return value.length;
}
```

---

## 17. Functions with Objects

```ts
function printUser(user: { id: number; name: string }) {
  console.log(user.name);
}
```

Better:

```ts
interface User {
  id: number;
  name: string;
}

function printUser(user: User) {}
```

---

## 18. Destructured Parameters

```ts
function printUser({ name, id }: { name: string; id: number }) {}
```

---

## 19. `this` in Functions

```ts
const user = {
  name: "Suman",
  greet() {
    return this.name;
  },
};
```

---

## 20. `this` Parameter Annotation

```ts
function greet(this: { name: string }) {
  console.log(this.name);
}
```

---

## 21. Async Functions

```ts
async function fetchData(): Promise<string> {
  return "Data";
}
```

---

## 22. Functions Returning Promises

```ts
function fetchUser(): Promise<{ id: number; name: string }> {
  return Promise.resolve({ id: 1, name: "A" });
}
```

---

## 23. Higher Order Functions

```ts
function withLog(fn: () => void) {
  return () => {
    console.log("Start");
    fn();
  };
}
```

---

## 24. Type Guards in Functions

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

---

## 25. Function Compatibility

```ts
let fn1 = (a: number) => {};
let fn2 = (a: number, b: number) => {};

fn1 = fn2; // ❌
fn2 = fn1; // ✅
```

---

## 26. IIFE (Immediately Invoked Function)

```ts
(() => {
  console.log("Executed");
})();
```

---

## 27. Common Mistakes

* Using `any` in parameters
* Forgetting return types
* Overusing overloads
* Ignoring `never`

---

## 28. Best Practices

* Use explicit return types for APIs
* Prefer arrow functions in React
* Use generics instead of `any`
* Keep functions small & typed

---

## 29. Summary

* Functions are strongly typed in TS
* Types improve safety & readability
* Generics make functions reusable
* Proper typing prevents runtime bugs

---

✅ **Mastering functions = mastering TypeScript logic**
