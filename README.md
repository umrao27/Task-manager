# 📘 ARCHITECTURE OVERVIEW

### 📌 Project Name: Task Manager – Full Stack CRUD Application

---

### 🧱 Overview

This project is a full-stack task management application designed to showcase end-to-end delivery practices, including:

- Modular frontend and backend
- SQL-based persistence
- Automated testing (unit & E2E)
- CI/CD pipeline with code quality tools
- Monitoring and documentation integration

---

### 📂 Folder Structure (High Level)

```bash
project-root/
├── client/
├── ├──public/          # Static assets (HTML, favicon, etc.)
├── ├──src/             # Main application code
│     ├── assets/      # Images, fonts, styles
│     ├── components/  # Reusable UI components
│     ├── pages/       # Route-based pages
│     ├── features/    # Feature-specific modules (e.g., auth, dashboard)
│     ├── hooks/       # Custom React hooks
│     ├── layouts/     # Page layout components
│     ├── routes/      # Route definitions
│     ├── services/    # API calls and data services
│     ├── store/       # Global state management (Redux/Zustand/Context)
│     ├── utils/       # Utility functions
│     ├── App.jsx      # Root component
│     └── main.jsx     # Entry point (ReactDOM.createRoot)
├── ├──tests/           # Test setup and utilities
│     └── e2e/         # Write cypress tests
├── .env             # Environment variables
├── package.json     # Project dependencies and scripts
└── README.md

├── server/
├── src/
│   ├── config/            # Configuration files (env vars, DB configs, etc.)
│   ├── controllers/       # Route logic (handles incoming requests)
│   ├── routes/            # Express route definitions
│   ├── models/            # Database models (Mongoose/Sequelize etc.)
│   ├── middlewares/       # Custom Express middlewares (e.g., auth, error handler)
│   ├── services/          # Business logic (e.g., userService.js)
│   ├── utils/             # Helper utilities (e.g., token generators, logger)
│   ├── validations/       # Request schema validations (e.g., with Joi or Zod)
│   ├── jobs/              # Cron jobs or background tasks
│   ├── app.js             # Express app configuration
│   └── server.js          # Entry point: starts the server
│
├── tests/                 # Unit and integration tests
│
├── .env                   # Environment variables
├── .gitignore
├── package.json
├── README.md
└── sonar-project.properties  # SonarQube config (if used)
├── README.md           # project Description
```

---

### 🖼️ Architectural Pattern

This application follows a Layered Architecture with modular separation between concerns:

| Layer             | Responsibility                 | Folder                             |
| ----------------- | ------------------------------ | ---------------------------------- |
| Presentation (UI) | Display data, capture input    | `client/src/components/`, `pages/` |
| API (Routing)     | Handle REST endpoints          | `server/routes/`                   |
| Controller        | Handle business logic and flow | `server/controllers/`              |
| Service           | Reusable logic and utilities   | `server/services/`                 |
| Data Access (DB)  | Interact with SQL Server       | `server/db/`                       |

---

### 🧪 Testing

| Layer           | Tool Used             |
| --------------- | --------------------- |
| Unit (Frontend) | React Testing Library |
| Unit (Backend)  | Jest / Supertest      |
| End-to-End      | Cypress               |

---

### 🔄 CI/CD & DevOps

- **CI**: Jenkins pipeline runs lint, unit tests, E2E tests, and builds
- **Code Quality**: Integrated with SonarQube via `sonar-project.properties`
- **Monitoring**: Logs and basic health checks are connected to Datadog
- **Docs**: Markdown-based docs + Confluence wiki

---

### 🗄️ Database

- **SQL Server** used for persistent storage
- Schema includes `tasks`, and optionally `users`
- Initialization scripts stored under `sql/init.sql`

---

### 🧰 Tech Stack

| Area         | Stack                   |
| ------------ | ----------------------- |
| Frontend     | React + Hooks + Emotion |
| Backend      | Node.js + Express       |
| Database     | SQL Server              |
| Build Tools  | Webpack + Babel         |
| Testing      | RTL, Cypress            |
| CI/CD        | Jenkins                 |
| Code Quality | SonarQube               |
| Monitoring   | Datadog                 |
| Docs         | Markdown + Confluence   |

---

### ⚙️ Key Project Flows

1. **User opens dashboard**  
   → React fetches data from `/api/tasks`  
   → Data displayed in table/chart format

2. **User creates/updates task**  
   → Form submits data to backend via POST/PUT  
   → Backend updates SQL Server  
   → Frontend re-fetches updated data

3. **CI/CD triggered on PR**  
   → Jenkins runs tests, sonar scan  
   → On success, build artifacts generated

---

### 📝 Notes

- Environment configs are managed via `.env` files
- Logging is centralized (console or log files)
- Modular design supports scalability and future micro-frontend split

---
