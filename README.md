# Student Course Management and Learning Progress Tracking System

## Project Overview

The **Student Course Management and Learning Progress Tracking System** is a full-stack web application designed to streamline academic course enrollment and learning management. The system allows students to create accounts, browse available courses, enroll in courses, access course materials, track their learning progress, and receive updates regarding their courses.

The application also provides administrators with tools to manage students, courses, enrollments, and progress reports.

This project demonstrates key concepts in Full Stack Web Development, including frontend development, backend APIs, database management, authentication, deployment, and application security.

---

## Problem Statement

In many educational institutions, students face challenges such as:

- Finding available courses
- Registering for courses efficiently
- Monitoring learning progress
- Accessing course information in one place
- Tracking completed and pending modules

Similarly, administrators often encounter difficulties in managing course enrollments and monitoring student performance.

This system addresses these challenges by providing a centralized web-based platform for academic course management and progress tracking.

---

## Project Objectives

- Provide secure student registration and login.
- Allow students to browse and enroll in available courses.
- Enable administrators to create and manage courses.
- Track student learning progress.
- Generate progress reports.
- Provide real-time notifications and updates.
- Maintain secure access to academic data.

---

## User Roles

### Student

Students can:

- Register and log in
- View their profile
- Browse available courses
- Enroll in courses
- Access course content
- Track learning progress
- View course completion percentage
- Receive notifications

### Administrator

Administrators can:

- Log in securely
- Add, edit, and delete courses
- Manage student records
- Monitor enrollments
- Generate reports
- Update course content
- View analytics dashboards

---

## System Modules

### Module 1: User Authentication

#### Features

- Student Registration
- Student Login
- Password Encryption
- Forgot Password
- JWT Authentication

#### Database Fields

| Field | Type |
|--------|------|
| Student ID | Integer |
| Name | String |
| Email | String |
| Password | Encrypted String |
| Department | String |

---

### Module 2: Course Management

#### Features

- Add Course
- Update Course
- Delete Course
- View Course Details

#### Course Information

| Field | Description |
|--------|-------------|
| Course ID | Unique ID |
| Course Name | Course Title |
| Instructor | Faculty Name |
| Duration | Number of Weeks |
| Description | Course Information |
| Category | Programming, AI, Web, etc. |

---

### Module 3: Course Enrollment

#### Features

- Browse Courses
- Search Courses
- Enroll in Course
- View Enrolled Courses

#### Workflow

```
Student Login
      ↓
Browse Courses
      ↓
Select Course
      ↓
Enroll
      ↓
Confirmation
```

---

### Module 4: Learning Management

#### Features

- View Modules
- Access Learning Materials
- Mark Module as Completed
- Continue Learning

#### Example Course Structure

**Course:** Full Stack Development

Modules:

- HTML
- CSS
- JavaScript
- React
- Node.js
- MongoDB

Students complete each module sequentially while their progress is automatically recorded.

---

### Module 5: Progress Tracking

#### Features

- Completion Percentage
- Course Progress Bar
- Completed Modules
- Pending Modules

#### Example

| Course | Progress |
|---------|----------|
| Python | 80% |
| React | 60% |
| DBMS | 100% |

---

### Module 6: Dashboard

#### Student Dashboard

Displays:

- Total Courses Enrolled
- Courses Completed
- Ongoing Courses
- Progress Statistics

#### Administrator Dashboard

Displays:

- Total Students
- Total Courses
- Active Enrollments
- Completion Reports

---

### Module 7: Notifications

#### Features

- New Course Alerts
- Enrollment Confirmation
- Assignment Reminders
- Completion Certificates

#### Real-Time Communication

- WebSockets
- Socket.IO

---

## Database Design

### Students Table

| Field |
|--------|
| student_id |
| name |
| email |
| password |
| department |

### Courses Table

| Field |
|--------|
| course_id |
| course_name |
| instructor |
| duration |
| description |

### Enrollment Table

| Field |
|--------|
| enrollment_id |
| student_id |
| course_id |
| enrollment_date |

### Progress Table

| Field |
|--------|
| progress_id |
| student_id |
| course_id |
| completed_modules |
| progress_percentage |

