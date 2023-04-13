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
    .route("/getOneFood/:id")
    .get(foodController.getOneFood)

router
    .route("/deleteFood/:id")
    .delete(foodController.deleteFood)

router
    .route("/updateFood/:id")
    .patch(foodController.canUploadPhoto,foodController.updateFood)

module.exports = router