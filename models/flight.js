const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airlines: {
    type: String,
    enum: ['American', 'Southwest', 'United'] 
  },
  airports: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    min: 2,
  },
  departs: {
    type: Date,
    default: Date++
  }
}, {
  // createdAt & updatedAt properties
  timestamps: true
});

const desintationSchema = new Schema({
  airports: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  arrival: {
    type: Date
  },
  destinations: {
    type: [desintationSchema]
  }
});
// User Stories:

// AAU, I want to view a list of all flights (index view) that displays each flight's airline, airport, flight no., and departure date/time.

// AAU, I want to create flights by entering the information on a page (new view) that has a form and submitting it.

// AAU, I want to be able to access each view via a navigation bar at the top of the page with links to:

// ALL FLIGHTS, and
// ADD FLIGHT
// Hints:
// Checkout the <input type="datetime-local"> to assist users in entering valid date/time values.
// In the form for adding a new Flight, use a <select name="airport"> to assign the flight's airport. Since they don't change, it's okay to hard-code the <option> elements, e.g., <option value="DEN" selected>. Same for the airline property (use a <select>).

// Implement the following User Story:
// AAU, when viewing the list of flights, I want to click on a "detail" link displayed next to each flight to view all of the properties for that flight (show view)

// Implement the following User Story:
// AAU, when viewing the details page (show view) for a flight, I want to be able to add a destination for that flight, including its arrival date/time & one of the established airport codes

// Implement the following User Story:
// AAU, when viewing the details page (show view) for a flight, I want to see a list of that flight's destinations (airport & arrival)






module.exports = mongoose.model('Flight', flightSchema);