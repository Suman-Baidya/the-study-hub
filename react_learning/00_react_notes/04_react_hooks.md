# React Hooks — Complete Guide (Basic → Advanced)

## 🧠 Introduction

React Hooks are functions that let you "hook into" React state and lifecycle features from function components. Introduced in **React 16.8** (2019), Hooks allow you to use state, side effects, context, refs and more without writing class components.

This document explains Hooks from basics to advanced usage, including built-in hooks, custom hooks, rules, patterns, performance considerations, TypeScript tips, common pitfalls, and migration guidance.

---

## 📚 Why Hooks?

* **Simpler components:** No classes, simpler mental model.
* **Reusability:** Logic reuse via custom hooks instead of HOCs or render props.
* **Better separation:** Separate concerns by splitting related logic into hooks.
* **Easier testing:** Hooks can be tested independently (with utilities).

---

## ⚖️ Rules of Hooks

1. **Only call hooks at the top level** — don’t call hooks inside loops, conditions, or nested functions.
2. **Only call hooks from React functions** — call hooks from React function components or custom hooks (functions whose name starts with `use`).

These rules enable React to correctly preserve hook call order between renders.

---

## 🔌 Built-in Hooks (Overview)

* `useState` — local state
* `useReducer` — alternative state reducer
* `useEffect` — side effects
* `useLayoutEffect` — synchronous effect after DOM mutations
* `useRef` — mutable ref container
* `useMemo` — memoize values
* `useCallback` — memoize functions
* `useContext` — consume context
* `useImperativeHandle` — expose instance methods to parents
* `useDebugValue` — display debug info in React DevTools
* `useTransition`, `useDeferredValue` — concurrent UI primitives (React 18+)

We'll explain each with examples.

---

## 1) `useState`

**Purpose:** Add state to function components.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
}
```

**Notes:**

* `useState` accepts initial state (value or lazy initializer function: `useState(() => expensiveInit())`).
* State updates are asynchronous and batched.
* When new state depends on previous state, use the functional updater: `setCount(c => c + 1)`.

---

## 2) `useReducer`

**Purpose:** Manage complex state logic or multiple sub-values — similar to Redux reducer pattern.

```jsx
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
```

**When to use:**

* Multiple related state values.
* Complex update logic.
* When passing dispatch to deep children (predictable updates).

---

## 3) `useEffect`

**Purpose:** Run side effects (network requests, subscriptions, DOM changes) after render.

```jsx
import { useEffect, useState } from 'react';

function DataFetcher({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let canceled = false;
    fetch(url)
      .then(r => r.json())
      .then(json => { if (!canceled) setData(json); });

    return () => { canceled = true; };
  }, [url]); // re-run when url changes

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

**Key points:**

* The effect runs after render and after paint.
* The cleanup function runs before the next effect or on unmount.
* **Dependency array** controls when the effect runs. Empty array `[]` => run once on mount (and cleanup on unmount).
* Missing dependencies cause stale closures; include all variables referenced inside the effect (or use refs/function wrappers).

---

## 4) `useLayoutEffect`

**Purpose:** Like `useEffect`, but runs **synchronously after DOM mutations** and **before the browser paints**. Use for reading layout values and performing DOM measurements (e.g., measuring element size) where you must avoid flicker.

```jsx
import { useLayoutEffect, useRef, useState } from 'react';

function Measured() {
  const ref = useRef();
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(ref.current.getBoundingClientRect().height);
  }, []);

  return <div ref={ref}>Height: {height}</div>;
}
```

**Caution:** Using `useLayoutEffect` poorly can block rendering; prefer `useEffect` unless you need synchronous behavior.

---

## 5) `useRef`

**Purpose:** Hold a mutable value that persists across renders without triggering re-renders. Also used to access DOM elements.

```jsx
import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);
  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}
```

**Notes:**

* `ref.current` can be any value.
* Changing `ref.current` does not cause re-render.
* Useful inside effects to hold latest values without re-subscribing.

---

## 6) `useMemo` and `useCallback`

**Purpose:** Memoize expensive values (`useMemo`) or functions (`useCallback`) to avoid unnecessary recomputation or re-creation.

```jsx
import { useMemo, useCallback } from 'react';

function Expensive({ items, onClick }) {
  const total = useMemo(() => {
    return items.reduce((s, v) => s + v.price, 0);
  }, [items]);

  const handle = useCallback((id) => {
    onClick(id);
  }, [onClick]);

  // render using total and handle
}
```

**Guidelines:**

* Use when an expensive computation or identity-stable function matters for performance or referential equality (e.g., as deps or props to children wrapped in `React.memo`).
* Overusing memoization can add complexity; measure before optimizing.

---

## 7) `useContext`

**Purpose:** Consume a React Context value in a function component.

```jsx
const ThemeContext = React.createContext('light');

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Toolbar</div>;
}
```

**Notes:**

* `useContext(SomeContext)` subscribes the component to context changes.
* Use for global-ish data: theme, auth, localization.
* Avoid using context as a replacement for every shared state; context updates cause re-renders of consumers.

---

## 8) `useImperativeHandle`

