// DEPENDENCIES
const express = require("express");

const locationsController = require("./controllers/locations.controller.js");
const machinesController = require("./controllers/machines.controller");
const personController = require("./controllers/persons.controller.js");
const planController = require("./controllers/plans.controller");
const specialEventsController = require("./controllers/special-events.controller");

// CONFIGURATION
//Teaches app to read incoming json data
const app = express();
app.use(express.json());

// ROUTES
app.use("/locations", locationsController);
app.use("/machines", machinesController);
app.use("/persons", personController);
app.use("/plans", planController);
app.use("/special-events", specialEventsController);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("*", (req, res) => {
  res.status(404).json({ message: "Sorry, no page found!" });
});

// EXPORT
module.exports = app;
