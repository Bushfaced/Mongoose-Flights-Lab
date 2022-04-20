const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies');

// All routes starts with: /movies (because of the mounting in server.js)

// GET /movies
router.get('/', moviesCtrl.index);
// GET /movies/new (new functionality)
router.get('/new', moviesCtrl.new);
// GET /movies/:id (show functionality)
router.get('/:id', moviesCtrl.show);
// POST /movies (create functionality)
router.post('/', moviesCtrl.create);

module.exports = router;
