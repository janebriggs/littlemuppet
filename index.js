//Require dependencies
//const express = require("express")
//const bodyParser = require("body-parser")
//const hbs = require("express-handlebars")
//const mongoose = require("mongoose")
//
////Create the express app
//const app = express()

//Require the models
//const ... = require("./models/....")

//Require the Controllers/Routers


//Register and Use Handlebars

// Serving static files (like css)
//app.use(express.static('public'))


//Use Body Parser
//app.use(bodyParser.urlencoded({
//    extended: true
//}))

//App Routes


//Listen
//app.listen(3000, function () {
//    console.log("listening")
//})

//API Request

const form = document.querySelector("#form")

let petApp = document.querySelector("#app")

form.addEventListener('submit', e => {
    e.preventDefault()

    let pet = {}

    pet.location = document.querySelector('#InputLocation1').value
    pet.type = document.querySelector('#typePet option:checked').value
    pet.size = document.querySelector('#sizePet option:checked').value
    pet.age = document.querySelector('#agePet option:checked').value

    getPet(pet)
})

function getPet(petObj) {
    $.ajax({
        dataType: "json",
        url: `http://api.petfinder.com/pet.find?format=json&key=14b6d9e4ab69be01492eef7a4729a019&animal=${petObj.type}&location=${petObj.location}&size=${petObj.size}&age=${petObj.age}&callback=?`,
        success: (function (resp) {
            console.log(resp)
        })
    });
}

function renderView() {
    //            app.innerHTML = template(TBD)
}
