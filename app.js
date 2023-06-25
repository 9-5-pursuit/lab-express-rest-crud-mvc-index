// dependencies
const express = require("express");
const app = express();

// controllers
const indexController = require("./controllers/indexController");
const locationsController = require("./controllers/locations.controller");
const machinesController = require("./controllers/machines.controller");

// middleware
app.use(express.json());

// routes
app.use("/", indexController);
app.use("/locations", locationsController);
app.use("/machines", machinesController);

module.exports = app;
