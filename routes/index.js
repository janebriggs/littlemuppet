const express = require("express")

const indexController = express.Router()

indexController.get("/", function (req, res) {
    res.render("index")
})

module.exports = indexController
