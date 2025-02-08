const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {type: String, required: [true, "Please enter the user name"]},
    email: {type: String, required: [true, "Please enter the user email address"], unique: [true, "Email address already taken"]},
    password: {type: String, required: [true, "Please enter the user password"]},


})

module.exports = mongoose.model("User", userSchema)