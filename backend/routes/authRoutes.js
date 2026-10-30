const express = require("express");
const { rateLimit } = require("express-rate-limit");
const router = express.Router();
const authController = require("../controllers/authController");
const {
    registerValidation,
    loginValidation,
    forgotPasswordValidation,
    registerAdminValidation,
    changePasswordValidation
} = require("../validators/authValidators");
const validateRequest = require("../middleware/validateRequest");
const loginLimiter = require("../middleware/loginLimiter");
const authMiddleware = require("../middleware/authMiddleware");

// Separate limiter so forgot-password and invite-code attempts do not use up the login limit
const sensitiveLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: process.env.NODE_ENV === "test" ? 1000 : 20,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: { message: "Too many attempts. Try again later." }
});

router.post("/register", registerValidation, validateRequest, authController.register);
router.post("/login", loginLimiter, loginValidation, validateRequest, authController.login);
router.post("/forgot-password", sensitiveLimiter, forgotPasswordValidation, validateRequest, authController.forgotPassword);
router.post("/register-admin", sensitiveLimiter, registerAdminValidation, validateRequest, authController.registerAdmin);
router.post("/change-password", authMiddleware, changePasswordValidation, validateRequest, authController.changePassword);

module.exports = router;
