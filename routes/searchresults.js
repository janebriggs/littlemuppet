const express = require("express")
const request = require('request')


const searchController = express.Router()


searchController.post("/", function (req, res) {
    let pet = {}
    let petLocation = req.body.InputLocation1
    let petType = req.body.type
    let petSize = req.body.size
    let petAge = req.body.age
    let petSex = req.body.sex
    let apiUrl = `http://api.petfinder.com/pet.find?format=json&key=14b6d9e4ab69be01492eef7a4729a019&animal=${petType}&location=${petLocation}&size=${petSize}&age=${petAge}&sex=${petSex}&callback=?`
    //    pet.location = req.body.InputLocation1;

    //`request` is asynchronous - so we have to pass a callback for when that processes ends (or use promises!)
    request.get(apiUrl, (err, response, body) => {
//        let data = response.body
        res.render("petwall", body)
//        console.log(data)
    })
 

    //    /*
    //    Here you'll make AJAX reqeust usin request module, in callback to request you'll build pets object and call res.render('petwall', pets):
    //    */
})
//
//
module.exports = searchController
