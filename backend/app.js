const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
// ROUTE
const foodRoute = require("./routes/foodRoute");

// USING BODY-PARSER
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// ROUTING
app.use("/api/food",foodRoute)

module.exports = app