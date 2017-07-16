const express = require("express")

const searchController = express.Router()


searchController.get("/", function (req, res) {
    let pet = {}
    //    pet.location = req.body.InputLocation1;
    console.log(req.body)
    res.render("petwall", pet)
    //i will res.render a new page in views and pass it the pet object (whatever i name my petdirectory file in views folder)
})


//
//const form = document.querySelector("#form")
//
//let petApp = document.querySelector("#app")
//
//form.addEventListener('submit', e => {
//    e.preventDefault()
//
//    let pet = {}
//
//    pet.location = document.querySelector('#InputLocation1').value
//    pet.type = document.querySelector('#typePet option:checked').value
//    pet.size = document.querySelector('#sizePet option:checked').value
//    pet.age = document.querySelector('#agePet option:checked').value
//    pet.sex = document.querySelector('#genderPet option:checked').value
//
//    getPet(pet)
//})

module.exports = searchController
