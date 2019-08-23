const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          username: 'admin',
          password: bcrypt.hashSync('password', 10),
          name: 'Indie',
          about: 'The admin account',
          email:'waves@example.com',
          pfp:'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-0PG98eTQglo%2FT2lVBgpSkHI%2FAAAAAAAAAAk%2Fa-bj-kBNpX8%2Fs1600%2Fnetwork%2Badministrator.jpg&f=1',
          role:'creator',
          team_id: '1'
        },
       
      ]);
    });
};