---

## Technology Stack

| Layer | Technology |
|--------|------------|
| Frontend | HTML5, CSS3, Bootstrap, JavaScript, React.js |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Authentication | JWT, bcrypt |
| Real-Time Communication | Socket.IO |
| API Testing | Postman |
| Version Control | Git, GitHub |
| Deployment | Render / Vercel / Railway |

---

## Project Highlights

- Secure user authentication using JWT and bcrypt
- Course browsing and enrollment system
- Learning progress monitoring
- Administrator management dashboard
- Real-time notifications using Socket.IO
- MongoDB database integration
- RESTful API architecture
- Responsive user interface
- Deployment-ready full-stack application


## Backend (Express) structure and middleware

```
backend/
├── config/        environment + allowed resources
├── controllers/   request handlers
├── middleware/    notFound, errorHandler, courseValidation, resourceValidation
├── routes/        /api routes
├── services/      JSON Server (mock-api) calls
├── utils/         asyncHandler, AppError
├── .env           PORT=3001, MOCK_API_URL=http://localhost:5000
└── server.js
```

Run: `cd backend && npm install && npm run dev` (keep `mock-api` running on port 5000).
Check: `http://localhost:3001/api/health`
Middleware order in `server.js`: cors → json → urlencoded → morgan → routes → notFound → errorHandler.

---

## Deployment

### Live Application

- **Frontend:** https://your-frontend.vercel.app
- **Backend:** https://your-backend.onrender.com
- **API Health:** https://your-backend.onrender.com/api/health

> Replace the placeholders above after deploying. Only state that production tests have passed after you have actually run them.

### Technology Stack

- React, React Router, Axios (`react-frontend/`)
- Node.js and Express (`backend/`)
- MongoDB and Mongoose
- JWT and bcryptjs
- Socket.IO
- helmet, express-validator, express-rate-limit, morgan

### Features

- Student registration and login (passwords hashed with bcrypt, minimum 12 characters)
- JWT authentication (HS256, 1 hour by default)
- Admin and student role-based access
- Student and Course CRUD (admin-managed students, public course catalogue)
- Student profile retrieval and update
- Course enrollment, unenrollment (history kept as `withdrawn`) and re-enrollment
- Learning progress tracking
- Real-time chat and notifications over Socket.IO, with persisted history
- Centralized validation, error handling, rate limiting and security headers
- Responsive frontend

### Project structure

```
backend/    Express API  (config, controllers, middleware, models, routes, validators, scripts)
react-frontend/   Vite + React app (pages, components, api clients, legacy page scripts)
docs/       database-schema.md, postman/ collection
mock-api/   Original JSON Server data (only used as the seed source)
frontend/   Original static HTML version
```

### Local Setup

1. Clone the GitHub repository.
2. Start MongoDB locally (or create a free MongoDB Atlas cluster).
3. Backend:
   ```bash
   cd backend
   npm install
   cp .env.example .env        # then edit .env
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"   # paste into JWT_SECRET
   npm run seed                # imports the 12 sample courses
   ADMIN_EMAIL=admin@example.com ADMIN_PASSWORD='a-long-password-12+' npm run create-admin
   npm start                   # http://localhost:3001
   ```
4. Frontend:
   ```bash
   cd react-frontend
   npm install
   cp .env.example .env        # VITE_API_URL and VITE_SOCKET_URL
   npm run dev                 # http://localhost:5173
   ```

Administrator accounts cannot be created through public registration; use `npm run create-admin`.

### Environment variables

Backend (`backend/.env`, never commit): `PORT`, `NODE_ENV`, `MONGO_URI`, `JWT_SECRET`, `JWT_EXPIRES_IN`, `CLIENT_URL` (comma-separated list of allowed frontend origins; used for CORS and Socket.IO).

Frontend (`react-frontend/.env`): `VITE_API_URL` (e.g. `http://localhost:3001/api/v1`), `VITE_SOCKET_URL` (backend origin, no `/api/v1`).

### API summary

All routes are under `/api/v1` (plus `GET /api/health`).

