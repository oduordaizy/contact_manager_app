const asyncHandler = require("express-async-handler")
require("dotenv").config();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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
    console.log("User found:", user);

    if(userAvailable){
        res.status(400)
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10)
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
    }
)

//@desc Login Users
//@route POST /api/users/login
//access public

const loginUser = asyncHandler( async (req, res) =>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are manadatory");
        
    }
    //checking if user is present in the database
    const user = await User.findOne({email})

    //compare password with hashed password
    if (user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "15m"}
    )
        res.status(200).json({accessToken})
    }
    else{
        res.status(401)
        throw new Error("Email or Password is not valid");        
    }
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