const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Notification = require("../models/Notification");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const publicUser = (user) => ({
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    studentId: user.studentId,
    department: user.department
});

async function register(req, res, next) {
    try {
        const { name, email, password, studentId, department } = req.body;

        if (
            typeof name !== "string" || !name.trim() ||
            typeof email !== "string" || !EMAIL_RE.test(email) ||
            typeof password !== "string" || password.length < 12
        ) {
            return res.status(400).json({
                message: "Valid name, email and password of at least 12 characters are required"
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        if (await User.findOne({ email: normalizedEmail })) {
            return res.status(409).json({ message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        // Public registration can only ever create students.
        const user = await User.create({
            name: name.trim(),
            email: normalizedEmail,
            password: hashedPassword,
            role: "student",
            studentId: typeof studentId === "string" && studentId.trim() ? studentId.trim() : undefined,
            department: typeof department === "string" && department.trim() ? department.trim() : undefined
        });

        return res.status(201).json({
            message: "Registration successful",
            student: publicUser(user)
        });
    } catch (error) {
        next(error);
    }
}

async function login(req, res, next) {
    try {
        const { email, password } = req.body;

        if (typeof email !== "string" || typeof password !== "string") {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({
            email: email.trim().toLowerCase()
        }).select("+password");

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is missing");
        }

        const expiresIn = process.env.JWT_EXPIRES_IN || "1h";

        const token = jwt.sign(
            { email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { subject: String(user._id), expiresIn, algorithm: "HS256" }
        );

        return res.json({
            message: "Login successful",
            token,
            tokenType: "Bearer",
            expiresIn,
            student: publicUser(user)
        });
    } catch (error) {
        next(error);
    }
}

const FORGOT_PASSWORD_MESSAGE =
    "Your password is reset by the administrator. Your request has been sent. " +
    "Please contact the administrator, who will send your new password to your Blushora messages.";

// Compares two strings without leaking timing information
function codesMatch(given, expected) {
    const a = crypto.createHash("sha256").update(given).digest();
    const b = crypto.createHash("sha256").update(expected).digest();
    return crypto.timingSafeEqual(a, b);
}

// POST /auth/forgot-password  { email }
// Always gives the same answer so people cannot discover which emails are registered.
// If a student exists, every administrator gets a notification to reset the password.
async function forgotPassword(req, res, next) {
    try {
        const email = req.body.email.trim().toLowerCase();
        const student = await User.findOne({ email, role: "student" }).select("name").lean();

        if (student) {
            const admins = await User.find({ role: "admin" }).select("_id").lean();

            await Notification.insertMany(
                admins.map((admin) => ({
                    recipient: admin._id,
                    message: `${student.name} (${email}) forgot their password. Open Student Accounts to reset it.`
                }))
            );
        }

        res.json({ message: FORGOT_PASSWORD_MESSAGE });
    } catch (error) {
        next(error);
    }
}

// POST /auth/register-admin  { name, email, password, inviteCode, adminId?, designation? }
// Administrators can only be created by someone who knows the ADMIN_INVITE_CODE set on the server.
async function registerAdmin(req, res, next) {
    try {
        const { name, email, password, inviteCode, adminId, designation } = req.body;

        if (!process.env.ADMIN_INVITE_CODE) {
            return res.status(403).json({ message: "Administrator registration is not enabled on this server" });
        }

        if (!codesMatch(inviteCode, process.env.ADMIN_INVITE_CODE)) {
            return res.status(403).json({ message: "Invalid administrator invite code" });
        }

        const normalizedEmail = email.trim().toLowerCase();

        if (await User.exists({ email: normalizedEmail })) {
            return res.status(409).json({ message: "Email already registered" });
        }

        if (adminId && await User.exists({ studentId: adminId.trim() })) {
            return res.status(409).json({ message: "Administrator ID already in use" });
        }

        const admin = await User.create({
            name: name.trim(),
            email: normalizedEmail,
            password: await bcrypt.hash(password, 12),
            role: "admin",
            studentId: adminId && adminId.trim() ? adminId.trim() : undefined,
            department: designation && designation.trim() ? designation.trim() : undefined
        });

        return res.status(201).json({
            message: "Administrator registration successful",
            admin: publicUser(admin)
        });
    } catch (error) {
        next(error);
    }
}

// POST /auth/change-password  { currentPassword, newPassword }  (signed-in students and admins)
// Clears any temporary password, so the export no longer shows the old one.
async function changePassword(req, res, next) {
    try {
        const { currentPassword, newPassword } = req.body;
        const user = await User.findById(req.user.sub).select("+password");

        if (!user) {
            return res.status(404).json({ message: "Account not found" });
        }

        if (!(await bcrypt.compare(currentPassword, user.password))) {
            return res.status(401).json({ message: "Current password is incorrect" });
        }

        if (await bcrypt.compare(newPassword, user.password)) {
            return res.status(400).json({ message: "New password must be different from the current password" });
        }

        await User.updateOne(
            { _id: user._id },
            {
                $set: { password: await bcrypt.hash(newPassword, 12) },
                $unset: { temporaryPassword: 1 }
            }
        );

        return res.json({ message: "Password changed successfully" });
    } catch (error) {
        next(error);
    }
}

module.exports = { register, login, forgotPassword, registerAdmin, changePassword };
