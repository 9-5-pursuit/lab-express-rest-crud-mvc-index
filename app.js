const express = require('express');
const app = express();

const locationsController = require('./controllers/locations.controller');
const machinesController = require('./controllers/machines.controller');
const personsController = require('./controllers/persons.controller');
const plansController = require('./controllers/plans.controller');
const specialEventsController = require('./controllers/special-events.controller');

app.use('/locations', locationsController);
app.use('/machines', machinesController);
app.use('/persons', personsController);
app.use('/plans', plansController);
app.use('/special-events', specialEventsController);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.all('*', (req, res) => {
  res.status(404).json({ error: 'Sorry, no page found!' });
});

module.exports = app;
