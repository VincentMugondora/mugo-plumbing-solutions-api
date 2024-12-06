// Mock traffic data
const trafficData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  values: [120, 150, 170, 200, 300, 250, 400], // Example traffic counts per day
};

// Controller function to handle traffic data request
const getTrafficData = (req, res) => {
  res.json(trafficData);
};

module.exports = { getTrafficData };
