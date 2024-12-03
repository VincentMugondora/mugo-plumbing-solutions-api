const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getCurrentUser,
} = require("../controllers/authControllers");
const { authMiddleware } = require("../middleware/authMiddleware");

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

// Get current logged-in user's profile
router.get("/profile", authMiddleware, getCurrentUser);

module.exports = router;
