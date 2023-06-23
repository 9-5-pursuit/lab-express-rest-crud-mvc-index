const express = require('express')
const logger = require('morgan')

const app = express()
const locations = require('./controllers/locations.controller')
const machines = require('./controllers/machines.controller')
const persons = require('./controllers/persons.controller')
const plans = require('./controllers/plans.controller')
const specialEvents = require('./controllers/special-events.controller')

app.use(logger('dev'))
app.use(express.json())

app.use('/locations', locations)
app.use('/machines', machines)
app.use('/persons', persons)
app.use('/plans', plans)
app.use('/specialEvents', specialEvents)

app.get('*', (req,res) => {
    res.status(404).send("Hello, world!")
})
module.exports = app;