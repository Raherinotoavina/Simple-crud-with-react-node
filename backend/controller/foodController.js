const Food = require('../model/foodModel');
const multer = require('multer');
const sharp = require('sharp');

// UPLOADING A PHOTO
const multerStorage = multer.memoryStorage();
const upload = multer({storage : multerStorage});
exports.canUploadPhoto = upload.single('photo');

exports.uploadPhoto = async (req, res, next) => {
    try {
        // If a user have a photo
        if (!req.file) {
            res.status(402).json({
                status : "fail",
                message : "You must drop a photo"
            })
        }

        req.file.filename = `food-${Date.now()}.jpeg`;
        sharp(req.file.buffer)
            .resize(500,500)
            .toFormat('jpeg')
            .jpeg({quality : 100})
            .toFile(`../frontend/src/assets/food/${req.file.filename}.jpeg`);

        next();
    } catch (err) {
        res.status(402).json({
            status : "failed",
            message : err.message
        })
    }
}

exports.createFood = async (req, res) => {
    try {
        const food = await Food.create({
            name : req.body.name,
            price : req.body.price,
            quantity : req.body.quantity,
            photo : req.file.filename
        })

        res.status(200).json({
            status : "success",
            data : {
                food
            }
        })
    } catch (err) {
        res.status(402).json({
            status : "failed",
            message : err.message
        })
    }
}