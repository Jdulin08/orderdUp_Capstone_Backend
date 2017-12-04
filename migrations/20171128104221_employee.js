exports.up = function(knex, Promise) {
  return knex.schema.createTable('employee', (table) => {
  table.increments('id');
  table.text('fName');
  table.text('lName');
  table.text('phone');
  table.text('password');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('employee');
};
