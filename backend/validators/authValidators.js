const { body } = require("express-validator");

const registerValidation = [
    body("name").isString().trim().notEmpty().withMessage("Name is required")
        .isLength({ max: 100 }).withMessage("Name is too long"),
    body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
    body("password").isString().isLength({ min: 12, max: 128 })
        .withMessage("Password must contain 12 to 128 characters"),
    body("studentId").optional().isString().trim().isLength({ max: 50 })
        .withMessage("Student ID is too long"),
    body("department").optional().isString().trim().isLength({ max: 100 })
        .withMessage("Department is too long")
];

const loginValidation = [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").isString().notEmpty().withMessage("Password is required")
];

const forgotPasswordValidation = [
    body("email").isEmail().withMessage("Valid email is required")
];

const registerAdminValidation = [
    body("name").isString().trim().isLength({ min: 3, max: 100 })
        .withMessage("Administrator name must contain 3 to 100 characters"),
    body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
    body("password").isString().isLength({ min: 12, max: 128 })
        .withMessage("Password must contain 12 to 128 characters"),
    body("inviteCode").isString().notEmpty().withMessage("Invite code is required"),
    body("adminId").optional().isString().trim().isLength({ max: 50 })
        .withMessage("Administrator ID is too long"),
    body("designation").optional().isString().trim().isLength({ max: 100 })
        .withMessage("Designation is too long")
];

const changePasswordValidation = [
    body("currentPassword").isString().notEmpty().withMessage("Current password is required"),
    body("newPassword").isString().isLength({ min: 12, max: 128 })
        .withMessage("New password must contain 12 to 128 characters")
];

module.exports = {
    changePasswordValidation,
    registerValidation,
    loginValidation,
    forgotPasswordValidation,
    registerAdminValidation
};
