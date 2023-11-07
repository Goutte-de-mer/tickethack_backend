var express = require('express');
var router = express.Router();
const Booking = require('../models/bookings');

router.get('/' ,(req , res )=>{
    Booking.find().populate('trip')
    .then(data => { 
        res.json(data)
    })
});

module.exports = router;