const db = require('../dbConfig.js');

module.exports = {
  add,
  find,
  findBy, 
  findById, 
  remove
};

function find() {
  return db('serviceWorkers').select('id', 'username','fullName','password', 'photoUrl','serviceType','timeAtJob','tagline','bio','workplace','accountBalance','rating','numOfRatings')};

function findBy(filter) {
  return db('serviceWorkers').where(filter);
};

function add(person) {
  return db('serviceWorkers')
    .insert(person, 'id');
};

function findById(id) {
  return db('serviceWorkers')
    .where({ id })
    .select('username','fullName','password', 'photoUrl','serviceType','timeAtJob','tagline','bio','workplace','accountBalance','rating','numOfRatings')
    .first();
};

function remove(id) {
  return db('serviceWorkers')
    .where({ id })
    .first()
    .delete();
};