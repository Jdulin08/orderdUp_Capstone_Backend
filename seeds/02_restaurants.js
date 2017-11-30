exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurant').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurant').insert([
        {fName: "Bob",
        lName: "H",
        email: "bob@gmail.com",
        password: "Awesome4"
        },
        {fName: "Joe",
        lName: "L",
        email: "joel@gmail.com",
        password: "Awesome5"
        },
        {fName: "Nick",
        lName: "P",
        email: "np@gmail.com",
        password: "Awesome6"
        },
      ]);
    });
};
