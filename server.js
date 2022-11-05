//------------------------------------
// Dependencies
//------------------------------------
require("dotenv").config() // read the .env file process.env (process.env.PORT)
const express = require("express") // backend framework
const morgan = require("morgan") // logger
const SodaRouter = require("./controllers/soda") // import the router
const methodOverride = require("method-override")

//------------------------------------
// Global Variables
//------------------------------------
const PORT = process.env.PORT || 3000


//------------------------------------
// Create Application Object
//------------------------------------
const app = express() // create our application object

//------------------------------------
// Middleware
//-----------------------------------
app.use(morgan("tiny"))
app.use(methodOverride("_method"))
app.use("/static", express.static("public"))
app.use(express.urlencoded({extended: true})) // parse html form data -> req.body
app.use("/soda", SodaRouter)

//------------------------------------
// Routes
//-----------------------------------
app.get("/", (req, res) => {
    res.send("Server is Working")
})

//------------------------------------
// Create  Server Listener
//------------------------------------
app.listen(PORT, () => {
    console.log(`Server Listening on port: ${PORT}`)
})