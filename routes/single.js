const express = require("express")


const singleController = express.Router()

singleController.get("/", function (req, res) {
    res.render("single")
})

module.exports = singleController
