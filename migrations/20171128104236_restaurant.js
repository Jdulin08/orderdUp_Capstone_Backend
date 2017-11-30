exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurant', (table) => {
  table.increments('id');
  table.text('fName');
  table.text('lName');
  table.text('email');
  table.text('password');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('restaurant');
};
