const express = require("express");
const app = express();
// ROUTE
const foodRoute = require("./routes/foodRoute");

// USING BODY-PARSER
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// ROUTING
app.use("/api/food",foodRoute)

module.exports = app