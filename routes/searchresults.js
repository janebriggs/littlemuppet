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
    let apiUrl = `http://api.petfinder.com/pet.find?format=json&key=14b6d9e4ab69be01492eef7a4729a019&animal=${petType}&location=${petLocation}&size=${petSize}&age=${petAge}&sex=${petSex}`

    request.get(apiUrl, (err, response, body) => {
        const data = JSON.parse(body)
        const pets = data.petfinder.pets.pet
        //        console.log(pets[0].media.photos.photo[0]['$t']);
//        console.log(pets[0].contact.email)
        //        console.log(pets)
        //        console.log(pets[0].media.photos.$t);
        res.render('petwall', {
            pets
        })
        //        res.render("petwall", function (err, html) {
        //            res.send();
        //        })
    })

    //`request` is asynchronous - so we have to pass a callback for when that processes ends (or use promises!)
    //    request.get(apiUrl, (err, response, body) => {
    //        //        let data = response.body
    //
    //        res.render("petwall", {
    //            body
    //        })
    //        console.log("Response: ", response)
    //        console.log("Body: ", body)
    //    })


    //    /*
    //    Here you'll make AJAX reqeust usin request module, in callback to request you'll build pets object and call res.render('petwall', pets):
    //    */
})
//
//
module.exports = searchController
