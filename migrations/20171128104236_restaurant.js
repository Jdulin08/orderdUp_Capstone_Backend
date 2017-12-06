exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurant', (table) => {
  table.increments('id');
  table.text('fName');
  table.text('lName');
  table.text('email');
  table.text('password');
  table.text('address');
  table.text('city');
  table.text('state');
  table.text('zip');
  table.text('lat');
  table.text('long');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('restaurant');
};
