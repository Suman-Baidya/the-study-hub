# 🧩 React.js Installation & Project Structure Guide

## 🚀 Introduction

React.js is a JavaScript library for building user interfaces, created and maintained by **Meta (Facebook)**. Before starting with React, you need to set up your environment properly and understand the project’s folder structure and configuration files.

---

## 🛠️ 1. Prerequisites

Make sure the following tools are installed on your system:

* **Node.js** (v14 or higher) → [Download](https://nodejs.org/)
* **npm** (comes with Node) or **yarn**
* **Code Editor:** [VS Code](https://code.visualstudio.com/)
* **Web Browser:** Chrome or Edge recommended

Check installation:

```bash
node -v
npm -v
```

---

## ⚙️ 2. Create a React App

There are multiple ways to create a React project:

### **Option 1: Using Create React App (CRA)**

```bash
npx create-react-app my-app
cd my-app
npm start
```

👉 `npx` ensures the latest version of `create-react-app` is used.

### **Option 2: Using Vite (Faster and Modern)**

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

### **Option 3: Using Next.js (For Production-ready Projects)**

```bash
npx create-next-app@latest my-next-app
```

---

## 🧱 3. Folder Structure (CRA Example)

```
my-app/
│
├── node_modules/         # Installed dependencies
├── public/               # Static files (HTML, icons, images)
│   ├── index.html        # Main HTML template
│   └── favicon.ico
│
├── src/                  # Main source code folder
│   ├── assets/           # Images, fonts, etc.
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components
│   ├── App.js            # Root React component
│   ├── index.js          # Entry point (connects to index.html)
│   ├── App.css           # App styling
│   └── index.css         # Global styles
│
├── .gitignore            # Git ignored files
├── package.json          # Project metadata and dependencies
├── README.md             # Project documentation
└── yarn.lock / package-lock.json # Dependency lock files
```

---

## 📦 4. Understanding `package.json`

The **package.json** file contains project metadata and dependencies. Example:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

### 🔍 Important Sections:

* **name** – Project name
* **version** – Version number
* **dependencies** – Libraries used in the app
* **scripts** – Commands to run tasks (start, build, test)
* **devDependencies** – Developer tools (not required in production)

---

## 🧬 5. Important Files Explained

### 📝 `index.html`

The root HTML file where React attaches the app.

```html
<div id="root"></div>
```

React renders the app inside this `div`.

---

### ⚛️ `index.js`

Entry point that connects React to the DOM.

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

---

### 🧠 `App.js`

Main component — acts as the root of your UI.

```js
function App() {
  return (
    <div>
      <h1>Hello React!</h1>
    </div>
  );
}
export default App;
```

---

### 🎨 `App.css` and `index.css`

Used to style the app globally or per component.

---

## 🧠 6. React Component Hierarchy

React uses a **component-based architecture**:

* **Parent Components** contain
* **Child Components** (smaller reusable blocks)

Example:

```
App.js
 ├── Header.js
 ├── Footer.js
 └── ProductList.js
      ├── ProductCard.js
      └── Button.js
```

---

## ⚡ 7. Common npm Scripts

| Command         | Description                                          |
| --------------- | ---------------------------------------------------- |
| `npm start`     | Runs the app in development mode                     |
| `npm run build` | Builds the app for production                        |
| `npm test`      | Runs test scripts                                    |
| `npm run eject` | Exposes config files (not recommended for beginners) |

---

## 💡 8. Environment Variables

React uses `.env` files for storing sensitive configuration:

```
REACT_APP_API_URL=https://api.example.com
```

Access in code:

```js
console.log(process.env.REACT_APP_API_URL);
```

---

## 🧮 9. Development Tools

* **React Developer Tools (Chrome Extension)**
* **Prettier** & **ESLint** for code formatting and linting
* **Git** & **GitHub** for version control
* **Postman** or **Insomnia** for API testing

---

## 🚀 10. Build & Deployment

### Build Command:

```bash
npm run build
```

This creates a `build/` folder with optimized production code.

### Deployment Options:

* **Vercel** (Best for React & Next.js)
* **Netlify**
* **GitHub Pages**
* **Firebase Hosting**

---

## 🧭 11. Tips for Beginners

✅ Always organize your components
✅ Use reusable UI blocks
✅ Keep logic separate from UI
✅ Learn ES6+ JavaScript deeply
✅ Practice debugging using DevTools

---

## ✍️ Author

**Suman Baidya**
*Prepared for React.js Learners — From Basics to Advanced Setup*
