const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
// ROUTE
const foodRoute = require("./routes/foodRoute");

app.use(express.static(path.join(__dirname, 'public')));

// USING BODY-PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ROUTING
app.use("/api/food", foodRoute)

module.exports = app