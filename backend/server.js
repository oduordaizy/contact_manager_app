//creating the server
const express = require("express")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 5000

//initializing the app
const app = express()

app.use('/api/contacts', require("./routes/contactRoutes"))


//listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

