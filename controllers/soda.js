//------------------------------------
// Dependencies
//------------------------------------
const express = require("express")
const Soda = require("../models/soda")

//------------------------------------
// Create Router Object
//------------------------------------

const router = express.Router()

//------------------------------------
// Register Routes with the Router
//------------------------------------
// INDEX GET /soda -> a list of sodas
router.get("/", async (req, res) => {
    res.render("soda/index.ejs", {
        sodas: await Soda.find({})
    })
})

// New Route GET /soda/new -> page with a create form
router.get("/new", (req, res) => {
    res.render("soda/new.ejs")
})

// Create Route POST /soda -> creates a new soda, redirect back to index
router.post("/", async (req, res) => {
    req.body.readyToSell = req.body.readyToSell ? true : false
    await Soda.create(req.body)
    res.redirect("/soda")
})

// EDIT Route Get /soda/:id/edit -> create form to update soda
router.get("/:id/edit", async (req, res) => {
    res.render("soda/edit.ejs", {
        soda: await Soda.findById(req.params.id),
        index: req.params.id
    })
})

// Update Route  Put /soda/:id -> receives form data, updates soda, redirects to index
router.put("/:id", async (req,res) => {
    req.body.readyToSell = req.body.readyToSell ? true : false
    await Soda.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/soda")
})

// Destroy Route Delete /soda/:id => deletes an individual soda
router.delete("/:id", async (req, res) => {
    await Soda.findByIdAndRemove(req.params.id)
    res.redirect("/soda")
})

// SHOW ROUTE GET /soda/:id -> page on an individual soda
router.get("/:id", async (req, res) => {
    res.render("soda/show.ejs", {
        soda: await Soda.findById(req.params.id),
        index: req.params.id
    })
})


//------------------------------------
// Export Router
//------------------------------------
module.exports = router