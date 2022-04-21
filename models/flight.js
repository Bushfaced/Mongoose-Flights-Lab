const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// const reviewSchema = new Schema({
//   rating: {
//     type: Number,
//     min: 1,
//     max: 5,
//     default: 5
//   }
// }, {
//   // createdAt & updatedAt properties
//   timestamps: true
// });

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['Aus', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  content: {
    type: Number,
    match: /(10|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])/
  },
  // title: {
  //   type: String,
  //   required: true
  // },
  // releaseYear: {
  //   type: Number,
  //   default: function() {
  //     return new Date().getFullYear();
  //   }
  // },
  // cast: [{type: Schema.Types.ObjectId, ref: 'Performer'}],
  // nowShowing: {
  //   type: Boolean,
  //   default: false
  // },
  // reviews: [reviewSchema]
}, {
  // Mongoose will automatically add and maintain
  // a createdAt and updatedAt property on the docs
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);