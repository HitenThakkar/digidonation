const mongoose = require("mongoose")
require('dotenv').config()

const{MONGO_URI} = process.env

module.exports.getDbConnection = function(){
    mongoose.connect(MONGO_URI).then(()=>console.log("DB Connected :)")).catch(()=>console.log("Db Connection Failed :("))
}