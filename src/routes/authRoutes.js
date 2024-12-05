const express = require("express");
const {
  register,
  login,
  getAllUsers,
} = require("../controllers/authControllers"); 
const router = express.Router();

// User registration route
router.post("/register", register);

// User login route
router.post("/login", login);

// Route to get all users
router.get("/users", getAllUsers); 

module.exports = router;
