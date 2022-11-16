// get dotenv vars
require("dotenv").config()
// import mongoose
const mongoose = require("mongoose")

console.log(process.env.MONGO_URI)

// Connect to database
mongoose.connect(process.env.MONGO_URI)

//connection messages
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected Mongo"))
.on("error", (error) => console.log(error))

module.exports = mongoose