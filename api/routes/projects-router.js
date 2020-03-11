const express = require('express');

const router = express.Router();

const Projects = require('../models/projects.js');

router.post('/',  (req, res) => {
  let project = req.body;
  const { projectName, projectType, description, fundingGoal } = req.body;
  if (!projectName || !projectType || !description || !fundingGoal) {
  res.status(400).json({ message: 'Please provide your project information.' });
  } 
  Projects.add(project)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(error => 
      res.status(500).send(error));
});

router.get('/', (req, res) => {
  Projects.find()
    .then(projects => {
      if (projects) {
        res.status(200).json(projects);
      } else {
        res.status(404).json({ error: 'Projects not found.' });
      }
    })
    .catch(error =>
      res.status(500).send(error));
});

router.get('/:id', (req, res) => {
  Projects.findById(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => 
      res.status(500).send(error));
});

router.put('/:id',  (req, res) => {
  let project = req.body;
  let id = req.params.id;
  Projects.update(project, id)
    .then(updated => {
      if (updated) {
        res.status(200).json({ message: 'Updated project.' });
      } else {
        res.status(404).json({ message: 'Could not update project.' });
      }
    }) 
    .catch(error =>
      res.status(500).send(error));
});

router.delete('/:id',  (req, res) => {
  Projects.remove(req.params.id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json({ message: 'Project was deleted.' });
      } else {
        res.status(404).json({ message: 'Could not delete project.' });
      }
    })
    .catch(error => 
      res.status(500).json(error));
});

module.exports = router;