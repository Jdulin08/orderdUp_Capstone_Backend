exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurant').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurant').insert([
        {fName: "Bob",
        lName: "H",
        email: "bob@gmail.com",
        address: "550 Broadway",
        city: "Denver",
        state: "Colorado",
        zip: "80203",
        password: "Awesome4"
        },
        {fName: "Joe",
        lName: "L",
        address: "550 Grant St",
        city: "Denver",
        state: "Colorado",
        zip: "80203",
        email: "joel@gmail.com",
        password: "Awesome5"
        }
      ]);
    });
};
