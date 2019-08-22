
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', projects => {
    projects.increments();
    projects
      .string('projectName', 255)
      .notNullable();

    projects
      .string('projectType', 255);

    projects
      .text('description')
      .notNullable();

    projects
      .decimal('fundingAmount');

    projects
      .decimal('fundingGoal');

    projects
      .string('donors');

    projects
      .boolean('funded')
      .defaultTo(false);

    projects
      .string('img');

    projects
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

  })
 };
 exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
 };
 
