const mongoose = require("./connection")

// DEFINE THE SCHEMA

const SodaSchema = new mongoose.Schema({
    name: String,
    color: String,
    readyToSell: Boolean
}, {timestamps: true})

// CREATE THE MODEL OBJECT
const Soda = mongoose.model("Soda", SodaSchema)

module.exports = Soda