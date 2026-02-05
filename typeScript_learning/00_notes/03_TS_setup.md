# TypeScript Setup – Complete Guide

This note explains **how to set up TypeScript from scratch**, covering global/local install, configuration, common setups (Node, React), and best practices.

---

## 1. Prerequisites

Before installing TypeScript, make sure you have:

* **Node.js** (LTS recommended)
* **npm** or **yarn / pnpm**

Check versions:

```bash
node -v
npm -v
```

---

## 2. Installing TypeScript

### 2.1 Global Installation (Optional)

```bash
npm install -g typescript
```

Verify:

```bash
tsc --version
```

> Global install is useful for learning and quick testing, but **local install is recommended for projects**.

---

### 2.2 Local Installation (Recommended)

```bash
npm install --save-dev typescript
```

Now TypeScript is available via:

```bash
npx tsc --version
```

---

## 3. Creating a TypeScript Project

### Step 1: Initialize npm

```bash
npm init -y
```

### Step 2: Initialize TypeScript

```bash
npx tsc --init
```

This creates a **`tsconfig.json`** file.

---

## 4. Project Structure (Recommended)

```
project/
 ├── src/
 │   └── index.ts
 ├── dist/
 ├── tsconfig.json
 └── package.json
```

* `src/` → TypeScript source files
* `dist/` → Compiled JavaScript output

---

## 5. tsconfig.json (Core Setup)

### Minimal Recommended Config

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "module": "ESNext",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  }
}
```

---

## 6. Important Compiler Options

| Option            | Purpose                      |
| ----------------- | ---------------------------- |
| `target`          | JS version to compile to     |
| `module`          | Module system (ESM/CommonJS) |
| `rootDir`         | Source directory             |
| `outDir`          | Output directory             |
| `strict`          | Enables all strict checks    |
| `esModuleInterop` | Smooth default imports       |
| `sourceMap`       | Enable debugging             |

---

## 7. Writing Your First TypeScript File

### `src/index.ts`

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("TypeScript"));
```

---

## 8. Compiling TypeScript

### Compile Once

```bash
npx tsc
```

### Compile Specific File

```bash
npx tsc src/index.ts
```

### Watch Mode

```bash
npx tsc --watch
```

---

## 9. Running the Output

After compilation:

```bash
node dist/index.js
```

---

## 10. Generating Output Files

### JavaScript Only

* Default behavior

### Generate `.d.ts` Files

```json
{
  "declaration": true
}
```

### Generate Source Maps

```json
{
  "sourceMap": true
}
```

---

## 11. TypeScript with Node.js

### Install Node Types

```bash
npm install --save-dev @types/node
```

### Common Node tsconfig Additions

```json
{
  "lib": ["ES2020"],
  "types": ["node"]
}
```

---

## 12. TypeScript with React (Quick Setup)

### Using Vite

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
```

### Using Create React App

```bash
npx create-react-app my-app --template typescript
```

---

## 13. Using TypeScript with Existing JavaScript

### Allow JavaScript Files

```json
{
  "allowJs": true
}
```

### Gradual Migration

* Rename `.js` → `.ts`
* Fix errors step by step

---

## 14. Useful Dev Tools

| Tool       | Purpose             |
| ---------- | ------------------- |
| `ts-node`  | Run TS directly     |
| `nodemon`  | Auto restart server |
| `eslint`   | Code quality        |
| `prettier` | Formatting          |

Install example:

```bash
npm install --save-dev ts-node nodemon
```

---

## 15. Common Setup Mistakes

* ❌ Not setting `rootDir` and `outDir`
* ❌ Using `any` everywhere
* ❌ Missing `@types/*` packages
* ❌ Mixing CommonJS and ESM incorrectly

---

## 16. Recommended Scripts

```json
{
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "start": "node dist/index.js"
  }
}
```

---

## 17. Setup Checklist

* ✅ Node.js installed
* ✅ TypeScript installed locally
* ✅ `tsconfig.json` configured
* ✅ `src` and `dist` folders created
* ✅ Strict mode enabled

---

## 18. Summary

* TypeScript setup is simple but powerful
* Always use **local TypeScript**
* Configure `tsconfig.json` properly
* Compile TS → Run JS

---

✅ **A clean setup leads to a scalable TypeScript codebase**
