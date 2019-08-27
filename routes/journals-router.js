const express = require('express');

const router = express.Router();

const model = require('../models/journals.js');

router.post('/',  (req, res) => {
  let journal = req.body;
  const { post} = req.body;
  if (!post) {
  res.status(400).json({ message: 'Please provide your journal information.' });
  } 
  model.add(journal)
    .then(journal => {
      res.status(201).json(journal);
    })
    .catch(error => 
      res.status(500).send(error));
});

router.get('/', (req, res) => {
  model.find()
    .then(journal => {
      if (journal) {
        res.status(200).json(journal);
      } else {
        res.status(404).json({ error: 'journals not found.' });
      }
    })
    .catch(error =>
      res.status(500).send(error));
});

router.get('/:id', (req, res) => {
  model.findById(req.params.id)
    .then(journal => {
      res.status(200).json(journal);
    })
    .catch(error => 
      res.status(500).send(error));
});

router.put('/:id',  (req, res) => {
  let journal = req.body;
  let id = req.params.id;
  model.update(journal, id)
    .then(updated => {
      if (updated) {
        res.status(200).json({ message: 'Updated journal.' });
      } else {
        res.status(404).json({ message: 'Could not update journal.' });
      }
    }) 
    .catch(error =>
      res.status(500).send(error));
});

router.delete('/:id',  (req, res) => {
  model.remove(req.params.id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json({ message: 'journal was deleted.' });
      } else {
        res.status(404).json({ message: 'Could not delete journal.' });
      }
    })
    .catch(error => 
      res.status(500).json(error));
});

module.exports = router;