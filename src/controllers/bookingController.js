// Example controller function
const createBooking = async (req, res) => {
  const {
    plumberId,
    plumberName,
    appointmentDate,
    appointmentTime,
    fees,
    user,
    userName,
    status,
    createdAt,
  } = req.body;

  try {
    const newBooking = new Booking({
      plumberId,
      plumberName,
      appointmentDate,
      appointmentTime,
      fees,
      user,
      userName,
      status,
      createdAt,
    });

    await newBooking.save();
    res
      .status(200)
      .json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createBooking };
