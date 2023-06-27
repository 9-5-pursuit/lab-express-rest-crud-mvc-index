const express = require("express");
const router = express.Router();

let specialEventsModel = require("../models/special-event.model")


router.get("/", (req,res)=>{
    res.send(specialEventsModel);
})

module.exports = router