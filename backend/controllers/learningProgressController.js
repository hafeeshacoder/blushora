const mongoose = require("mongoose");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");
const LearningProgress = require("../models/LearningProgress");

// GET /progress/me
async function getMyProgress(req, res, next) {
    try {
        const progress = await LearningProgress.find({ student: req.user.sub })
            .populate("course", "courseName courseCode").lean();
        res.json({ progress });
    } catch (error) {
        next(error);
    }
}

// PUT /progress/:courseId  { completedLessons, totalLessons }
async function updateProgress(req, res, next) {
    try {
        const { courseId } = req.params;
        const completedLessons = Number(req.body.completedLessons);
        const totalLessons = Number(req.body.totalLessons);

        if (!mongoose.isValidObjectId(courseId)) {
            return res.status(400).json({ message: "Invalid course ID" });
        }

        if (
            !Number.isInteger(completedLessons) || !Number.isInteger(totalLessons) ||
            totalLessons < 1 || completedLessons < 0 || completedLessons > totalLessons
        ) {
            return res.status(400).json({
                message: "completedLessons and totalLessons must be valid whole numbers"
            });
        }

        if (!(await Course.exists({ _id: courseId }))) {
            return res.status(404).json({ message: "Course not found" });
        }

        const enrollment = await Enrollment.findOne({
            student: req.user.sub,
            course: courseId,
            status: { $ne: "withdrawn" }
        });

        if (!enrollment) {
            return res.status(403).json({ message: "You are not enrolled in this course" });
        }

        const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

        const progress = await LearningProgress.findOneAndUpdate(
            { student: req.user.sub, course: courseId },
            { $set: { completedLessons, totalLessons, progressPercentage } },
            { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }
        );

        enrollment.status = progressPercentage === 100 ? "completed" : "active";
        await enrollment.save();

        res.json({ message: "Progress updated", progress });
    } catch (error) {
        next(error);
    }
}

module.exports = { getMyProgress, updateProgress };
