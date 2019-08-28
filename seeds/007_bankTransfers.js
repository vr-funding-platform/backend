
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bankTransfers').del()
    .then(function () {
      // Inserts seed entries
      return knex('bankTransfers').insert([
        {id: 1, "username":"admin_worker",
      "balanceInquiry":300,
    "sw_id": 1},
        {id: 2, "username":"admin_worker",
      "balanceInquiry":10,
    "sw_id": 1},
        {id: 3, "username":"admin_worker",
      "balanceInquiry":-1400,
    "sw_id": 1},
        {id: 5, "username":"admin_worker",
      "balanceInquiry":500,
    "sw_id": 1},
        {id: 4, "username":"admin_worker",
      "balanceInquiry":-6,
    "sw_id": 1}
      ]);
    });
};
