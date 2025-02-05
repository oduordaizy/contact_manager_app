const express = require('express')

const Router = express.Router()

Router.route('/').get((req, res)=>{
    res.status(200).json({message: "Get all Contacts"})
})

Router.route('/').post((req, res)=>{
    res.status(200).json({message: "Create Contacts"})
})

Router.route('/:id').get((req, res)=>{
    res.status(200).json({message: `Get Contact ${req.params.id}`})
})

Router.route('/:id').put((req, res)=>{
    res.status(200).json({message: `Update Contact ${req.params.id}`})
})

Router.route('/:id').delete((req, res)=>{
    res.status(200).json({message: `Delete Contact ${req.params.id}`})
})

module.exports = Router;