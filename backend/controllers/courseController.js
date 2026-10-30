const mongoose = require("mongoose");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");
const LearningProgress = require("../models/LearningProgress");

// Whitelist of fields clients may write (prevents mass-assignment).
const WRITABLE = [
    "courseName", "courseCode", "instructor", "duration", "category", "level",
    "image", "status", "overview", "learningOutcomes", "modules",
    "prerequisites", "videos", "materials", "maxStudents", "language",
    "certificate", "enrollmentType", "startDate", "endDate", "completed"
];

const REQUIRED = [
    ["courseName", "Course name is required"],
    ["courseCode", "Course code is required"],
    ["instructor", "Instructor is required"],
    ["duration", "Duration is required"],
    ["category", "Category is required"]
];

const isBlank = (v) => v === undefined || v === null || String(v).trim() === "";

function pickWritable(body) {
    const data = {};
    for (const key of WRITABLE) {
        if (body[key] !== undefined) {
            data[key] = typeof body[key] === "string" ? body[key].trim() : body[key];
        }
    }
    return data;
}

async function getAllCourses(req, res, next) {
    try {
        const page = Math.max(1, Number.parseInt(req.query.page, 10) || 1);
        const limit = Math.min(100, Math.max(1, Number.parseInt(req.query.limit, 10) || 100));
        const filter = {};

        if (typeof req.query.category === "string" && req.query.category) {
            filter.category = req.query.category;
        }
        if (typeof req.query.status === "string" && req.query.status) {
            filter.status = req.query.status;
        }

        const [courses, total] = await Promise.all([
            Course.find(filter).sort({ createdAt: 1 }).skip((page - 1) * limit).limit(limit),
            Course.countDocuments(filter)
        ]);

        res.json({ courses, page, limit, total });
    } catch (error) {
        next(error);
    }
}

async function getCourseById(req, res, next) {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ message: "Invalid course ID" });
        }

        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.json({ course });
    } catch (error) {
        next(error);
    }
}

async function createCourse(req, res, next) {
    try {
        for (const [field, message] of REQUIRED) {
            if (isBlank(req.body[field])) {
                return res.status(400).json({ message });
            }
        }

        const course = await Course.create(pickWritable(req.body));
        res.status(201).json({ message: "Course created", course });
    } catch (error) {
        next(error);
    }
}

async function updateCourse(req, res, next) {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ message: "Invalid course ID" });
        }

        const updates = pickWritable(req.body);

        for (const [field, message] of REQUIRED) {
            if (updates[field] !== undefined && isBlank(updates[field])) {
                return res.status(400).json({ message });
            }
        }

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({ message: "No valid fields supplied" });
        }

        const course = await Course.findByIdAndUpdate(
            req.params.id,
            { $set: updates },
            { new: true, runValidators: true }
        );

        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.json({ message: "Course updated", course });
    } catch (error) {
        next(error);
    }
}

async function deleteCourse(req, res, next) {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ message: "Invalid course ID" });
        }

        const course = await Course.findByIdAndDelete(req.params.id);

        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        await Promise.all([
            Enrollment.deleteMany({ course: course._id }),
            LearningProgress.deleteMany({ course: course._id })
        ]);

        res.json({ message: "Course deleted" });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse
};
