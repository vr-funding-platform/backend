
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('journals').del()
    .then(function () {
      // Inserts seed entries
      return knex('journals').insert([
        {"id": 10, 
        "post": "schools out",
        "title":"Summer",
        "status": "Happy",
        "personId": 1,
        "date":"2012-11-08 01:37:45"}
      ]);
    });
};