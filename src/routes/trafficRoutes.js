const express = require("express");
const { getTrafficData } = require("../controllers/trafficController");

const router = express.Router();

// Define the route for fetching traffic data
router.get("/traffic", getTrafficData);

module.exports = router;
