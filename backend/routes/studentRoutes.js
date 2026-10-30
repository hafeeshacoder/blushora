const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const validateRequest = require("../middleware/validateRequest");
const controller = require("../controllers/studentController");
const {
    studentIdParam, createStudentValidation, updateStudentValidation
} = require("../validators/studentValidators");

router.use(authMiddleware);
router.use(authorizeRoles("admin"));

router.get("/", controller.getStudents);
// Must come before "/:id" so "export" is not treated as a student ID
router.get("/export", controller.exportStudents);
router.get("/:id", studentIdParam, validateRequest, controller.getStudentById);
router.post("/", createStudentValidation, validateRequest, controller.createStudent);
router.post("/:id/reset-password", studentIdParam, validateRequest, controller.resetStudentPassword);
router.put("/:id", updateStudentValidation, validateRequest, controller.updateStudent);
router.delete("/:id", studentIdParam, validateRequest, controller.deleteStudent);

module.exports = router;
