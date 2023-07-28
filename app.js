const express = require("express");
const app = express();
app.use(express.json());

const locationsController = require("./controllers/locations.controller");
const machineController = require("./controllers/machines.controller");
const personController = require("./controllers/persons.controller");
const planController = require("./controllers/plans.controller");
const specialEventsController = require("./controllers/special-events.controller");

app.use("/locations", locationsController);
app.use("/machines", machineController);
app.use("/persons", personController);
app.use("/plans", planController);
app.use("/special-events", specialEventsController);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("*", (req, res) => {
  res.status(404).send("Sorry, no page found!");
});

module.exports = app;
