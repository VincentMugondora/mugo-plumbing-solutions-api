const express = require("express");
const Plumber = require("../models/plumberModel");
const router = express.Router();

// Route to get all plumbers
router.get("/", async (req, res) => {
  try {
    const plumbers = await Plumber.find();
    res.json(plumbers);
  } catch (error) {
    console.error("Error fetching plumbers:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Route to get plumbers by city
router.get("/:city", async (req, res) => {
  try {
    const city = req.params.city;
    const plumbers = await Plumber.find({ city });
    res.json(plumbers);
  } catch (error) {
    console.error("Error fetching plumbers:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Route to get plumber by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const plumber = await Plumber.findById(id);
    if (!plumber) {
      return res.status(404).json({ message: "Plumber not found" });
    }
    res.json(plumber);
  } catch (error) {
    console.error("Error fetching plumber:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
