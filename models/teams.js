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
    return db('teams');
  };
  
  function findBy(filter) {
    return db('teams').where(filter);
  };
  
  async function add(team) {
    const [id] = await db('teams').insert(team);
  
    return findById(id);
  };
  
  function findById(id) {
    return db('teams')
      .where({ id })
      .first();
  };
  
  function remove(id) {
    return db('teams')
      .where({ id })
      .first()
      .del();
  };
  
  function update(team, id) {
    return db('teams')
      .where({ id })
      .update(team);
  };