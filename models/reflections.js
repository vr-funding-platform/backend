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
    return db('reflections');
  };
  
  function findBy(filter) {
    return db('reflections').where(filter);
  };
  
  async function add(team) {
    const [id] = await db('reflections').insert(team);
  
    return findById(id);
  };
  
  function findById(id) {
    return db('reflections')
      .where({ id })
      .first();
  };
  
  function remove(id) {
    return db('reflections')
      .where({ id })
      .first()
      .del();
  };
  
  function update(team, id) {
    return db('reflections')
      .where({ id })
      .update(team);
  };