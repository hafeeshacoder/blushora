// Imports the 12 sample courses from mock-api/db.json into MongoDB.
// Safe to re-run: existing course codes are skipped.
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Course = require("../models/Course");

async function main() {
    const file = path.join(__dirname, "..", "..", "mock-api", "db.json");
    const { courses = [] } = JSON.parse(fs.readFileSync(file, "utf8"));

    await connectDB();

    let created = 0;
    for (const { id, ...course } of courses) {
        if (await Course.exists({ courseCode: course.courseCode })) continue;
        await Course.create(course);
        created++;
    }

    console.log(`Seeded ${created} course(s); ${courses.length - created} already existed.`);
}

main()
    .catch((error) => {
        console.error(error.message);
        process.exitCode = 1;
    })
    .finally(() => mongoose.connection.close());
