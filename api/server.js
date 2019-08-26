const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('../routes/users-router.js');
const authRouter = require('../routes/auth/auth.js')
const projectsRouter = require('../routes/projects-router.js');
const Teams = require('../models/teams')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/users', usersRouter);
server.use('/auth', authRouter);
server.use('/projects', projectsRouter);


// if this message changes the server has been changed
let now = new Date().getTime();
var randomMessage = ["ONLINE","Active","Ready","Server Up"];
//this prints out on the console, feel free to add whatever messages you want
var message = randomMessage[Math.floor(Math.random() * randomMessage.length)];

server.get('/', (req,res) => {
  try {
  res.send(`${message} <${now}>`);
  } catch(error) {
    res.status(500).json(error.response);
  }
});

server.get('/teams', (req,res)=>{
  Teams.find()
  .then(teams =>{
      if (teams) {
          res.status(200).json(teams);
        } else {
          res.status(404).json({ error: 'no teams found.' });
        }
  })})

server.get('/teams/:id', (req, res) => {
  Teams.findById(req.params.id)
    .then(team => {
      res.status(200).json(team);
    })
    .catch(error => 
      res.status(500).json({ error: 'this is not the team you are looking for.'}));
});

server.post('/teams',  (req, res) => {
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

module.exports = server;