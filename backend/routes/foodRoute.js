const express = require("express");
const router = express.Router();
const foodController = require("../controller/foodController");

router.post("/createFood", foodController.createFood)

module.exports = router