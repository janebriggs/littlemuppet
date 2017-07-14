//Require dependencies
//const express = require("express")
//const bodyParser = require("body-parser")
//const hbs = require("express-handlebars")
//const mongoose = require("mongoose")

//Create the exprses app
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
    //    let petType = e.target.querySelector('radio').value

    getPet(pet)
})

function getPet(petObj) {
    let request = new XMLHttpRequest()
    request.addEventListener('load', e => {
        pet = JSON.parse(request.response)
        console.log(pet)
        //        renderView()
    })
    request.open('GET', `https://api.petfinder.com/pet.find?format=json&key=14b6d9e4ab69be01492eef7a4729a019&animal=dog&location=${petObj.location}&callback=?`, true)
    request.send()
}

function renderView() {
    //            app.innerHTML = template(TBD)
}
