
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', users => {
    users.increments();
    users
      .string('username', 128)
      .notNullable()
      .unique();

    users
      .string('password', 128)
      .notNullable();
    
    users
      .string('name', 255);

    users
      .text('about', 'longtext');

    users
      .string('email', 255);

    users
      .string('pfp');  

    users
      .string('role', 128)
      .notNullable();

    users
      .string('team_id')


    users
      .datetime('created_at');
    

  }
 )};
 exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
 };
 