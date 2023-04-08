const Food = require('../model/foodModel');

exports.createFood = async (req, res) => {
    try {
        console.log(req.body);
        // Create a food
        // const food = await Food.create(req)


        res.status(200).json({
            status : "success",
            message : "Creation"
        })
    } catch (err) {
        res.status(402).json({
            status : "failed",
            message : err.message
        })
    }
}