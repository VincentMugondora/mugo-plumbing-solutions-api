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

app.use(express.urlencoded({extended:false}))

// CORS setup
const corsOptions = {
  origin: "https://mugo-plumbing-solutions-final.app.genez.io/", 
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res)=>{
  res.send("Welcome TO Mugo Plumbing Solutions By Vincent Mugondora");
})

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", bookingRoutes);
app.use("/api/plumbers", plumberRoutes);
app.use("/api", trafficRoutes);
app.use("/api/analytics", analyticsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
