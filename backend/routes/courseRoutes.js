const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const validateRequest = require("../middleware/validateRequest");
const courseController = require("../controllers/courseController");
const {
    createCourseValidation, updateCourseValidation, idParam
} = require("../validators/courseValidators");

// Public: anyone can browse courses
router.get("/", courseController.getAllCourses);
router.get("/:id", idParam, validateRequest, courseController.getCourseById);

// Admin only
router.post("/", authMiddleware, authorizeRoles("admin"),
    createCourseValidation, validateRequest, courseController.createCourse);
router.put("/:id", authMiddleware, authorizeRoles("admin"),
    updateCourseValidation, validateRequest, courseController.updateCourse);
router.delete("/:id", authMiddleware, authorizeRoles("admin"),
    idParam, validateRequest, courseController.deleteCourse);

module.exports = router;
