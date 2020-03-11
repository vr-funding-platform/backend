const express = require('express');

const router = express.Router();

const Teams = require('../models/teams');

router.get('/', (req,res)=>{
    Teams.find()
    .then(teams =>{
        if (teams) {
            res.status(200).json(teams);
          } else {
            res.status(404).json({ error: 'no teams found.' });
          }
    })})
  
    router.get('/:id', (req, res) => {
    Teams.findById(req.params.id)
      .then(team => {
        res.status(200).json(team);
      })
      .catch(error => 
        res.status(500).json({ error: 'this is not the team you are looking for.'}));
  });
  
router.post('/',  (req, res) => {
    let team = req.body;
    const { name, description, members } = req.body;
    if (!name ||!description || !members) {
    res.status(400).json({ message: 'Please provide your project information.' });
    } 
    Teams.add(team)
      .then(team => {
        res.status(201).json(team);
      })
      .catch(error => 
        res.status(500).send(error));
  });

module.exports = router;