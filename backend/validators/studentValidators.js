const { body, param } = require("express-validator");

const studentIdParam = param("id").isMongoId().withMessage("Invalid student ID");

const createStudentValidation = [
    body("name").isString().trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
    body("password").isString().isLength({ min: 12, max: 128 })
        .withMessage("Password must contain 12 to 128 characters")
];

const updateStudentValidation = [
    studentIdParam,
    body("name").optional().isString().bail().trim().notEmpty().withMessage("Invalid name"),
    body("email").optional().isEmail().withMessage("Invalid email").normalizeEmail()
];

module.exports = { studentIdParam, createStudentValidation, updateStudentValidation };
