const express = require("express");
const {
  createBooking,
  getBookings,
  getBookingsByUser,
} = require("../controllers/bookingController");

const router = express.Router();

router.post("/bookings", createBooking); 
router.get("/bookings", getBookings); 
router.get("/bookings/user/:userId", getBookingsByUser); 

module.exports = router;
