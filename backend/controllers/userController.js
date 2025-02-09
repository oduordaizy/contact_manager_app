const asyncHandler = require("express-async-handler")
const bycrypt = require("bcrypt")

const User = require("../models/userModel")
//@desc Register Users
//@route POST /api/users/register
//access public

const registerUser = asyncHandler( async (req, res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password){
        res.status(400)
        throw new Error("All fields are mandatory");
        
    }

    const userAvailable = await User.findOne({email})

    if(userAvailable){
        res.status(400)
        throw new Error("User already exists");
    }

    const hashedPassword = await bycrypt.hash(password, 10)
    console.log(`Hashed Password: ${hashedPassword}`)

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({_id: user.id, email: user.email })
    }else{
        res.status(400)
        throw new Error("User data is not valid");
        
    }
    console.log(`User Created ${user}`)
    res.json({message: "Register the User"})
    }
)

//@desc Login Users
//@route POST /api/users/login
//access public

const loginUser = asyncHandler( async (req, res) =>{
    res.json({message: "User logged in"})
}
)

//@desc Current user info
//@route POST /api/users/current
//access private

const currentUser = asyncHandler( async (req, res) =>{
    res.json({message: "Current User Information"})
}
)

module.exports = {registerUser, loginUser, currentUser}