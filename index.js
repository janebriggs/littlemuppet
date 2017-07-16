//Require dependencies
const express = require("express")
const bodyParser = require("body-parser")
const hbs = require("express-handlebars")
const mongoose = require("mongoose")
const jquery = require("jquery")

//Create the express app
const app = express()

//Require the models
//const ... = require("./models/....")


//Require the Controllers/Routers
const searchController = require("./routes/searchresults.js")
const indexController = require("./routes/index.js")

//Register and Use Handlebars
app.engine("handlebars", hbs({
    defaultLayout: "main"
}))
app.set("view engine", "handlebars")


//Use the route
app.use("/searchresults", searchController)
app.use("/", indexController)

// Serving static files (like css)
app.use(express.static('public'))

//Use Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}))

//Listen
app.listen(3000, function () {
    console.log("listening")
})

//API Request

function getPet(petObj) {
    $.ajax({
        dataType: "json",
        url: `http://api.petfinder.com/pet.find?format=json&key=14b6d9e4ab69be01492eef7a4729a019&animal=${petObj.type}&location=${petObj.location}&size=${petObj.size}&age=${petObj.age}&sex=${petObj.sex}&callback=?`,
        success: (function (resp) {
            console.log(resp)
        })
    });
}


function renderView() {
    //            app.innerHTML = template(TBD)
}
