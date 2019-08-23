
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        {id: 1,
        name:'Sixr Team',
        members: 'Indie, Buddy, Chris, Jake, Landon, Damico',
       description: 'Build Team'},
      ]);
    });
};
