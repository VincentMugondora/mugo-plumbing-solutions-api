const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  // Get token from the Authorization header (Bearer <token>)
  const token = req.header("Authorization")?.split(" ")[1];

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify the token and extract user information
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded user info to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle invalid token error
    res.status(401).json({ message: "Invalid token" });
  }
};
