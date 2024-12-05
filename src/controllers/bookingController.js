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

    // Validate required fields
    if (
      !plumberId ||
      !appointmentDate ||
      !appointmentTime ||
      !fees ||
      !user ||
      !user.name ||
      !user.email
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create a new booking
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

    // Save the booking to the database
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
    console.log("Fetching all bookings..."); 
    const bookings = await Booking.find();
    console.log("Bookings retrieved:", bookings); 
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error); 
    res
      .status(500)
      .json({ error: "Failed to fetch bookings. Please try again." });
  }
};

// Get bookings by user
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
