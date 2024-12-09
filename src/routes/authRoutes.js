const express = require("express");
const multer = require("multer");
const {
  register,
  login,
  getAllUsers,
  getUserById,
  updateProfile,
} = require("../controllers/authControllers");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory for storing uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

// User registration route
router.post("/register", register);

// User login route
router.post("/login", login);

// Route to get all users (protected)
router.get("/users", authMiddleware, getAllUsers);

// Route to get user profile (protected)
router.get("/profile/:id", authMiddleware, getUserById);

// Route to update profile (including avatar) (protected)
router.put(
  "/profile/:id",
  authMiddleware,
  upload.single("avatar"),
  updateProfile
);

module.exports = router;
