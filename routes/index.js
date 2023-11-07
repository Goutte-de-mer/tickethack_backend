var express = require('express');
var router = express.Router();
const Trip = require("../models/trips")



router.get('/trips', (req,res )=> {
let departure = req.body.departure;
let arrival = req.body.arrival;
let date = req.body.date ;


Trip.find({departure : departure, arrival : arrival  }).then(data =>{
  res.json({data})
});
});


module.exports = router;
