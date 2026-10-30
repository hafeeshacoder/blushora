const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Enrollment = require("../models/Enrollment");
const LearningProgress = require("../models/LearningProgress");
const Notification = require("../models/Notification");
const Message = require("../models/Message");
const { encrypt, decrypt } = require("../utils/passwordCrypto");
const generatePassword = require("../utils/generatePassword");

const publicFields = "name email role studentId department createdAt updatedAt";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function getStudents(req, res, next) {
    try {
        const students = await User.find({ role: "student" })
            .select(publicFields).sort({ createdAt: -1 }).lean();
        res.json({ students });
    } catch (error) {
        next(error);
    }
}

async function getStudentById(req, res, next) {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ message: "Invalid student ID" });
        }

        const student = await User.findOne({ _id: req.params.id, role: "student" })
            .select(publicFields);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json({ student });
    } catch (error) {
        next(error);
    }
}

async function createStudent(req, res, next) {
    try {
        const { name, email, password } = req.body;

        if (
            typeof name !== "string" || !name.trim() ||
            typeof email !== "string" || !EMAIL_RE.test(email) ||
            typeof password !== "string" || password.length < 12
        ) {
            return res.status(400).json({
                message: "Valid name, email and password are required"
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        if (await User.exists({ email: normalizedEmail })) {
            return res.status(409).json({ message: "Email already registered" });
        }

        const student = await User.create({
            name: name.trim(),
            email: normalizedEmail,
            password: await bcrypt.hash(password, 12),
            role: "student"
        });

        res.status(201).json({
            message: "Student created",
            student: {
                id: student.id,
                name: student.name,
                email: student.email,
                role: student.role
            }
        });
    } catch (error) {
        next(error);
    }
}

async function updateStudent(req, res, next) {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: "Invalid student ID" });
        }

        const updates = {};

        if (req.body.name !== undefined) {
            if (typeof req.body.name !== "string" || !req.body.name.trim()) {
                return res.status(400).json({ message: "Invalid name" });
            }
            updates.name = req.body.name.trim();
        }

        if (req.body.email !== undefined) {
            if (typeof req.body.email !== "string" || !EMAIL_RE.test(req.body.email)) {
                return res.status(400).json({ message: "Invalid email" });
            }
            updates.email = req.body.email.trim().toLowerCase();
        }

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({ message: "No valid fields supplied" });
        }

        const student = await User.findOneAndUpdate(
            { _id: id, role: "student" },
            { $set: updates },
            { new: true, runValidators: true }
        ).select(publicFields);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json({ message: "Student updated", student });
    } catch (error) {
        next(error);
    }
}

async function deleteStudent(req, res, next) {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ message: "Invalid student ID" });
        }

        const student = await User.findOneAndDelete({
            _id: req.params.id,
            role: "student"
        });

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        // Remove dependent records so no orphaned data is left behind.
        await Promise.all([
            Enrollment.deleteMany({ student: student._id }),
            LearningProgress.deleteMany({ student: student._id }),
            Notification.deleteMany({ recipient: student._id }),
            Message.deleteMany({
                $or: [{ sender: student._id }, { recipient: student._id }]
            })
        ]);

        res.json({ message: "Student deleted" });
    } catch (error) {
        next(error);
    }
}

// POST /students/:id/reset-password
// Creates a new password, stores it (hashed for login, encrypted for export),
// and sends it to the student's Messages inbox.
async function resetStudentPassword(req, res, next) {
    try {
        const student = await User.findOne({ _id: req.params.id, role: "student" });

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        const newPassword = generatePassword(12);

        student.password = await bcrypt.hash(newPassword, 12);
        student.temporaryPassword = encrypt(newPassword);
        await student.save();

        await Promise.all([
            Message.create({
                sender: req.user.sub,
                recipient: student._id,
                text: `Your password has been reset by the administrator.\nYour new password is: ${newPassword}\nPlease log in with it and keep it safe.`
            }),
            Notification.create({
                recipient: student._id,
                message: "Your password was reset by the administrator. Check your messages for the new password."
            })
        ]);

        res.json({
            message: "Password reset. The new password has been sent to the student's messages.",
            password: newPassword,
            student: { id: student.id, name: student.name, email: student.email }
        });
    } catch (error) {
        next(error);
    }
}

// Protects the spreadsheet from formulas such as =HYPERLINK(...)
function csvCell(value) {
    let text = value === undefined || value === null ? "" : String(value);

    if (/^[=+\-@]/.test(text)) {
        text = `'${text}`;
    }

    return `"${text.replace(/"/g, '""')}"`;
}

// GET /students/export  -> CSV download
async function exportStudents(req, res, next) {
    try {
        const students = await User.find({ role: "student" })
            .select("name email studentId department +temporaryPassword")
            .sort({ name: 1 })
            .lean();

        const rows = [["Name", "Email", "Student ID", "Department", "Password", "Password note"]];

        for (const student of students) {
            let password = "";
            let note = "Not stored. Use Reset Password to create one.";

            if (student.temporaryPassword) {
                try {
                    password = decrypt(student.temporaryPassword);
                    note = "Temporary password set by administrator";
                } catch (error) {
                    note = "Stored password could not be read. Reset it again.";
                }
            }

            rows.push([student.name, student.email, student.studentId || "", student.department || "", password, note]);
        }

        const csv = "\uFEFF" + rows.map((row) => row.map(csvCell).join(",")).join("\r\n");
        const date = new Date().toISOString().slice(0, 10);

        res.setHeader("Content-Type", "text/csv; charset=utf-8");
        res.setHeader("Content-Disposition", `attachment; filename="students-${date}.csv"`);
        res.send(csv);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
    resetStudentPassword,
    exportStudents
};
