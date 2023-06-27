const express = require("express");
const router = express.Router();

let plansModel = require("../models/plan.model")


router.get("/", (req,res)=>{
    res.send(plansModel);
})

module.exports = router