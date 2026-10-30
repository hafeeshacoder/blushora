require("dotenv").config();

const http = require("http");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

const connectDB = require("./config/db");
const initializeSocket = require("./config/socket");
const { PORT, ALLOWED_ORIGINS, NODE_ENV } = require("./config/config");

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");
const profileRoutes = require("./routes/profileRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const learningProgressRoutes = require("./routes/learningProgressRoutes");
const messageRoutes = require("./routes/messageRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const notFound = require("./middleware/notFoundMiddleware");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const server = http.createServer(app);

// Render / Vercel sit behind a proxy; needed for correct client IPs (rate limit)
app.set("trust proxy", 1);

// 1. Security, CORS, parsing, logging
app.use(helmet());
app.use(
    cors({
        origin(origin, callback) {
            if (!origin || ALLOWED_ORIGINS.includes(origin)) {
                return callback(null, true);
            }
            callback(Object.assign(new Error("Origin not allowed by CORS"), { status: 403 }));
        }
    })
);
app.use(express.json({ limit: "100kb" }));
// Morgan logs method, URL and status only - never bodies or tokens.
app.use(morgan(NODE_ENV === "production" ? "combined" : "dev", {
    skip: () => NODE_ENV === "test"
}));

// 2. Test + health routes
app.get("/", (req, res) => {
    res.json({ message: "Student Course Management API is running", status: "running" });
});

app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok", message: "API is running" });
});

// 3. API routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/students", studentRoutes);
app.use("/api/v1/courses", courseRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/enrollments", enrollmentRoutes);
app.use("/api/v1/progress", learningProgressRoutes);
app.use("/api/v1/messages", messageRoutes);
app.use("/api/v1/notifications", notificationRoutes);

// 4. Unknown route, then centralized error handler (must stay last)
app.use(notFound);
app.use(errorHandler);

initializeSocket(server);

async function startServer() {
    try {
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not configured");
        }

        await connectDB();

        server.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Unable to start server:", error.message);
        process.exit(1);
    }
}

function shutdown(signal) {
    console.log(`${signal} received: shutting down`);
    server.close(async () => {
        await mongoose.connection.close().catch(() => {});
        process.exit(0);
    });
    setTimeout(() => process.exit(1), 10000).unref();
}

if (require.main === module) {
    process.on("unhandledRejection", (error) => {
        console.error("Unhandled rejection:", error);
        process.exit(1);
    });
    process.on("uncaughtException", (error) => {
        console.error("Uncaught exception:", error);
        process.exit(1);
    });
    process.on("SIGTERM", () => shutdown("SIGTERM"));
    process.on("SIGINT", () => shutdown("SIGINT"));

    startServer();
}

module.exports = { app, server };
