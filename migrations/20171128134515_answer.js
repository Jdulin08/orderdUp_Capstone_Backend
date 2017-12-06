exports.up = function(knex, Promise) {
  return knex.schema.createTable('answer', (table) => {
  table.increments('id');
  table.text('questionId');
  table.text('employeeId');
  table.text('managerId');
  table.text('aText');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('answer');
};
