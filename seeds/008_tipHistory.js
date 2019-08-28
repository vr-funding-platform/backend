
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tipHistory').del()
    .then(function () {
      // Inserts seed entries
      return knex('tipHistory').insert([
        {id: 1, "swUsername":"admin",
        "senderUsername":"admin",
        "dateRecieved":"23:00",
          "tipAmount": 43,
        "sw_id":1},
        {id: 2, "swUsername":"admin",
        "senderUsername":"admin",
        "dateRecieved":"23:30",
          "tipAmount": 33,
        "sw_id":1},
        {id: 3, "swUsername":"admin",
        "senderUsername":"admin",
        "dateRecieved":"00:01",
          "tipAmount": 137,
        "sw_id":1}
      ]);
    });
};
