const mongoose = require("mongoose");

const plumberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: {
    type: String,
    required: true,
    default:
      "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png",
  },
  speciality: { type: String, required: true },
  experience: { type: String, required: true },
  about: { type: String, required: true },
  fees: { type: Number, required: true },
  address: {
    line1: { type: String, required: true },
    line2: { type: String, required: true },
  },
  city: { type: String, required: true },
});

module.exports = mongoose.model("Plumber", plumberSchema);
