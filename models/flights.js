const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightsSchema = new Schema({
  content: {
    type: String,
    match: /.{5,}/
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  }
}, {
  // createdAt & updatedAt properties
  timestamps: true
});


module.exports = mongoose.model('Flight', flightsSchema);