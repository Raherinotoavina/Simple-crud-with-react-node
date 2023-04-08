const mongoose = require("mongoose");
const slugify = require("slugify");

const foodSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Food nust have a name"]
    },
    photo : {
        type : String,
        required : [true, "Food must have a photo"]
    },
    price : {
        type : Number,
        required : [true, "Food must have a price"]
    },
    quantity : {
        type : Number,
        required : [true, "Food must have a quantity"]
    },
    slug : {
        type : String,
    }
})
// Ajout du slug
foodSchema.pre("save", function () {
    this.slug = slugify(this.name, {lower:true}); 
})

const Food = mongoose.model("Foods", foodSchema);
module.exports = Food;