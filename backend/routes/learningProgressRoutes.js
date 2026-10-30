const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const controller = require("../controllers/learningProgressController");

router.use(authMiddleware, authorizeRoles("student"));

router.get("/me", controller.getMyProgress);
router.put("/:courseId", controller.updateProgress);

module.exports = router;
