const express = require("express");

const locationsController = require("./controllers/locations.controller");
const equipment = require("./controllers/machines.controller");
const people = require("./controllers/persons.controller");
const plans = require("./controllers/plans.controller");
const specialEvents = require("./controllers/special-events.controller");

// CONFIGURATION
const app = express();
app.use(express.json());

// ROUTES

app.use("/locations", locationsController);
app.use("/machines", equipment);
app.use("/persons", people);
app.use("/plans", plans);
app.use("/special-events", specialEvents);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("*", (req, res) => {
  res.status(404).json({ message: "Status 404. Sorry, no page found!" });
});

module.exports = app;
