const db = require('../dbConfig.js');

module.exports = {
  add, 
  find, 
  findBy, 
  findById, 
  remove, 
  update
};

function find() {
  return db('journals');
};

function findBy(filter) {
  return db('journals').where(filter);
};

async function add(journal) {
  const [id] = await db('journals').insert(journal);

  return findById(id);
};

function findById(id) {
  return db('journals')
    .where({ id })
    .first();
};

function remove(id) {
  return db('journals')
    .where({ id })
    .first()
    .del();
};

function update(journal, id) {
  return db('journals')
    .where({ id })
    .update(journal);
};