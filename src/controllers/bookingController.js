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
      status = "pending",
      user,
    } = req.body;

    // Validate required fields
    if (
      !plumberId ||
      !appointmentDate ||
      !appointmentTime ||
      !fees ||
      !user?.id ||
      !user?.name ||
      !user?.role
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create and save booking
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
    res.status(500).json({ error: error.message || "Internal Server Error" });
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

// Delete a booking
const deleteBooking = async (req, res) => {
  const { bookingId } = req.params;

  try {
    // Find and delete the booking
    const deletedBooking = await Booking.findByIdAndDelete(bookingId);

    if (!deletedBooking) {
      return res
        .status(404)
        .json({
          message: "Booking not found. It may have already been deleted.",
        });
    }

    res.status(200).json({ message: "Booking deleted successfully." });
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.status(500).json({ error: "Failed to delete booking." });
  }
};

module.exports = {
  createBooking,
  getBookings,
  getBookingsByUser,
  deleteBooking, // Export the deleteBooking function
};
