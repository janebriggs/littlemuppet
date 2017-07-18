//Require dependencies
const express = require("express")
const bodyParser = require("body-parser")
const hbs = require("express-handlebars")
const mongoose = require("mongoose")

mongoose.connect("mongodb://janewheatley:Animal!1@ds163232.mlab.com:63232/littlemuppet")

//Create the express app
const app = express()

//Use Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}))

//Require the models
//const ... = require("./models/....")


//Require the Controllers/Routers
const searchController = require("./routes/searchresults.js")
const indexController = require("./routes/index.js")
const singleController = require("./routes/single.js")

//Register and Use Handlebars
app.engine("handlebars", hbs({
    defaultLayout: "main"
}))
app.set("view engine", "handlebars")

// Serving static files (like css)
app.use(express.static('public'))


//Use the route (needs to go last)
app.use("/", indexController)
app.use("/searchresults", searchController)
app.use("/single", singleController)


//Listen
app.listen(3000, function () {
    console.log("listening")
})


function renderView() {
    //            app.innerHTML = template(TBD)
}
