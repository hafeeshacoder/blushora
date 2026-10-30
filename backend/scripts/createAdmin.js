// Usage: ADMIN_NAME="Admin" ADMIN_EMAIL=admin@example.com ADMIN_PASSWORD='long-password-12+' npm run create-admin
require("dotenv").config();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const User = require("../models/User");

async function main() {
    const name = (process.env.ADMIN_NAME || "Administrator").trim();
    const email = (process.env.ADMIN_EMAIL || "").trim().toLowerCase();
    const password = process.env.ADMIN_PASSWORD || "";

    if (!email || password.length < 12) {
        throw new Error("Set ADMIN_EMAIL and ADMIN_PASSWORD (at least 12 characters)");
    }

    await connectDB();

    if (await User.exists({ email })) {
        console.log("A user with that email already exists - nothing changed.");
        return;
    }

    // Same model and same bcrypt strategy as normal registration
    await User.create({
        name,
        email,
        password: await bcrypt.hash(password, 12),
        role: "admin"
    });

    console.log(`Admin created: ${email}`);
}

main()
    .catch((error) => {
        console.error(error.message);
        process.exitCode = 1;
    })
    .finally(() => mongoose.connection.close());
