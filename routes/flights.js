const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flight');

// All routes starts with: /movies (because of the mounting in server.js)

// GET /movies
router.get('/', flightsCtrl.index);
// GET /movies/new (new functionality)
router.get('/new', flightsCtrl.new);
// GET /movies/:id (show functionality)
router.get('/:id', flightsCtrl.show);
// POST /movies (create functionality)
router.post('/', flightsCtrl.create);

module.exports = router;
