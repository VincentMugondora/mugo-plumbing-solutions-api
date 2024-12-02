const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getCurrentUser,
} = require("../controllers/authControllers");
const { authMiddleware } = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleware, getCurrentUser);

module.exports = router;
