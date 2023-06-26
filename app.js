// DEPENDENCIES
const express = require("express");

const location = require("./controllers/locations.controller");
const person = require("./controllers/persons.controller");
const plan = require("./controllers/plans.controller");
const machine = require("./controllers/machines.controller");
const specailEvents = require("./controllers/special-events.controller");

// CONFIGURATION
const app = express();
app.use(express.json());

// ROUTES
app.use("/", location, person, plan, machine, specailEvents);



app.get("/", (req, res) =>{
    res.send("Hello, world!!!!!!!")
})

//404 Error page has to be the last one in your routes list 
//bc it will run if above other ones
app.get("*", (req, res) =>{
    res.status(404).json({message: "page not found"})
})

// EXPORT
module.exports = app;