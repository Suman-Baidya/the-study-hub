# TypeScript Types – `type`, Literal Types & `interface`

This note explains **three fundamental building blocks of TypeScript’s type system**:

* `type` (Type Aliases)
* Literal Types
* `interface`

Understanding these clearly is **mandatory for real-world TypeScript**, especially with **React, Next.js, APIs, and libraries**.

---

## 1. `type` (Type Alias)

### What is `type`?

A **type alias** gives a **custom name to a type**.

> It does NOT create a new type at runtime — it is only for the compiler.

---

### Basic Syntax

```ts
type User = {
  id: number;
  name: string;
};
```

Usage:

```ts
const user: User = {
  id: 1,
  name: "Suman",
};
```

---

### Type Alias for Primitives

```ts
type ID = number | string;

let userId: ID = 101;
userId = "A101";
```

---

### Type Alias for Functions

```ts
type AddFn = (a: number, b: number) => number;

const add: AddFn = (a, b) => a + b;
```

---

### Type Alias for Arrays

```ts
type Scores = number[];

const marks: Scores = [80, 90, 100];
```

---

### Type Alias for Unions (Very Common)

```ts
type Status = "loading" | "success" | "error";
```

---

### Type Alias for Tuples

```ts
type UserTuple = [number, string];

const data: UserTuple = [1, "Admin"];
```

---

### Extending Types (Intersection Types)

```ts
type Person = {
  name: string;
};

type Employee = Person & {
  employeeId: number;
};
```

---

### When to Use `type`

* Union types
* Function types
* Tuple types
* Complex compositions

---

## 2. Literal Types

### What are Literal Types?

**Literal types** restrict a value to **exact, specific values** instead of broad types.

---

### String Literal Types

```ts
type Role = "admin" | "user" | "guest";

let role: Role;
role = "admin"; // ✅
role = "manager"; // ❌
```

---

### Number Literal Types

```ts
type Dice = 1 | 2 | 3 | 4 | 5 | 6;

let roll: Dice = 4;
```

---

### Boolean Literal Types

```ts
type Toggle = true | false;
```

---

### Literal Types with Functions

```ts
function setStatus(status: "success" | "error") {
  console.log(status);
}
```

---

### Literal Types with Objects (Discriminated Unions)

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

### Why Literal Types are Important

* Prevent invalid states
* Improve autocomplete
* Essential for reducers & APIs

---

## 3. `interface`

### What is an Interface?

An **interface** defines the **shape of an object**.

> Interfaces are mainly used for **object structures and class contracts**.

---

### Basic Interface Example

```ts
interface User {
  id: number;
  name: string;
}
```

---

### Optional Properties

```ts
interface User {
  id: number;
  name: string;
  age?: number;
}
```

---

### Readonly Properties

```ts
interface User {
  readonly id: number;
  name: string;
}
```

---

### Interface for Functions

```ts
interface AddFn {
  (a: number, b: number): number;
}
```

---

### Interface for Arrays

```ts
interface StringArray {
  [index: number]: string;
}
```

---

### Extending Interfaces

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}
```

---

### Interface Merging (Unique Feature)

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
```

Merged result:

```ts
interface User {
  name: string;
  age: number;
}
```

---

### Interfaces with Classes

```ts
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message);
  }
}
```

---

## 4. `type` vs `interface`

| Feature             | `type`        | `interface`   |
| ------------------- | ------------- | ------------- |
| Objects             | ✅             | ✅             |
| Union types         | ✅             | ❌             |
| Intersection        | ✅             | ❌             |
| Declaration merging | ❌             | ✅             |
| Extending           | `&`           | `extends`     |
| Preferred for       | Complex types | Object shapes |

---

## 5. Best Practices (Industry Rules)

* Use **`interface` for objects & public APIs**
* Use **`type` for unions, literals, functions**
* Use **literal types** for state & status
* Avoid mixing styles unnecessarily

---

## 6. Real-World Examples

### React Props

```ts
type ButtonProps = {
  variant: "primary" | "secondary";
  onClick: () => void;
};
```

---

### API Response

```ts
interface ApiResponse {
  status: "success" | "error";
  message: string;
}
```

---

## 7. Summary

* `type` creates flexible aliases
* Literal types lock values to exact options
* Interfaces define object contracts
* Choosing correctly improves safety & readability

---

✅ **Professional TypeScript = correct use of `type`, literals & interfaces**
