exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurant', (table) => {
  table.increments('id');
  table.text('fname');
  table.text('lname');
  table.text('email');
  table.text('password');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('restaurant');
};