**Purpose:** Customize the instance value exposed to parent components when using `ref` with `forwardRef`.

```jsx
import React, { useImperativeHandle, forwardRef, useRef } from 'react';

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));
  return <input ref={inputRef} />;
});

// parent:
// const ref = useRef(); <FancyInput ref={ref} />; ref.current.focus();
```

**Use case:** Expose a controlled API of child components (rare but useful).

---

## 9) `useDebugValue`

**Purpose:** Show a label in React DevTools for custom hooks.

```js
function useFriendStatus(friendId) {
  const [status, setStatus] = useState(null);
  useDebugValue(status ? 'online' : 'offline');
  // ...
}
```

---

## 10) Concurrent UI Hooks (React 18+)

* `useTransition` — mark state updates as non-urgent to keep UI responsive.
* `useDeferredValue` — defer a value to avoid blocking urgent updates.

Example `useTransition`:

```jsx
const [isPending, startTransition] = useTransition();

function onSearch(value) {
  startTransition(() => {
    setQuery(value); // non-urgent update
  });
}
```

Use these to improve perceived performance in complex UIs.

---

## 🔁 Custom Hooks

Custom hooks are functions starting with `use` that let you extract reusable logic.

```js
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    fetch(url)
      .then(r => r.json())
      .then(json => { if (!canceled) { setData(json); setLoading(false); } });
    return () => { canceled = true; };
  }, [url]);

  return { data, loading };
}

// Usage:
// const { data, loading } = useFetch('/api/users');
```

**Best practices for custom hooks:**

* Prefix with `use`.
* Keep them focused on a single responsibility.
* Return stable values (avoid returning new object instances each render unless necessary — use `useMemo`).
* Use refs to store mutable values without causing renders.

---

## 🧪 Testing Hooks

* Use `@testing-library/react` and `@testing-library/react-hooks` (or `@testing-library/react`'s `renderHook`) to test hooks in isolation.
* Test behavior and side effects; mock timers or network calls where needed.

Example with `renderHook`:

```js
import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

test('increments counter', () => {
  const { result } = renderHook(() => useCounter());
  act(() => result.current.increment());
  expect(result.current.count).toBe(1);
});
```

---

## ⚠️ Common Pitfalls & Gotchas

* **Missing dependencies in `useEffect`** → stale values or bugs.
* **Overusing refs to avoid re-renders** → can make logic harder to follow.
* **Calling hooks conditionally** → breaks rules of hooks and causes subtle bugs.
* **Returning new objects/arrays from hooks without memoizing** → causes unnecessary re-renders of consumers.
* **Relying on object identity for dependencies** — use stable references or `useMemo`.

---

## 🧭 Patterns & Advanced Techniques

### 1. Avoid expensive computations on every render

Use `useMemo` with correct dependency array.

### 2. Keep effects idempotent and cancellable

Use abort controllers or canceled flags to prevent state updates after unmount.

### 3. Debounce or throttle inside hooks

Create `useDebounce`/`useThrottle` custom hooks to manage input handling.

### 4. Combine `useReducer` + context for global state

Create a global store with `useReducer` and expose via `Context.Provider`.

### 5. Compound components with hooks

Use context + hooks to build flexible component APIs (e.g., tabs, accordions).

---

## 🔍 Performance Considerations

* Memoize components with `React.memo` when props are stable.
* Avoid unnecessary work in render — move heavy operations into effects or memoized values.
* Profile with React DevTools profiler before optimizing.

---

## 🔢 TypeScript Tips

* Type hook returns explicitly: `function useThing(): [StateType, (v: StateType) => void] {}`.
* Use `useRef<HTMLElement | null>(null)` to type refs.
* Use discriminated unions for action types with `useReducer`.

Example:

```ts
function useToggle(initial = false): [boolean, () => void] {
  const [on, setOn] = useState<boolean>(initial);
  const toggle = useCallback(() => setOn(o => !o), []);
  return [on, toggle];
}
```

---

## 🔁 Migrating Class Components to Hooks

* Replace state with `useState`/`useReducer`.
* Replace lifecycle methods (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`) with `useEffect` and proper dependency arrays.
* Methods become functions defined inside component or extracted into hooks.

Example transformation:

```jsx
// class
class Timer extends React.Component {
  state = { t: 0 };
  componentDidMount() { this.id = setInterval(() => this.setState(s => ({ t: s.t + 1 })), 1000); }
  componentWillUnmount() { clearInterval(this.id); }
}

// hook
function Timer() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT(s => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
}
```

---

## ✅ Best Practices Quick Reference

* Follow the **Rules of Hooks**.
* Keep hooks **small and focused**.
* Use `useEffect` for side effects; clean up subscriptions.
* Memoize when it matters — measure before optimizing.
* Prefer `useReducer` for complex state transitions.
* Avoid heavy logic directly in render — compute inside `useMemo` or effects.
* Write custom hooks to extract reusable logic.
* Add `useDebugValue` to custom hooks for better DevTools UX.

---

## 📚 Resources

(Official React docs are the canonical source for hooks and their evolution.)

---

### ✍️ Author

**Suman Baidya**

(React Hooks — Complete Guide)
