
exports.up = function(knex) {
  return knex.schema.createTable('teste', function (table) {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('UF').notNullable();
    
  table.string('user_id').notNullable();

  table.foreign('user_id').references('id').inTable('usernames');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('teste');
};
