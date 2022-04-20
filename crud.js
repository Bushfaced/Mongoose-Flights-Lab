require('dotenv').config();
require('./config/database');

const Flight = require('./models/flight');
// const Performer = require('./models/performer');

let flights;

Flight.find({}, function(err, flightDocs) {
  flights = flightDocs;
});

