//configurations
const express = require('express');
const morgan = require('morgan');
const app = express();

//routes
const locations = require('./controllers/locations.controller')
const machines = require('./controllers/machines.controller')
const persons = require('./controllers/persons.controller')
const plans = require('./controllers/plans.controller');
const specialEvents = require('./controllers/special-events.controller');

app.use(morgan("dev"));
//app.use(express.json()); for incoming information as json object

app.use("/special-events", specialEvents);
app.use("/plans", plans);
app.use("/persons", persons);
app.use("/machines", machines);
app.use("/locations", locations);
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

//error handling
app.use("*", (req, res) => {
    res.status(404).send("Sorry not my page, try again!")
});

//exporting
module.exports = app; 

