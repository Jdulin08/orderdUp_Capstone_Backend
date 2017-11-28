exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('question').del()
    .then(function () {
      // Inserts seed entries
      return knex('question').insert([
        {qText: "Desired Distance to travel",
        type: "Employee",
        ansDetail: ""
        },
        {qText: "Fine Dining Experience?",
        type: "Employee",
        ansDetail: ""
        },
        {qText: "Salary Range?",
        type: "Employee",
        ansDetail: ""
        },
      ]);
    });
};
