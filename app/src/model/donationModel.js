const mongoose = require("mongoose")

const DonationSchema = new mongoose.Schema({
    categoryId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    itemId:{
        type:String,
        required:true
    },
    donationDate:
    {
        type:Date,
        required:true
    },
    assignInd:
    {
        type:Number,
        required:true
    },
    statusInd:
    {
        type:Number,
        required:true
    },
    title:
    {
        type:String,
        required:true
    },
    keywords:
    {
        type:String,
        required:true
    },
    description:
    {
        type:String,
        required:true
    },
})

module.exports = mongoose.model("BDonation",DonationSchema) 