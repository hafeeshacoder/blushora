const { body, param } = require("express-validator");

const idParam = param("id").isMongoId().withMessage("Invalid course ID");

const required = (field, label, max = 150) =>
    body(field).isString().withMessage(`${label} is required`)
        .bail().trim().notEmpty().withMessage(`${label} is required`)
        .isLength({ max }).withMessage(`${label} is too long`);

const optional = (field, max) =>
    body(field).optional().isString().withMessage(`${field} must be text`)
        .isLength({ max }).withMessage(`${field} is too long`);

const arrayField = (field) =>
    body(field).optional().isArray({ max: 100 }).withMessage(`${field} must be a list`);

const optionalFields = [
    optional("level", 50), optional("image", 1000), optional("status", 30),
    optional("overview", 5000), optional("language", 50), optional("certificate", 10),
    optional("enrollmentType", 30), optional("startDate", 30), optional("endDate", 30),
    arrayField("learningOutcomes"), arrayField("modules"), arrayField("prerequisites"),
    arrayField("videos"), arrayField("materials")
];

const createCourseValidation = [
    required("courseName", "Course name"),
    required("courseCode", "Course code", 30),
    required("instructor", "Instructor", 100),
    required("duration", "Duration", 50),
    required("category", "Category", 80),
    ...optionalFields
];

const updateCourseValidation = [
    idParam,
    ...["courseName", "courseCode", "instructor", "duration", "category"].map((f) =>
        body(f).optional().isString().bail().trim().notEmpty()
            .withMessage(`${f} cannot be empty`)),
    ...optionalFields
];

module.exports = { createCourseValidation, updateCourseValidation, idParam };
