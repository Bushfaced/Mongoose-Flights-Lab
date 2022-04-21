const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create,
};

function create(req, res){
    req.body.flight = req.params.id;
    const ticket = new Ticket(req.body);
    ticket.save(function(err){
        if (err) return res.render('tickets/new');
        res.redirect(`/flights/${req.params.id}`);
    })
}

function newTicket(req, res) {
  res.render('tickets/new', {flightId: req.params.id})
};