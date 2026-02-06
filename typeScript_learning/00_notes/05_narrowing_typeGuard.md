# TypeScript Type Narrowing & Type Guards

This note explains **how TypeScript safely narrows types at runtime** and how **type guards** help the compiler understand your code better. These concepts are **core to writing advanced, safe TypeScript**.

---

## 1. What is Type Narrowing?

### Definition

**Type Narrowing** is the process by which TypeScript **reduces a broad type (like a union)** into a more specific type based on checks in your code.

> TypeScript starts with a wide type → your logic narrows it → TS allows safe operations

---

### Why Type Narrowing is Important

Without narrowing:

```ts
function printId(id: number | string) {
  id.toUpperCase(); // ❌ Error
}
```

With narrowing:

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    id.toUpperCase(); // ✅ OK
  }
}
```

---

## 2. Common Narrowing Techniques (Overview)

TypeScript narrows types using:

1. `typeof` checks
2. `instanceof` checks
3. Equality checks
4. Truthiness checks
5. Property existence (`in` operator)
6. Discriminated unions
7. User-defined type guards
8. Assertion functions

---

## 3. `typeof` Type Guards

Used for **primitive types**.

### Supported Values

* `string`
* `number`
* `boolean`
* `undefined`
* `function`
* `object`

### Example

```ts
function formatValue(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
```

---

## 4. Truthiness Narrowing

TypeScript narrows types based on **truthy / falsy checks**.

### Falsy Values

* `false`
* `0`
* `""`
* `null`
* `undefined`

### Example

```ts
function printUser(user?: { name: string }) {
  if (!user) return;

  console.log(user.name); // user is now defined
}
```

---

## 5. Equality Narrowing

TypeScript narrows types using `===`, `!==`, `==`, `!=`.

### Example

```ts
function process(value: string | null) {
  if (value !== null) {
    console.log(value.toUpperCase());
  }
}
```

---

## 6. `instanceof` Type Guards

Used with **classes and constructor functions**.

### Example

```ts
class Car {
  drive() {}
}

class Bike {
  ride() {}
}

function useVehicle(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.ride();
  }
}
```

---

## 7. `in` Operator Type Guards

Used to check **property existence**.

### Example

```ts
type Admin = { role: "admin"; permissions: string[] };
type User = { role: "user"; email: string };

function handleAccount(account: Admin | User) {
  if ("permissions" in account) {
    console.log(account.permissions);
  } else {
    console.log(account.email);
  }
}
```

---

## 8. Discriminated Unions (Most Important)

### What is a Discriminated Union?

A **discriminated union** uses a common literal property (discriminator) to narrow types.

---

### Example

```ts
type Circle = {
  kind: "circle";
  radius: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;
```

### Narrowing with `switch`

```ts
function area(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}
```

---

## 9. Exhaustiveness Checking (`never`)

Ensures **all cases are handled**.

```ts
function assertNever(value: never): never {
  throw new Error("Unhandled case");
}

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    default:
      return assertNever(shape); // Compile-time safety
  }
}
```

---

## 10. User-Defined Type Guards

### What is a User-Defined Type Guard?

A function that tells TypeScript **exactly what type a value is**.

Syntax:

```ts
parameter is Type
```

---

### Example

```ts
type Admin = { role: "admin"; permissions: string[] };
type User = { role: "user"; email: string };

function isAdmin(account: Admin | User): account is Admin {
  return account.role === "admin";
}

function handleAccount(account: Admin | User) {
  if (isAdmin(account)) {
    account.permissions;
  } else {
    account.email;
  }
}
```

---

## 11. Type Predicates with Arrays

```ts
function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

const values = [1, "two", 3, "four"];

const numbers = values.filter(isNumber); // number[]
```

---

## 12. Assertion Functions

### What are Assertion Functions?

Functions that **throw errors** if a condition is not met, and narrow types afterward.

### Example

```ts
function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("Not a string");
  }
}

function printUpper(value: unknown) {
  assertIsString(value);
  console.log(value.toUpperCase()); // value is string
}
```

---

## 13. Narrowing with Optional Properties

```ts
type User = {
  name: string;
  age?: number;
};

function printAge(user: User) {
  if (user.age !== undefined) {
    console.log(user.age.toFixed(0));
  }
}
```

---

## 14. Narrowing Pitfalls

❌ Using `any`

```ts
let value: any;
value.toUpperCase(); // No safety
```

❌ Incorrect checks

```ts
if (typeof value === "array") {} // ❌ Invalid
```

---

## 15. Best Practices

* Prefer **discriminated unions**
* Avoid `any`
* Use user-defined type guards for complex logic
* Always handle all union cases
* Use `never` for exhaustiveness

---

## 16. Summary

* Type narrowing makes union types usable
* Type guards tell TypeScript what a value really is
* Built-in guards: `typeof`, `instanceof`, `in`
* Advanced guards: discriminated unions, predicates, assertions

---
