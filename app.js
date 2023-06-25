//DEPENDENCIES
const express = require('express');

const locationsController = require('./controllers/locationsController');
const machineController = require('./controllers/machinesController');
const personController = require('./controllers/personsController');
const plansController = require('./controllers/plansController');
const specialEventsController = require('./controllers/specialEventsController');

//CONFIGURATION
const app = express();

//ROUTES

app.get('/' , (req, res) => {
    res.send('Hello, world!');
})

app.use('/locations', locationsController);
app.use('/equipment', machineController);
app.use('/people', personController);
app.use('/plans', plansController);
app.use('/special-events', specialEventsController);

app.get('*', (req, res) => {
    res.status(404).send('Sorry, no page found!');
})


//EXPORT
module.exports = app;