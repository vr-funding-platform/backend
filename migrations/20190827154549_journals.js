exports.up = function(knex, Promise) {
    return knex.schema.createTable('journals', journals =>{
        journals.increments();
 
        journals.string('post');

        journals.datetime('date');
 
        journals.string('status');

        journals.string('title');

        journals.integer('personId')
        .unsigned()
        .references('id')
        .inTable('persons')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
 
    })
 };
 
 exports.down = function(knex, Promise) {
     return knex.schema.dropTableIfExists('journals');
 };