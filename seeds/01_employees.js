exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employee').del()
    .then(function () {
      // Inserts seed entries
      return knex('employee').insert([
        {fName: "Jason",
        lName: "Dulin",
        phone: "+18478140847",
        password: "Awesome1"
        },
        {fName: "Bryant",
        lName: "Dulin",
        phone: "+19703195045",
        password: "Awesome2"
        },
        {fName: "Alexa",
        lName: "Perez",
        phone: "+17203235635",
        password: "Awesome3"
        },
      ]);
    });
};
