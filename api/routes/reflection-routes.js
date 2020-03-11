const express = require('express');

const router = express.Router();

const Ref = require('../models/reflections');

router.get('/', (req,res)=>{
    Ref.find()
    .then(teams =>{
        if (teams) {
            res.status(200).json(teams);
          } else {
            res.status(404).json({ error: 'no reflection found.' });
          }
    })})
  
router.get('/:id', (req, res) => {
    Ref.findById(req.params.id)
      .then(team => {
        res.status(200).json(team);
      })
      .catch(error => 
        res.status(500).json({ error: 'this is not the reflection you are looking for.'}));
  });
  
router.post('/',  (req, res) => {
    let team = req.body;
    const { note} = req.body;
    if (!note ) {
    res.status(400).json({ message: 'Please provide your reflection information.' });
    } 
    Ref.add(team)
      .then(team => {
        res.status(201).json(team);
      })
      .catch(error => 
        res.status(500).send(error));
});

module.exports = router;