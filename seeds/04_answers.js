exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('answer').del()
    .then(function () {
      // Inserts seed entries
      return knex('answer').insert([
        {questionId: "1",
        employeeId: "1",
        managerId: "1",
        aText: ""
        },
        {questionId: "2",
        employeeId: "2",
        managerId: "2",
        aText: ""
        },
        {questionId: "3",
        employeeId: "3",
        managerId: "3",
        aText: ""
        },
      ]);
    });
};
