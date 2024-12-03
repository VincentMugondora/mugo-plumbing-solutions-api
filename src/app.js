require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const plumberRoutes = require("./routes/plumberRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// Database connection
connectDB();

// CORS setup
const corsOptions = {
  origin: "http://localhost:5173", // Adjust this for production
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
};

app.use(cors(corsOptions)); // Apply CORS middleware

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", bookingRoutes);
app.use("/api/plumbers", bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
