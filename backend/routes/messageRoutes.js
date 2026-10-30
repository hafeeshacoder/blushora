const express = require("express");
const mongoose = require("mongoose");
const Message = require("../models/Message");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// GET /messages/contacts - people the user can chat with (id, name, role only)
router.get("/contacts", authMiddleware, async (req, res, next) => {
    try {
        const contacts = await User.find({ _id: { $ne: req.user.sub } })
            .select("name role").sort({ name: 1 }).limit(200).lean();
        res.json({ contacts });
    } catch (error) {
        next(error);
    }
});

// GET /messages/:userId - conversation between the caller and :userId
router.get("/:userId", authMiddleware, async (req, res, next) => {
    try {
        const myId = req.user.sub;
        const otherId = req.params.userId;

        if (!mongoose.isValidObjectId(myId) || !mongoose.isValidObjectId(otherId)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        // Only ever returns conversations the caller is part of.
        const messages = await Message.find({
            $or: [
                { sender: myId, recipient: otherId },
                { sender: otherId, recipient: myId }
            ]
        }).sort({ createdAt: -1 }).limit(100).lean();

        res.json({ messages: messages.reverse() });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
