
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('persons').del()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert([
        {         "id": 1, 
                  "firstname": "Toni",  
                  "lastname": "Morrison", 
                "email":"admin@example.com",
               "date":"2012-11-08 01:37:45"}
      ]);
    });
};
