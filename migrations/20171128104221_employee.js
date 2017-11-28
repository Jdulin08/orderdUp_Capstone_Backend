exports.up = function(knex, Promise) {
  return knex.schema.createTable('employee', (table) => {
  table.increments('id');
  table.text('fName');
  table.text('lName');
  table.text('phone');
  table.text('password');
  table.text('verifyCode');
  table.boolean('active');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('employee');
};
