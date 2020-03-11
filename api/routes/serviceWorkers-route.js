const express = require('express');

const router = express.Router();

const sw = require('../models/serviceWorkers');

router.get('/',  (req, res) => {
  sw.find()
  .then(workers => {
    if (workers) {
      res.status(200).json(workers);
    } else {
      res.status(404).json({ error: 'Could not find worker.' });
    }
  })
  .catch(error =>
    res.status(500).send(error));
});

router.post('/', (req, res) =>{
  let person = req.body;
  const { username, password} = req.body;
  if (person === null) {
  res.status(400).json({ message: 'Please provide your worker information.' });
  } 
  sw.add(person)
    .then(person => {
      res.status(201).json(person);
    })
    .catch(error => 
      res.status(500).send(error));
})

router.get('/:id', (req, res) => {
  sw.findById(req.params.id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({error: 'Could not find worker.' });
      }
    })
    .catch(error =>
      res.status(500).send(error));
});

router.put('/:id', (req, res) => {
  let worker = req.body;
  let id = req.params.id;
  sw.update(worker, id)
    .then(updated => {
      if (updated) {
        res.status(200).json({ message: 'Updated worker.' });
      } else {
        res.status(404).json({ message: 'Could not update worker.' });
      }
    })
    .catch(error => 
      res.status(500).send(error))
});

router.delete('/:id', (req, res) => {
  sw.remove(req.params.id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json({ message: 'worker successfully deleted.' });
      } else {
        res.status(404).json({ message: 'Could not delete worker.' });
      }
    })
    .catch(error => 
      res.status(500).send(error))
});

module.exports = router;