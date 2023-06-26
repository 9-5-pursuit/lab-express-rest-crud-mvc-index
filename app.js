const express = require("express");
const app = express();

const locationsController = require("./controllers/locations.controller.js");
const machinesController = require("./controllers/machines.controller.js");
const personsController = require("./controllers/persons.controller.js");
const plansController = require("./controllers/plans.controller.js");
const specialEventsController = require("./controllers/special-events.controller.js");

app.get("/", (request, response) => {
  response.send("Hello, World!");
});

app.get("/locations", (request, response) => {
  response.send(locationsController);
});
app.get("/machines", (resquest, response) => {
  response.send(machinesController);
});
app.get("/persons", (request, response) => {
  response.send(personsController);
});
app.get("/plans", (request, response) => {
  response.send(plansController);
});
app.get("/special-events", (request, response) => {
  response.send(specialEventsController);
});

app.get("*", (request, response) => {
  response.status(404).json({ error: "Page not found" });
});
module.exports = app;
