const express = require("express");
const router = express.Router();
const { createBooking } = require("../controllers/bookingController"); // Ensure this path is correct

// Route to create a new booking
router.post("/bookings", createBooking); // Ensure createBooking is defined and imported correctly

module.exports = router;
