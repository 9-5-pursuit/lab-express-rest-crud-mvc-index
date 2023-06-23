const express = require("express");

const specialEvents = require("./controllers/special-events.controller");
const locations = require("./controllers/locations.controller");
const machines = require("./controllers/machines.controller");
const people = require("./controllers/persons.controller");
const plans = require("./controllers/plans.controller");

const app = express();

app.use("/locations", locations);
app.use("/machines", machines);
app.use("/persons", people);
app.use("/plans", plans);
app.use("/special-events", specialEvents);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("*", (req, res) => {
  res.status(404).send("Sorry, no page found!");
});

module.exports = app;
