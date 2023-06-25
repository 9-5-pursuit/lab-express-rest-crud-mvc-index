// dependencies
const express = require("express");
const app = express();

// controllers
const indexController = require("./controllers/indexController");
const locationsController = require("./controllers/locations.controller");
const machinesController = require("./controllers/machines.controller");
const peopleController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const specialEventsController = require("./controllers/special-events.controller");

// middleware
app.use(express.json());

// routes
app.use("/", indexController);
app.use("/locations", locationsController);
app.use("/machines", machinesController);
app.use("/persons", peopleController);
app.use("/plans", plansController);
app.use("/special-events", specialEventsController);

app.get("*", (req, res) => {
  res.status(404).send({ Error: "Sorry, no page found!" });
});

module.exports = app;
