const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  plumberId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Plumber",
  },
  plumberName: { type: String, required: true },
  plumberImage: { type: String, required: true },
  appointmentDate: { type: String, required: true },
  appointmentTime: { type: String, required: true },
  fees: { type: Number, required: true },
  status: { type: String, default: "pending" },
  user: {
    id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    name: { type: String, required: true },
    role: { type: String, required: true },
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);
