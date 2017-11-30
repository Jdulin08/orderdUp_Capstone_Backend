exports.up = function(knex, Promise) {
  return knex.schema.createTable('question', (table) => {
  table.increments('id');
  table.text('qText');
  table.text('type');
  table.text('category');
  table.text('ansDetail');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('question');
};
