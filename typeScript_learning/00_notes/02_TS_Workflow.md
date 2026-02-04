# TypeScript Workflow – Full Notes

## 1. What is TypeScript?

TypeScript (TS) is a **strongly typed superset of JavaScript** developed by Microsoft. It adds **static typing**, **interfaces**, **enums**, **generics**, and **advanced tooling** on top of JavaScript.

* TypeScript code is **not run directly by browsers**
* It is **compiled (transpiled)** into plain JavaScript
* Resulting JavaScript runs anywhere JS runs

> Think of TypeScript as **JavaScript + safety + developer experience**

---

## 2. Why TypeScript?

### Problems with JavaScript

* No type safety
* Runtime errors are common
* Hard to maintain large codebases
* Weak editor support for refactoring

### Benefits of TypeScript

* Compile-time error checking
* Better autocomplete & IntelliSense
* Safer refactoring
* Self-documenting code
* Ideal for large & scalable applications

---

## 3. TypeScript Workflow (High-Level)

```
Write TypeScript (.ts / .tsx)
        ↓
Type Checking (tsc)
        ↓
Compile to JavaScript (.js)
        ↓
Run JavaScript (Browser / Node.js)
```

### Core Idea

> **Developer writes TypeScript → Compiler checks types → Emits JavaScript**

---

## 4. Installing TypeScript

### Global Installation

```
npm install -g typescript
```

Check version:

```
tsc --version
```

### Local Installation (Recommended)

```
npm install --save-dev typescript
```

---

## 5. Basic TypeScript Project Setup

### Step 1: Initialize Project

```
npm init -y
```

### Step 2: Create `tsconfig.json`

```
tsc --init
```

This file controls how TypeScript works.

---

## 6. tsconfig.json (Important Options)

### Common Configuration

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "module": "ESNext",
    "strict": true,
    "outDir": "dist",
    "rootDir": "src",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

### Key Options Explained

* `target` → JavaScript version output
* `strict` → Enables all strict checks
* `outDir` → Compiled JS folder
* `rootDir` → Source TS folder
* `esModuleInterop` → Better import compatibility

---

## 7. TypeScript File Types

| File    | Purpose                  |
| ------- | ------------------------ |
| `.ts`   | TypeScript (logic)       |
| `.tsx`  | TypeScript + JSX (React) |
| `.d.ts` | Type declaration files   |

---

## 8. How TypeScript Compilation Works

### Compile Once

```
tsc index.ts
```

### Compile Entire Project

```
tsc
```

### Watch Mode

```
tsc --watch
```

> Watches files and recompiles automatically

---

## 9. Type System Basics

### Type Inference

```ts
let count = 10; // inferred as number
```

### Explicit Types

```ts
let age: number = 25;
let name: string = "Suman";
let isActive: boolean = true;
```

---

## 10. Common Data Types

### Primitive Types

```ts
string
number
boolean
null
undefined
```

### Special Types

```ts
any      // disables type checking
unknown  // safer than any
void     // no return
never    // never occurs
```

---

## 11. Arrays & Tuples

### Arrays

```ts
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["A", "B"];
```

### Tuples

```ts
let user: [number, string] = [1, "Admin"];
```

---

## 12. Objects & Type Aliases

### Object Type

```ts
let user: { id: number; name: string };
```

### Type Alias

```ts
type User = {
  id: number;
  name: string;
};
```

---

## 13. Interfaces (Core Concept)

```ts
interface User {
  id: number;
  name: string;
  isAdmin?: boolean;
}
```

### Interface vs Type

* Interfaces are extendable
* Preferred for objects & APIs

---

## 14. Functions in TypeScript

### Typed Function

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

### Arrow Function

```ts
const greet = (name: string): string => `Hello ${name}`;
```

---

## 15. Union & Literal Types

### Union

```ts
let id: number | string;
```

### Literal Types

```ts
let status: "success" | "error";
```

---

## 16. Enums

```ts
enum Role {
  ADMIN,
  USER,
  GUEST
}
```

---

## 17. Generics (Advanced)

```ts
function identity<T>(value: T): T {
  return value;
}
```

Usage:

```ts
identity<number>(10);
identity<string>("Hi");
```

---

## 18. Type Narrowing

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  }
}
```

---

## 19. Classes in TypeScript

```ts
class Person {
  constructor(public name: string) {}
}
```

### Access Modifiers

* `public`
* `private`
* `protected`

---

## 20. Modules & Imports

```ts
export function add(a: number, b: number) {}
import { add } from "./math";
```

---

## 21. Declaration Files (.d.ts)

Used when:

* Using JS libraries without types

Example:

```ts
declare module "my-lib";
```

---

## 22. TypeScript with JavaScript

* TypeScript supports `.js` files
* Enable in tsconfig:

```json
{
  "allowJs": true
}
```

---

## 23. TypeScript with React (Workflow)

```
.tsx files
Props & State typing
Strict component safety
```

Example:

```tsx
type Props = { title: string };

const Header = ({ title }: Props) => <h1>{title}</h1>;
```

---

## 24. TypeScript with Node.js

* Compile TS → JS
* Run JS with Node

Common Tools:

* ts-node
* nodemon

---

## 25. Typical TypeScript Project Structure

```
project/
 ├── src/
 │   ├── index.ts
 │   └── utils/
 ├── dist/
 ├── tsconfig.json
 └── package.json
