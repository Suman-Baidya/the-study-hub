# JavaScript Practice in GitHub Using Docker

## 🐳 Introduction

Practicing JavaScript with Docker and GitHub provides a professional development environment where code, dependencies, and runtime configurations are consistent across systems. This guide explains how to set up, use, and optimize JavaScript (Node.js) projects using Docker within a GitHub workflow.

---

## ⚙️ Why Use Docker for JavaScript Development

* **Consistency**: Eliminates “it works on my machine” issues.
* **Portability**: Same container can run anywhere — local, staging, or production.
* **Version Control**: Environment setup tracked in GitHub alongside code.
* **Efficiency**: Faster onboarding, testing, and deployment.
* **Isolation**: Keeps projects independent from local system dependencies.

---

## 📁 Recommended Project Structure

```
my-js-docker-practice/
│  README.md
│  .gitignore
│  Dockerfile
│  docker-compose.yml
│
├─ backend/
│    package.json
│    src/
│      index.js
│      ... other files ...
│
├─ frontend/
│    package.json
│    src/
│      App.jsx
│      ... other components ...
│
├─ .dockerignore
```

**File Overview**

* `Dockerfile`: Defines the image build steps.
* `docker-compose.yml`: Orchestrates multiple containers for development.
* `.dockerignore`: Excludes unnecessary files (like `node_modules`).
* `backend/` and `frontend/`: Holds app code.

---

## 🧰 Sample Dockerfile for Node.js Backend

```dockerfile
FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production
COPY . .

EXPOSE 3000
CMD ["node", "src/index.js"]
```

### Best Practices

* Use lightweight images (`node:alpine`).
* Copy dependencies first to cache layers.
* Use `npm ci` for faster, cleaner installs.
* Always define exposed ports.
* Use `.dockerignore` for optimization.

---

## 🧩 Sample docker-compose.yml

```yaml
version: '3.9'

services:
  backend:
    build:
      context: ./backend
      dockerfile: ../Dockerfile
    volumes:
      - ./backend:/usr/src/app
      - /usr/src/app/node_modules
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development

  mongodb:
    image: mongo:6-latest
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

### Benefits

* Live code reload with mounted volumes.
* Includes database service for backend.
* Mimics real development environment.

---

## 🧪 Practice Tasks

1. Create a simple REST API (Todo app) in `backend/src/index.js`.
2. Build and run the container: `docker build -t myapp .`
3. Run via Compose: `docker-compose up`.
4. Connect backend and MongoDB services.
5. Add a React frontend and Dockerize it.
6. Practice environment variables with `.env`.
7. Create multi-stage Dockerfile for production builds.
8. Push project to GitHub.
9. Add CI/CD (GitHub Actions) to build Docker image on push.

---

## 🔒 .dockerignore Example

```
node_modules
npm-debug.log
.git
Dockerfile
docker-compose.yml
.env
```

---

## 📚 Useful Resources

* [Official Docker Blog – JavaScript Resources](https://www.docker.com/blog/resources-to-use-javascript-python-java-and-go-with-docker/)
* [Docker JavaScript Samples](https://docs.docker.com/reference/samples/javascript/)
* [Containerising JavaScript Apps – Dev.to Guide](https://dev.to/lakkimartin/containerising-a-simple-javascript-application-using-docker-part-1-3j2g)
* [Node.js Docker Best Practices](https://www.bretfisher.com/node-docker-good-defaults/)

---

## 🧭 Summary

* **Docker** ensures consistent environments.
* **GitHub** version-controls your Docker setup and code.
* Use **multi-container setups** to simulate production systems.
* Ideal for **learning, testing, and deploying** JavaScript applications.

---

**Next Step:** Try combining this with your MERN + ShadCN stack to simulate a professional full-stack workflow in containers!

---
### ✍️ Author  
**Suman Baidya**  
(Prepared for JavaScript and Web Development Notes)
