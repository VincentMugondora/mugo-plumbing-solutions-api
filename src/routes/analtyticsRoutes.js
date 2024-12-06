const express = require("express");
const router = express.Router();
const Analytics = require("../models/Analytics");

// @route GET /api/analytics
// @desc  Fetch analytics data
router.get("/", async (req, res) => {
  try {
    // Fetch the most recent analytics entry
    const data = await Analytics.findOne().sort({ createdAt: -1 });

    if (!data) {
      return res.status(404).json({ message: "No analytics data found" });
    }

    res.json({
      labels: data.labels,
      values: data.values,
    });
  } catch (error) {
    console.error("Error fetching analytics data:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route POST /api/analytics
// @desc  Add new analytics data
router.post("/", async (req, res) => {
  const { labels, values } = req.body;

  if (!labels || !values) {
    return res.status(400).json({ message: "Labels and values are required" });
  }

  try {
    const newAnalytics = new Analytics({
      labels,
      values,
    });

    const savedAnalytics = await newAnalytics.save();
    res.status(201).json(savedAnalytics);
  } catch (error) {
    console.error("Error saving analytics data:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
