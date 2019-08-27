const db = require('../dbConfig.js');

module.exports = {
  add,
  find,
  findBy, 
  findById, 
  remove, 
  update,
  findProjectsByUserId
};

function find() {
  return db('persons').select('id', 'firstname','lastname','date')};

function findBy(filter) {
  return db('persons').where(filter);
};

function add(user) {
  return db('persons')
    .insert(user, 'id');
};

function findById(id) {
  return db('persons')
    .where({ id })
    .select('firstname','lastname')
    .first();
};

async function findProjectsByUserId(id) {
  const journals = await db('journals').where({ user_id: id });
  console.log(journals)
  return journals;
}

function remove(id) {
  return db('persons')
    .where({ id })
    .first()
    .delete();
};

function update(user, id) {
  return db('persons')
    .where({ id })
    .update(user);
}