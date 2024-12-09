const express = require("express");
const {
  createBooking,
  getBookings,
  getBookingsByUser,
  deleteBooking, // Import the deleteBooking function
} = require("../controllers/bookingController");

const router = express.Router();

// Routes
router.post("/bookings", createBooking); // Create a booking
router.get("/bookings", getBookings); // Get all bookings
router.get("/bookings/user/:userId", getBookingsByUser); // Get bookings by user
router.delete("/bookings/:bookingId", deleteBooking); // Delete a booking by ID

module.exports = router;
