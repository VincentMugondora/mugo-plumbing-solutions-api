const Booking = require("../models/Booking");

// Create a booking
const createBooking = async (req, res) => {
  try {
    const {
      plumberId,
      plumberName,
      plumberImage,
      appointmentDate,
      appointmentTime,
      fees,
      status,
      user,
    } = req.body;

    if (!plumberId || !appointmentDate || !appointmentTime || !fees || !user) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const booking = new Booking({
      plumberId,
      plumberName,
      plumberImage,
      appointmentDate,
      appointmentTime,
      fees,
      status,
      user,
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all bookings
const getBookings = async (req, res) => {
  try {
    // Retrieve all bookings from the database
    const bookings = await Booking.find();

    // Respond with the retrieved bookings
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch bookings. Please try again." });
  }
};


// get booking by user
const getBookingsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const bookings = await Booking.find({ "user.id": userId });

    if (!bookings.length) {
      return res
        .status(404)
        .json({ message: "No bookings found for this user." });
    }

    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching user bookings:", error);
    res.status(500).json({ error: "Failed to fetch bookings for user." });
  }
};

module.exports = { createBooking, getBookings, getBookingsByUser };
