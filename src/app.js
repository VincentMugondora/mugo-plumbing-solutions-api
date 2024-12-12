require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const plumberRoutes = require("./routes/plumberRoutes");
const cors = require("cors");
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

// CORS setup
const allowedOrigins = [
  "https://mugo-plumbing-solutions-final.app.genez.io",
  "https://mugo-plumbing-solutions-client.vercel.app/"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('Not allowed by CORS')); // Reject the request
    }
  },
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

// Welcome route
app.get('/', (req, res) => {
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
