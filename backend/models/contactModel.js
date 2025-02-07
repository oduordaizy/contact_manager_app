const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter your name"],
    },
    email: {
        type: String,
        required: [true, "Please Enter your email"],
    },
    phone_number: {
        type: String,
        required: [true, "Please Enter your phone number"],
    },
    },

    {
        timestamps: true,
    }

)

module.exports = mongoose.model("Contact", contactSchema)
