# Blushora

**A Full-Stack Student Course Management and Learning Progress Platform**

Blushora is a web-based learning management application that brings course discovery, student enrollment, learning progress, and academic administration together in one place. Students can explore courses, manage their enrollments, continue learning, monitor progress, and communicate through the platform. Administrators can manage courses and student records and oversee enrollment activity.

The project is built with a React and Vite frontend, a Node.js and Express REST API, MongoDB, JWT-based authentication, and Socket.IO for real-time communication.

## Table of Contents

- [Features](#features)
- [User Roles](#user-roles)
- [Technology Stack](#technology-stack)
- [Application Structure](#application-structure)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [Database Seeding and Admin Setup](#database-seeding-and-admin-setup)
- [API Overview](#api-overview)
- [Real-Time Communication](#real-time-communication)
- [Testing](#testing)
- [Security Notes](#security-notes)
- [Known Limitations](#known-limitations)
- [Future Enhancements](#future-enhancements)
- [Author](#author)

## Features

### Student Experience

- Student registration and secure login
- Student profile viewing and editing
- Browse and view course details
- Enroll in available courses and manage enrollments
- Access enrolled courses and learning modules
- Track completed modules and course progress
- View learning dashboards and completion information
- Access certificates
- Receive notifications and communicate through messaging
- Change password and submit a password-reset request

### Administrator Experience

- Dedicated administrator dashboard
- Add, update, and remove courses
- View and manage student accounts
- Monitor course enrollments
- Review student and course information
- Reset student passwords
- Export student information as CSV
- Receive and manage platform notifications
- Administrator registration protected by an invite code

### Platform Capabilities

- RESTful API architecture
- Role-based access for students and administrators
- Password hashing with bcryptjs
- JWT-protected endpoints
- MongoDB persistence with Mongoose models
- Real-time messaging and notifications using Socket.IO
- Request validation and centralized error handling
- Security headers, CORS configuration, and login rate limiting
- Responsive React interface with client-side routing

## User Roles

| Role | Main permissions |
| --- | --- |
| Student | Manage profile, browse courses, enroll, access learning content, track progress, view notifications, and use messaging |
| Administrator | Manage courses and student accounts, view enrollments, reset student passwords, and export student information |

## Technology Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React 18, Vite, JavaScript, HTML5, CSS3 |
| Routing | React Router DOM |
| HTTP communication | Axios |
| Backend | Node.js, Express 5 |
| Database | MongoDB, Mongoose |
| Authentication | JSON Web Tokens (JWT), bcryptjs |
| Real-time features | Socket.IO, socket.io-client |
| Validation | express-validator |
| Security | Helmet, CORS, express-rate-limit |
| Logging | Morgan |
| API testing | Postman |
| Version control | Git, GitHub |

## Application Structure

```text
blushora/
├── backend/
│   ├── config/          # Database, application and Socket.IO configuration
│   ├── controllers/     # API request handlers
│   ├── middleware/      # Authentication, roles, validation and error handling
│   ├── models/          # Mongoose schemas
│   ├── routes/          # REST API routes
│   ├── scripts/         # Admin creation and sample-data scripts
│   ├── utils/           # Shared backend utilities
│   ├── validators/      # Request validation rules
│   ├── .env.example     # Backend environment template
│   └── server.js        # Express and Socket.IO server
│
├── react-frontend/
│   ├── src/
│   │   ├── api/         # API and Socket.IO clients
│   │   ├── auth/        # Authentication context
│   │   ├── components/  # Shared UI components
│   │   ├── context/     # Application context
│   │   ├── pages/       # Student, admin and course pages
│   │   └── services/    # Frontend service functions
│   ├── .env.example
│   └── package.json
│
├── frontend/            # Earlier static HTML frontend version
├── mock-api/            # Original JSON Server seed data
├── docs/
│   ├── database-schema.md
│   └── postman/         # Postman API collection
├── Project-structure.docx
└── README.md
```

The primary application frontend is in `react-frontend/`. The `frontend/` directory contains the earlier static HTML version, and `mock-api/` contains the original JSON Server data used as a seed source.

## Getting Started

### Prerequisites

Install the following before running the application:

- Node.js 18 or later
- npm
- MongoDB Community Server or a MongoDB Atlas cluster
- Git

### 1. Clone the repository

```bash
git clone https://github.com/hafeeshacoder/blushora.git
cd blushora
```

### 2. Configure and start the backend

```bash
cd backend
npm install
```

Create a `.env` file by copying the example file.

**Windows PowerShell:**

```powershell
Copy-Item .env.example .env
```

**macOS / Linux:**

```bash
cp .env.example .env
```

Open `backend/.env` and configure the values described in [Environment Configuration](#environment-configuration). Set a secure `JWT_SECRET` and provide a valid MongoDB connection string.

Start the backend in development mode:

```bash
npm run dev
```

Or start it normally:

```bash
npm start
```

The backend uses port `3001` by default. Check the API health endpoint:

```text
http://localhost:3001/api/health
```

### 3. Configure and start the React frontend

Open a second terminal from the project root:

```bash
cd react-frontend
npm install
```

Create the frontend environment file.

**Windows PowerShell:**

```powershell
Copy-Item .env.example .env
```

**macOS / Linux:**

```bash
cp .env.example .env
```

Configure the API and Socket.IO URLs in `react-frontend/.env`:

```env
VITE_API_URL=http://localhost:3001/api/v1
VITE_SOCKET_URL=http://localhost:3001
```

Start the frontend:

```bash
npm run dev
```

Vite will display the local development URL, normally:

```text
http://localhost:5173
```

### 4. Build the frontend

From the `react-frontend/` directory:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Environment Configuration

### Backend: `backend/.env`

| Variable | Purpose | Example |
| --- | --- | --- |
| `PORT` | Backend server port | `3001` |
| `NODE_ENV` | Runtime environment | `development` |
| `MONGO_URI` | MongoDB connection string | `mongodb://127.0.0.1:27017/edubloom_course_system` |
| `JWT_SECRET` | Secret used to sign JWTs | Generate a long random secret |
| `JWT_EXPIRES_IN` | JWT expiration duration | `1h` |
| `CLIENT_URL` | Allowed frontend origin(s) | `http://localhost:5173` |
| `ADMIN_NAME` | Name used by the admin creation script | `Administrator` |
| `ADMIN_EMAIL` | Email used by the admin creation script | `admin@example.com` |
| `ADMIN_PASSWORD` | Password used by the admin creation script | Use a strong password |
| `ADMIN_INVITE_CODE` | Invite code for administrator registration | Set a private random value |
| `ENCRYPTION_KEY` | Optional key for temporary-password encryption | Set a long random value |

Generate a random JWT secret with Node.js:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

`CLIENT_URL` can contain a comma-separated list of allowed frontend origins when more than one origin is required. Do not commit real `.env` files or expose secret values in source code.

### Frontend: `react-frontend/.env`

```env
VITE_API_URL=http://localhost:3001/api/v1
VITE_SOCKET_URL=http://localhost:3001
```

The API URL includes `/api/v1`; the Socket.IO URL is the backend origin without that API path.

## Database Seeding and Admin Setup

Run these commands from the `backend/` directory after configuring the database connection.

Seed the sample courses:

```bash
npm run seed
```

Create an administrator account using the values configured in `backend/.env`:

```bash
npm run create-admin
```

Seed sample enrollments and learning-progress records:

```bash
npm run seed:enrollments
```

The enrollment seeding script requires at least one student account and at least one course in the database. Review the script output before rerunning seed operations.

Public student registration does not create administrator accounts. Use the admin creation script or the configured administrator invite-code flow.

## API Overview

The backend API is served under `/api/v1`. The health endpoint is `GET /api/health`.

| Module | Method | Endpoint | Access |
| --- | --- | --- | --- |
| Authentication | POST | `/auth/register` | Public |
| Authentication | POST | `/auth/login` | Public |
| Authentication | POST | `/auth/forgot-password` | Public, rate-limited |
| Authentication | POST | `/auth/register-admin` | Invite-code protected |
| Authentication | POST | `/auth/change-password` | Authenticated |
| Students | GET | `/students` | Administrator workflow |
| Students | GET | `/students/:id` | Administrator workflow |
| Students | POST | `/students` | Administrator workflow |
| Students | PUT | `/students/:id` | Administrator workflow |
| Students | DELETE | `/students/:id` | Administrator workflow |
| Students | POST | `/students/:id/reset-password` | Administrator workflow |
| Students | GET | `/students/export` | Administrator workflow |
| Courses | GET | `/courses` | Public |
| Courses | GET | `/courses/:id` | Public |
| Courses | POST | `/courses` | Administrator |
| Courses | PUT | `/courses/:id` | Administrator |
| Courses | DELETE | `/courses/:id` | Administrator |
| Profile | GET | `/profile` | Authenticated |
| Profile | PUT | `/profile` | Authenticated |
| Enrollments | GET | `/enrollments/me` | Student |
| Enrollments | POST | `/enrollments` | Student |
| Enrollments | DELETE | `/enrollments/:courseId` | Student |
| Enrollments | GET | `/enrollments` | Administrator |
| Learning progress | GET | `/progress/me` | Authenticated |
| Learning progress | PUT | `/progress/:courseId` | Authenticated |
| Messages | GET | `/messages/contacts` | Authenticated |
| Messages | GET | `/messages/:userId` | Authenticated |
| Notifications | GET | `/notifications` | Authenticated |
| Notifications | PATCH | `/notifications/:id/read` | Authenticated |

Send the JWT using the `Authorization: Bearer <token>` header for protected REST endpoints. Actual role permissions are enforced by the backend middleware.

## Real-Time Communication

Blushora uses Socket.IO for real-time messaging and notification delivery. The socket connection is authenticated using a JWT supplied in the connection authentication payload.

- Client event: `send_message`
- Server event: `receive_message`
- Server event: `new_notification`

The backend persists message and notification records in MongoDB. The frontend uses the Socket.IO client to connect to the backend.

## Testing

A Postman collection is included at:

```text
docs/postman/edubloom.postman_collection.json
```

Import this file into Postman to explore and test the API requests. Configure the collection variables and authenticate before running protected endpoints.

Backend test command:

```bash
cd backend
npm test
```

Frontend production build check:

```bash
cd react-frontend
npm run build
```

## Security Notes

- Passwords are hashed using bcryptjs.
- JWT authentication protects private API operations.
- Role middleware separates student and administrator access.
- Helmet adds common HTTP security headers.
- CORS restricts browser access to configured frontend origins.
- Login and sensitive authentication routes use rate limiting.
- Request validators and centralized error middleware help handle invalid input and API failures.
- Environment secrets must remain outside version control.

For a public production deployment, review token storage, password-reset workflows, messaging permissions, rate-limit storage, and the handling of exported student data before launch.

## Known Limitations

- The repository includes both the React application and an earlier static HTML frontend. The React application in `react-frontend/` is the primary frontend for the current full-stack setup.
- Some legacy HTML/JavaScript workflows retain browser-side storage behavior and should not be assumed to use the current REST API.
- Password-reset requests and administrator-managed password resets follow the workflow implemented in the application; a conventional email-based self-service reset flow is not included.
- JWTs are stored in browser session storage by the current frontend implementation. HttpOnly secure cookies may be considered for a production security model.
- Review and restrict messaging recipient permissions and exported student fields before exposing the application publicly.

## Future Enhancements

- Add a complete email-based password reset and account verification workflow.
- Expand course content support with video lessons, downloadable resources, and assessments.
- Add assignment submission, grading, and feedback modules.
- Improve learning analytics with detailed student and course performance reports.
- Add stronger messaging controls, including recipient restrictions and moderation tools.
- Introduce automated integration tests and continuous deployment checks.
- Improve accessibility and add broader responsive-device testing.
- Deploy the frontend and backend with production monitoring and documented live URLs.

## Author

**Fathima Hafeesha P**

- GitHub: [@hafeeshacoder](https://github.com/hafeeshacoder)
- Repository: [Blushora](https://github.com/hafeeshacoder/blushora)

---

If you find this project useful, feel free to explore the repository, review the implementation, and share feedback.
