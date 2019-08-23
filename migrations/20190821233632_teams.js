
exports.up = function(knex, Promise) {
    return knex.schema.createTable('teams', teams =>{
        teams.increments();
 
        teams.string('name', 128);
 
        teams.string('members');
 
        teams.text('description')
 
    })
 };
 
 exports.down = function(knex, Promise) {
     return knex.schema.dropTableIfExists('teams');
 };
 