const express = require('express');
const router = express.Router();
// You Do - require the yet to be created
// reviews controller
const reviewsCtrl = require('../controllers/reviews');


// You Do - Define the Route
// POST /movies/:id/reviews
router.post('/movies/:id/reviews', reviewsCtrl.create);

module.exports = router;
