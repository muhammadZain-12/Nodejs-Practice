const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username : String,
    email : String,
    password : String,
    mobile_Number : String, 

})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel


