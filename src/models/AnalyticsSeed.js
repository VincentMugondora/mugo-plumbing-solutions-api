const mongoose = require("mongoose");
const Analytics = require("./models/Analytics");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const seedAnalytics = async () => {
  const exampleData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    values: [100, 200, 300, 400],
  };

  try {
    const data = new Analytics(exampleData);
    await data.save();
    console.log("Analytics data seeded!");
    process.exit();
  } catch (error) {
    console.error("Error seeding analytics data:", error);
    process.exit(1);
  }
};

seedAnalytics();
