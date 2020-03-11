const db = require('../dbConfig.js');

module.exports = {
    addTransaction,
    addTip
};

async function addTransaction(ticket) {
    return db('backTransfers')
    .insert(ticket, 'id');
  };

  async function addTip(tip) {
    return db('backTransfers')
    .insert(tip, 'id');
  };