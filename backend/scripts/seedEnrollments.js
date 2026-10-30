// Creates sample enrollments and learning progress for existing student users.
// Usage: npm run seed:enrollments
// Run `npm run seed` first so the courses exist.
// Safe to re-run: existing enrollment and progress records are never changed.
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const User = require("../models/User");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");
const LearningProgress = require("../models/LearningProgress");

const COURSES_PER_STUDENT = 3;
const TOTAL_LESSONS = 10;

// Sample data for the 1st, 2nd and 3rd course of each student.
// daysAgo sets the enrollment date.
const SAMPLE = [
    { completedLessons: TOTAL_LESSONS, daysAgo: 30 }, // finished -> "completed"
    { completedLessons: 6, daysAgo: 14 },             // half way -> "active"
    { completedLessons: 0, daysAgo: 3 }               // just started -> "active"
];

const daysAgo = (days) => new Date(Date.now() - days * 24 * 60 * 60 * 1000);

async function main() {
    await connectDB();

    const students = await User.find({ role: "student" }).select("_id").lean();
    const courses = await Course.find().sort({ _id: 1 }).select("_id").lean();

    if (students.length === 0) {
        throw new Error("No student users found. Register a student first.");
    }
    if (courses.length === 0) {
        throw new Error("No courses found. Run `npm run seed` first.");
    }

    const perStudent = Math.min(COURSES_PER_STUDENT, courses.length);
    let enrollmentsCreated = 0;
    let progressCreated = 0;

    for (const [studentIndex, student] of students.entries()) {
        for (let k = 0; k < perStudent; k++) {
            // Spread students across courses so the data is not all the same
            const course = courses[(studentIndex + k) % courses.length];
            const sample = SAMPLE[k];
            const progressPercentage = Math.round((sample.completedLessons / TOTAL_LESSONS) * 100);
            // Same rule as the progress API: 100% means completed
            const status = progressPercentage === 100 ? "completed" : "active";

            const enrollResult = await Enrollment.updateOne(
                { student: student._id, course: course._id },
                { $setOnInsert: { status, enrolledAt: daysAgo(sample.daysAgo) } },
                { upsert: true }
            );
            if (enrollResult.upsertedCount) enrollmentsCreated++;

            const progressResult = await LearningProgress.updateOne(
                { student: student._id, course: course._id },
                {
                    $setOnInsert: {
                        completedLessons: sample.completedLessons,
                        totalLessons: TOTAL_LESSONS,
                        progressPercentage
                    }
                },
                { upsert: true }
            );
            if (progressResult.upsertedCount) progressCreated++;
        }
    }

    console.log(`Students: ${students.length}, courses: ${courses.length}`);
    console.log(`Enrollments created: ${enrollmentsCreated}`);
    console.log(`Learning progress records created: ${progressCreated}`);
}

main()
    .catch((error) => {
        console.error(error.message);
        process.exitCode = 1;
    })
    .finally(() => mongoose.connection.close());
