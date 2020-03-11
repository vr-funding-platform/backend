const router = require('express').Router();
const db = require('../dbConfig');
const money = require('../models/money.js')

//get a list of bank request tickets
router.get('/allTickets', (req, res) => {
    db('bankTransfers')
        .then(tickets => {
            res.status(200).json(tickets);
        })
        .catch(err => res.send(err));
});

//delete a ticket
router.delete('/allTickets/:id', (req, res) => {
    const id = req.params.id;

    db('bankTransfers')
        .delete()
        .where({id})
        .then(tickets => {
            res.status(200).json(tickets);
        })
        .catch(err => res.status(404).json({message: "could find ticket to delete!"}));
});

//make a transaction
router.post('/allTickets', (req, res) =>{
    let ticket = req.body;
    const { sw_id, username, balanceInquiry} = req.body;
    if (!sw_id || !username, !balanceInquiry) {
    res.status(400).json({ message: 'Please provide your transactions information.' });
    } 
    money.addTransaction(ticket)
      .then(ticket => {
        res.status(201).json(ticket);
      })
      .catch(error => 
        res.status(500).send(error));
  });

//get full tip history
router.get('/tips', (req, res) => {
    db('tipHistory')
        .then(tips => {
            res.status(200).json(tips)
        })
        .catch(err => res.status(500).json({message: "error retrieving tip history."}))
});//get full tip history

//get specified service workers tip history
router.get('/tips/:id', (req, res) => {
    db('tipHistory')
        .where({sw_id: req.params.id})
        .then(tips => {
            res.status(200).json(tips)
        })
        .catch(err => res.status(500).json({message: "error retrieving tip history."}))
});

//post a tip
router.post('/tips', (req, res) =>{
    let tip = req.body;
    const { sw_id, username, balanceInquiry} = req.body;
    if (!sw_id || !username, !balanceInquiry) {
    res.status(400).json({ message: 'Please provide your transactions information.' });
    } 
    money.addTransaction(tip)
      .then(tip => {
        res.status(201).json(tip);
      })
      .catch(error => 
        res.status(500).send(error));
  });

module.exports = router;