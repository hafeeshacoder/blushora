const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const controller = require("../controllers/enrollmentController");

router.use(authMiddleware);

router.get("/me", authorizeRoles("student"), controller.getMyEnrollments);
router.post("/", authorizeRoles("student"), controller.enroll);
router.delete("/:courseId", authorizeRoles("student"), controller.unenroll);
router.get("/", authorizeRoles("admin"), controller.getAllEnrollments);

module.exports = router;
