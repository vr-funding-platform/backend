const server = require('./api/server.js');

var randomMessage = [
    "Hello World",
    "Welcome Developer",
    "Whose api is this anyway?",
    "Who left the API running?",
    "Welcome to the happiest server on this side of the sea, love.",
    "Reminder: Tip Your Server",
    "Don't Worry 🐝  Happy",
    "Watch Out For  🚩",
    "Testing Is Good",
    "Don't worry it's just a warning.",
    "A Cypress is a tree like structure."
  ];
  //this prints out on the console, feel free to add whatever messages you want
  var message = randomMessage[Math.floor(Math.random() * randomMessage.length)];

  let now = new Date().getTime();

const port = process.env.PORT || 4200;
server.listen(port, () => console.log(`** ${message} **\n
** server running on port http://localhost:${port} **\n
** TIME IS ${now} **`));