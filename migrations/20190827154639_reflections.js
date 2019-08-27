
exports.up = function(knex, Promise) {
    return knex.schema.createTable('reflections', reflections =>{
        reflections.increments();
 
        reflections.string('note');

        reflections.datetime('date');
 
        reflections.boolean('status');

        reflections.integer('personId')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
 
    })
 };
 
 exports.down = function(knex, Promise) {
     return knex.schema.dropTableIfExists('reflections');
 };