//creating the server
const express = require("express")
const { errorHandler } = require("./middleware/errorHandler")
const { connectDb } = require("./config/dbConnection")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 5000

connectDb();

//initializing the app
const app = express()

//Middleware that initializes a parser
// The middleware will help parse data entered by the client in the body.
app.use(express.json())
app.use('/api/contacts', require("./routes/contactRoutes"))
app.use(errorHandler)


//listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