| Area | Endpoints |
| --- | --- |
| Auth | `POST /auth/register`, `POST /auth/login` |
| Students (admin) | `GET/POST /students`, `GET/PUT/DELETE /students/:id` |
| Courses | `GET /courses`, `GET /courses/:id` (public); `POST /courses`, `PUT/DELETE /courses/:id` (admin) |
| Profile | `GET/PUT /profile` |
| Enrollments | `POST /enrollments`, `GET /enrollments/me`, `DELETE /enrollments/:courseId` (student); `GET /enrollments` (admin) |
| Progress (student) | `GET /progress/me`, `PUT /progress/:courseId` |
| Messages | `GET /messages/contacts`, `GET /messages/:userId` |
| Notifications | `GET /notifications`, `PATCH /notifications/:id/read` |

Socket.IO events (JWT required in `auth.token`): client sends `send_message`; server emits `receive_message` and `new_notification`.

### Deployment steps

**MongoDB Atlas** - create a cluster, a database user with a strong password, allow your hosting provider's network access, copy the connection string.

**Backend on Render** - New Web Service, select the `backend` root directory, Node runtime, build command `npm install` (use `npm ci` once you have committed a fresh `package-lock.json`), start command `npm start`. Environment variables: `NODE_ENV=production`, `MONGO_URI`, `JWT_SECRET`, `JWT_EXPIRES_IN=1h`, `CLIENT_URL=https://your-frontend.vercel.app`. Render provides `PORT`. After the first deploy run `npm run seed` and `npm run create-admin` once (Render shell, or locally pointed at the Atlas URI).

**Frontend on Vercel** - import the repository, root directory `react-frontend`, Vite preset, build `npm run build`, output `dist`. Environment variables: `VITE_API_URL=https://your-backend.onrender.com/api/v1`, `VITE_SOCKET_URL=https://your-backend.onrender.com`. Redeploy after changing them. `vercel.json` rewrites all routes to `index.html` so refreshing nested routes works.

### Testing

Import `docs/postman/edubloom.postman_collection.json` into Postman and run the folders in order (41 requests covering registration, login, 400/401/403/404/409 cases, CRUD, enrollment, progress, notifications). Repeat the wrong-password login 11 times to confirm the 429 rate limit. Browser checks: register, log in, browse and manage courses, open `/messages` in two browser profiles to confirm real-time chat and notifications, then log out and confirm the session is cleared.

### Known limitations

- The existing HTML/JS pages still keep **enrollment, progress and certificate data in the browser's localStorage**; the matching REST endpoints exist and are ready, but those pages have not been migrated to call them.
- Forgot/reset password pages are still local-only; no password-reset API was part of Tasks 9-15.
- The admin registration page cannot create real admins (by design); use `npm run create-admin`.
- JWT is stored in `sessionStorage` (educational choice; consider HttpOnly cookies for production).
- Socket.IO messaging allows any signed-in user to message any other user; add recipient rules and shared rate-limit storage before a public launch.


## Sample data (enrollments and learning progress)

Run these from `backend/` after the server's `.env` is set up:

```powershell
npm run seed               # adds the sample courses (skips existing ones)
npm run seed:enrollments   # adds sample enrollments and learning progress for existing students
```

Both commands are safe to run again. The `seed:enrollments` command needs at least one student account (register one on the site first) and at least one course.

## Password resets, admin accounts and student export

- **Forgot password:** students cannot reset their own password. They request a reset, every administrator is notified, and the administrator resets it from **Student Accounts** on the admin dashboard. The new password is sent to the student's **Messages**.
- **Export:** **Export CSV** on the admin dashboard downloads name, email, student ID, department and password. Only passwords set by an administrator can be exported. Normal passwords are stored as one-way hashes and cannot be recovered.
- **More administrators:** on the Administrator Registration page, new administrators enter the `ADMIN_INVITE_CODE` from `backend/.env`. Anyone without the code cannot create an admin account.
- **Environment variables** (add to `backend/.env`):
  - `ADMIN_INVITE_CODE`: required for administrator registration.
  - `ENCRYPTION_KEY`: optional. Set it to a long random value to encrypt temporary passwords. If it is not set, `JWT_SECRET` is used.
