const express = require("express");
const router = express.Router();
const foodController = require("../controller/foodController");

router
    .route("/createFood")
    .post(foodController.canUploadPhoto, foodController.uploadPhoto, foodController.createFood)

router
    .route("/getAll")
    .get(foodController.getFood)

router
    .route("/deleteFood/:id")
    .delete(foodController.deleteFood)

module.exports = router