```

---

## 26. Development vs Production Workflow

### Development

* Write `.ts`
* Use watch mode
* Fix type errors early

### Production

* Compile to `.js`
* Deploy JavaScript output

---

## 27. Best Practices

* Enable `strict` mode
* Avoid `any`
* Use interfaces for APIs
* Prefer `unknown` over `any`
* Keep types close to logic

---

## 28. TypeScript Compiler Internals (Deep Dive)

When you run `tsc`, TypeScript goes through **multiple internal phases**. Understanding these helps you debug errors and understand how TS really works.

The pipeline looks like this:

```
Source Code (.ts/.tsx)
   ↓
Lexer (Scanner)
   ↓
Parser
   ↓
Binder
   ↓
Checker (Type Checker)
   ↓
Emitter
   ↓
Output (.js / .d.ts / .map)
```

---

## 29. Lexer (Scanner)

### What is the Lexer?

The **Lexer** (also called *Scanner*) is the **first stage** of the TypeScript compiler.

Its job is to:

* Read raw source code (characters)
* Convert characters into **tokens**

### Example

Source Code:

```ts
let count: number = 10;
```

Tokens produced:

```
LET | IDENTIFIER(count) | COLON | IDENTIFIER(number) | EQUALS | NUMBER(10) | SEMICOLON
```

### Responsibilities

* Removes whitespace & comments
* Identifies keywords (`let`, `const`, `function`)
* Identifies literals (`10`, `"hello"`)
* Identifies symbols (`{}`, `=`, `:`)

⚠️ Lexer **does NOT understand meaning or types**

---

## 30. Parser

### What is the Parser?

The **Parser** takes tokens from the lexer and builds an **Abstract Syntax Tree (AST)**.

### Abstract Syntax Tree (AST)

* Tree representation of code structure
* Shows relationships between statements

Example AST (simplified):

```
VariableStatement
 ├── Identifier: count
 ├── Type: number
 └── Initializer: 10
```

### Responsibilities

* Validates syntax rules
* Detects syntax errors
* Builds AST nodes

❌ Parser errors example:

```ts
let = 10; // Syntax error
```

---

## 31. Binder

### What is the Binder?

The **Binder** connects identifiers to symbols and scopes.

Think of it as the **symbol table creator**.

### What it does

* Creates **symbols** for variables, functions, classes
* Tracks **scope** (block, function, module)
* Links identifiers to their declarations

### Example

```ts
let x = 10;
function test() {
  let x = 20;
}
```

Binder creates:

* `x` (global scope)
* `x` (function scope)

These are **different symbols**.

⚠️ Binder does NOT check types

---

## 32. Checker (Type Checker)

### What is the Checker?

The **Checker** is the heart of TypeScript.

It:

* Uses AST + symbols
* Performs **type analysis**
* Reports type errors

### Responsibilities

* Type inference
* Type compatibility checks
* Union & generic resolution
* Interface implementation checks

### Example

```ts
let age: number = "20"; // ❌ Error
```

Checker error:

```
Type 'string' is not assignable to type 'number'
```

### Advanced Checks

* Structural typing
* Control flow analysis
* Type narrowing

⚠️ No JavaScript is generated if checker fails (by default)

---

## 33. Emitter

### What is the Emitter?

The **Emitter** generates output files from the AST.

### Output Types

* `.js` → JavaScript output
* `.d.ts` → Type declaration files
* `.map` → Source maps

### Example

TypeScript:

```ts
let count: number = 10;
```

Emitted JavaScript:

```js
let count = 10;
```

⚠️ All types are **removed** during emission

---

## 34. Output Files Explained

### 34.1 `.js` (JavaScript File)

* Final executable output
* Runs in browser or Node.js
* Contains no TypeScript types

Example:

```js
function add(a, b) {
  return a + b;
}
```

---

### 34.2 `.d.ts` (Declaration File)

### What is `.d.ts`?

* Describes **types only**
* No implementation
* Used by other TS projects

Example:

```ts
declare function add(a: number, b: number): number;
```

### Why `.d.ts`?

* Enables type safety across packages
* Used by npm libraries
* Supports IntelliSense

Generated when:

```json
{
  "declaration": true
}
```

---

### 34.3 `.map` (Source Map File)

### What is Source Map?

* Maps compiled JS back to TS source
* Helps debugging in browser/devtools

Example:

```js
//# sourceMappingURL=index.js.map
```

### Why Needed?

* Debug original TypeScript
* Correct line numbers in errors

Enabled with:

```json
{
  "sourceMap": true
}
```

---

## 35. Full Compiler Flow (One Line)

> **Characters → Tokens → AST → Symbols → Types → JavaScript**

---

## 36. Summary

* Lexer breaks code into tokens
* Parser builds AST
* Binder manages symbols & scopes
* Checker enforces type safety
* Emitter produces JS, d.ts & map files

Understanding this pipeline helps you:

* Debug complex TS errors
* Write better type-safe code
* Master advanced TypeScript

---

✅ **TypeScript is not magic — it’s a well-structured compiler pipeline**
