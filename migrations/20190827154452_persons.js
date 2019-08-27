exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', users =>{
        users.increments();
 
        users.string('firstname', 128);

        users.string('lastname', 128);
 
        users.datetime('date');

        users.string('email');
 
    })
 };
 
 exports.down = function(knex, Promise) {
     return knex.schema.dropTableIfExists('users');
 };
