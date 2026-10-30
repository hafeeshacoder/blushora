const User = require("../models/User");

async function getProfile(req, res, next) {
    try {
        const user = await User.findById(req.user.sub).select("name email role createdAt");

        if (!user) {
            return res.status(404).json({ message: "Profile not found" });
        }

        res.json({ user });
    } catch (error) {
        next(error);
    }
}

async function updateProfile(req, res, next) {
    try {
        const { name } = req.body;

        if (typeof name !== "string" || !name.trim()) {
            return res.status(400).json({ message: "Valid name is required" });
        }

        const user = await User.findByIdAndUpdate(
            req.user.sub,
            { $set: { name: name.trim() } },
            { new: true, runValidators: true }
        ).select("name email role");

        if (!user) {
            return res.status(404).json({ message: "Profile not found" });
        }

        res.json({ message: "Profile updated", user });
    } catch (error) {
        next(error);
    }
}

module.exports = { getProfile, updateProfile };
