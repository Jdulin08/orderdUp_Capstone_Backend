exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurant').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurant').insert([
        {fname: "Bob",
        lname: "H",
        email: "bob@gmail.com",
        password: "Awesome4"
        },
        {fname: "Joe",
        lname: "L",
        email: "joel@gmail.com",
        password: "Awesome5"
        },
        {fname: "Nick",
        lname: "P",
        email: "np@gmail.com",
        password: "Awesome6"
        },
      ]);
    });
};
