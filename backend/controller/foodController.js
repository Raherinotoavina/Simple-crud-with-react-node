const Food = require('../model/foodModel');
const multer = require('multer');
const sharp = require('sharp');

// UPLOADING A PHOTO
const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new AppError("This not a image please upload only image",400), false);
    }
}
const upload = multer({
    storage : multerStorage,
    fileFilter : multerFilter
})
exports.canUploadPhoto = upload.single('photo');

// 1) CREATING FOOD
exports.uploadPhoto = async (req, res, next) => {
    try {
        // If a user have a photo
        if (!req.file) {
            throw new Error("Drop a photo");
        }

        req.file.filename = `food-${Date.now()}`;
        sharp(req.file.buffer)
            .resize(500,500)
            .toFormat('jpeg')
            .jpeg({quality : 100})
            .toFile(`./public/food/${req.file.filename}.jpeg`);

        next();
    } catch (err) {
        res.status(404).json({
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
            photo : `${req.file.filename}.jpeg`
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

// 2) GETTING FOOD
exports.getFood =async (req, res) => {
    try {
        const foods = await Food.find();

        res.status(200).json({
            status : "success",
            data : {
                foods 
            }
        })
    } catch(err) {
        res.status(402).json({
            status : "failed",
            message : err.message
        })
    }
}

// 3) DELETING FOOD
exports.deleteFood = async (req, res) => {
    try {
        await Food.findByIdAndDelete(req.params.id);
        res.status(202).json({
            status : "success",
            message : "Food Deleted"
        })
    } catch(err) {
        res.status(402).json({
            status : "fail",
            message : err.message
        })
    }
}

// 4) GET ONE FOOD
exports.getOneFood = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id)

        res.status(200).json({
            status : "success",
            data : {
                food
            }
        })
    } catch (err) {
        res.status(402).json({
            status : "fail",
            message : err.message
        })
    }
}