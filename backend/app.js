const express = require("express");
const app = express();
// ROUTE
const foodRoute = require("./routes/foodRoute");

// USING MIDDLEWARE
app.use(express.json());

// ROUTING
app.use("/api/food", foodRoute)

module.exports = app