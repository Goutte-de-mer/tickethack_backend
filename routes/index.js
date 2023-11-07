var express = require("express");
var router = express.Router();
const Trip = require("../models/trips");

router.get("/trips/:departure/:arrival/:date", (req, res) => {
  let departure = req.params.departure;
  let arrival = req.params.arrival;
  let date = req.params.date;

  console.log(req.body);

  Trip.find({ departure: departure, arrival: arrival, date: date }).then(
    (data) => {
      res.json(data);
    }
  );
});

module.exports = router;
