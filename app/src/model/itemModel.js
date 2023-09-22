const mongoose = require("mongoose")

const ItemSchema = new mongoose.Schema({
    itemName:{
        type:String,
        required:true
    },
    activeInd:{
        type:Number,
        required:true
    },
    categoryId:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("BItem",ItemSchema)