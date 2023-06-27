const express = require("express");
const morgan = require("morgan");

const locationController= require("./controllers/locations.controller")
const machineController= require("./controllers/machines.controller")
const personsController= require("./controllers/persons.controller")
const plansController= require("./controllers/plans.controller")
const specialEventsController= require("./controllers/special-events.controller")

const app = express()

app.use(morgan("dev"));

app.use("/locations", locationController)
 app.use("/machines", machineController)
 app.use("/persons", personsController)
 app.use("/plans", plansController)
 app.use("/special-events", specialEventsController)

app.get("/", (req,res)=>{
    res.send("Hello, world!")
});

app.use("*",(req, res )=>{
    res.status(404).send("Sorry, no page found!")
});

module.exports = app