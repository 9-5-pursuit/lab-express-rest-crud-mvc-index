const express = require('express')
const logger = require('morgan')

const app = express()
const locations = require('./controllers/locations.controller')
const  machines = require('./controllers/machines.controller')
const persons = require('./controllers/persons.controller')
const plan = require('./controllers/')
const  = require('./controllers/')

app.use(express.json())
app.use(logger('dev'))
app.use(express.Router())

app.use

module.exports = app;