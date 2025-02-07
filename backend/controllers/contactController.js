const asyncHandler  = require("express-async-handler")

//@desc Get all contacts
//@route GET /api/contacts
//access public   it will made private after adding authentication.

const getContacts = asyncHandler( async (req, res)=>{
    res.status(200).json({message: "Get all Contacts"})
})

//@desc Create new contact
//@route POST /api/contacts
//access public
const createContact = asyncHandler(async (req, res)=>{
    console.log(`The Request body is ${req.body}`)
    const {name, email, phone_number} = req.body;
    if (!name || !email || !phone_number){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({message: "Create new Contact"})
})

//@desc Get a individual's contact
//@route GET /api/contacts:id
//access public
const getContact = asyncHandler(async (req, res)=>{
    res.status(200).json({message: `Get Contact ${req.params.id}`})
})

//@desc Update contact
//@route PUT /api/contacts:id
//access public
const updateContact = asyncHandler(async (req, res)=>{
    res.status(200).json({message: `Update Contact ${req.params.id}`})
})

//@desc Delete contact
//@route DELETE /api/contacts:id
//access public
const deleteContact = asyncHandler(async (req, res)=>{
    res.status(200).json({message: `Delete Contact ${req.params.id}`})
})




module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};
//Exposing the methods

