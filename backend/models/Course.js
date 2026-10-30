const mongoose = require("mongoose");

// Field names match the existing Blushora course records (mock-api/db.json)
// so the current React pages keep working unchanged.
// duration is free text such as "8 Weeks".
const courseSchema = new mongoose.Schema(
    {
        courseName: { type: String, required: true, trim: true, maxlength: 150 },
        courseCode: { type: String, required: true, trim: true, unique: true, maxlength: 30 },
        instructor: { type: String, required: true, trim: true, maxlength: 100 },
        duration: { type: String, required: true, trim: true, maxlength: 50 },
        category: { type: String, required: true, trim: true, maxlength: 80 },
        level: { type: String, trim: true, default: "Beginner" },
        image: { type: String, trim: true, default: "" },
        status: { type: String, trim: true, default: "Active" },
        overview: { type: String, trim: true, default: "", maxlength: 5000 },
        learningOutcomes: { type: [String], default: [] },
        modules: { type: [String], default: [] },
        prerequisites: { type: [String], default: [] },
        videos: { type: [String], default: [] },
        materials: { type: [String], default: [] },
        maxStudents: { type: String, default: "100" },
        language: { type: String, trim: true, default: "English" },
        certificate: { type: String, trim: true, default: "Yes" },
        enrollmentType: { type: String, trim: true, default: "Open" },
        startDate: { type: String, default: "" },
        endDate: { type: String, default: "" },
        completed: { type: Boolean, default: false }
    },
    { timestamps: true }
);

courseSchema.set("toJSON", {
    virtuals: true,
    transform(doc, ret) {
        ret.id = String(ret._id);
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

module.exports = mongoose.model("Course", courseSchema);
