require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const plumberRoutes = require("./routes/plumberRoutes");
const cookieParser = require("cookie-parser");
const trafficRoutes = require("./routes/trafficRoutes");
const analyticsRoutes = require("./routes/analtyticsRoutes");

const app = express();

// Database connection
connectDB();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// Custom CORS middleware
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://mugo-plumbing-solutions-final.app.genez.io"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Added allowed methods
  next();
});

// Welcome route
app.get("/", (req, res) => {
  res.send("Welcome to Mugo Plumbing Solutions by Vincent Mugondora");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", bookingRoutes);
app.use("/api/plumbers", plumberRoutes);
app.use("/api", trafficRoutes);
app.use("/api/analytics", analyticsRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
