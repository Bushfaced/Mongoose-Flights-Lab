const Movie = require('../models/movie');

module.exports = {
  create
};

function create(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    movie.reviews.push(req.body);
    // Save the updated movie doc
    movie.save(function(err) {
      // Step 5 says to redirect
      res.redirect(`/movies/${req.params.id}`);
    });
  });
}