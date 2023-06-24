const express = require('express')
const app = express()

app.use(express.json())

const loc = require('./controllers/locations.controller')
const mach = require('./controllers/machines.controller')
const persons = require('./controllers/persons.controller')
const plans = require('./controllers/plans.controller')
const se = require('./controllers/special-events.controller')

app.use('/locations', loc)
app.use('/machines', mach)
app.use('/persons', persons)
app.use('/plans', plans)
app.use('/special-events', se)
app.get('/', (req, res) => {
    res.send('Hello, world!')
})
app.get('*', (req, res) => {
    res.status(404).json({ message: 'Sorry, no page found!' })
})

module.exports = app