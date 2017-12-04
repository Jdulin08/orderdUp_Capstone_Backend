exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('answer').del()
    .then(function () {
      // Inserts seed entries
      return knex('answer').insert([
        {questionId: "1",
        parentId: "1",
        aText: ""
        },
        {questionId: "2",
        parentId: "2",
        aText: ""
        }
      ]);
    });
};
