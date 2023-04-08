const express = require("express");
const router = express.Router();
const foodController = require("../controller/foodController");

router.post("/createFood", foodController.canUploadPhoto, foodController.uploadPhoto, foodController.createFood);
router.get("/getAll", foodController.getFood);

module.exports = router