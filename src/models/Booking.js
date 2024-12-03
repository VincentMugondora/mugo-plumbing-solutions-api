const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  plumberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Plumber",
    required: true,
  },
  plumberName: { type: String, required: true },
  appointmentDate: { type: String, required: true },
  appointmentTime: { type: String, required: true },
  fees: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  userName: { type: String, required: true },
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
