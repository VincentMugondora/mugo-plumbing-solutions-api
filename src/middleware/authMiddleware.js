// src/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract token from "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add decoded user info to the request object
    next(); // Proceed to next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
