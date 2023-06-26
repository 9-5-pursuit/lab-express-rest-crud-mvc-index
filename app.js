const express = require("express");
const app = express();

const locationsController = require("./controllers/locations.controller");
const machinesController = require("./controllers/machines.controller");
const personsController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const specialEventsController = require("./controllers/special-events.controller");

app.use(express.json());

// Generic route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Routes for each resource
app.use("/locations", locationsController);
app.use("/persons", personsController);
app.use("/plans", plansController);
app.use("/machines", machinesController);
app.use("/special-events", specialEventsController);

// Catch-all route
app.use((req, res) => {
  res.status(404).send("Sorry, no page found!");
});

module.exports = app;
