const mongoose = require("mongoose");

const AnalyticsSchema = new mongoose.Schema({
  labels: [String], // Example: ["Jan", "Feb", "Mar", "Apr"]
  values: [Number], // Example: [500, 700, 900, 800]
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Analytics", AnalyticsSchema);
