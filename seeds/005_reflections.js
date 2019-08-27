
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reflections').del()
    .then(function () {
      // Inserts seed entries
      return knex('reflections').insert([
        {"id": 1, 
        "note": "Best day ever!", 
        "status": true, 
        "personId": 1,
        "date":"2012-11-08 01:37:45"}
      ]);
    });
};
