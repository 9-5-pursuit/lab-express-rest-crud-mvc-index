const express = require('express')
const router = express.Router()

let spec =  require('../models/special-event.model')
router.get('/', (req, res) => {return res.json(spec)})

module.exports = router