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
router.get("/", (req, res) => {
    res.render("soda/index.ejs", {
        sodas: Soda.getAll()
    })
})

// New Route GET /soda/new -> page with a create form
router.get("/new", (req, res) => {
    res.render("soda/new.ejs")
})

// Create Route POST /soda -> creates a new soda, redirect back to index
router.post("/", (req, res) => {
    req.body.readyToSell = req.body.readyToSell ? true : false
    Soda.create(req.body)
    res.redirect("/soda")
})

// EDIT Route Get /soda/:id/edit -> create form to update soda
router.get("/:id/edit", (req, res) => {
    res.render("soda/edit.ejs", {
        soda: Soda.getOne(req.params.id),
        index: req.params.id
    })
})

// Update Route  Put /soda/:id -> receives form data, updates soda, redirects to index
router.put("/:id", (req,res) => {
    req.body.readyToSell = req.body.readyToSell ? true : false
    Soda.update(req.params.id, req.body)
    res.redirect("/soda")
})

// Destroy Route Delete /soda/:id => deletes an individual soda
router.delete("/:id", (req, res) => {
    Soda.destroy(req.params.id)
    res.redirect("/soda")
})

// SHOW ROUTE GET /soda/:id -> page on an individual soda
router.get("/:id", (req, res) => {
    res.render("soda/show.ejs", {
        soda: Soda.getOne(req.params.id),
        index: req.params.id
    })
})


//------------------------------------
// Export Router
//------------------------------------
module.exports = router