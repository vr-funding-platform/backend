const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// we are using an express server
const server = express();

// middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

// Main SIXR DB routes
server.use('/users', require('./routes/users-router.js'));
server.use('/auth', require('./routes/auth/auth.js'));
server.use('/projects', require('./routes/projects-router.js'));
// Design my life DB routes
server.use('/journals', require('./routes/journals-router.js'));
server.use('/persons', require('./routes/persons-router.js'));
// Phan's routes
server.use('/serviceWorkers', require('./routes/serviceWorkers-route'));
server.use('/banker', require('./routes/money-router.js'));
//Teams DB Routes
server.use('/teams', require('./routes/teams-router'))
//Reflections DB Routes
server.use('reflections', require('./routes/reflection-routes'))

// if this message changes the server has been changed
let now = new Date().getTime();
var randomMessage = ["ONLINE","Active","Ready","Server Up"];
//this prints out on the console, feel free to add whatever messages you want
var message = randomMessage[Math.floor(Math.random() * randomMessage.length)];

// Server message
server.get('/', (req,res) => {
  try {
  res.send(`${message} <${now}>`);
  } catch(error) {
    res.status(500).json(error.response);
  }
});

module.exports = server;