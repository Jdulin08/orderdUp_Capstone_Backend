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
        lat: "37.579412513438385",
        long: "-106.69921875",
        password: "Awesome4"
        },
        {fName: "Joe",
        lName: "L",
        email: "joel@gmail.com",
        address: "550 Grant St",
        city: "Denver",
        state: "Colorado",
        zip: "80203",
        lat: "40.111688665595956",
        long: "-99.052734375",
        password: "Awesome5"
        }
      ]);
    });
};
