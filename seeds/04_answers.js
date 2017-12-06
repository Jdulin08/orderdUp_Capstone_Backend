exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('answer').del()
    .then(function () {
      // Inserts seed entries
      return knex('answer').insert([
        {questionId: "1",
        employeeId: "1",
        managerId: "",
        aText: ""
        },
        {questionId: "2",
        employeeId: "1",
        managerId: "",
        aText: ""
        },
        {questionId: "3",
        employeeId: "1",
        managerId: "",
        aText: ""
        },
        {questionId: "1",
        employeeId: "2",
        managerId: "",
        aText: ""
        },
        {questionId: "2",
        employeeId: "2",
        managerId: "",
        aText: ""
        },
        {questionId: "3",
        employeeId: "2",
        managerId: "",
        aText: ""
        },
        {questionId: "1",
        employeeId: "3",
        managerId: "",
        aText: ""
        },
        {questionId: "2",
        employeeId: "3",
        managerId: "",
        aText: ""
        },
        {questionId: "3",
        employeeId: "3",
        managerId: "",
        aText: ""
        },
        {questionId: "1",
        employeeId: "",
        managerId: "1",
        aText: ""
        },
        {questionId: "2",
        employeeId: "",
        managerId: "1",
        aText: ""
        },
        {questionId: "3",
        employeeId: "",
        managerId: "1",
        aText: ""
        },
        {questionId: "1",
        employeeId: "",
        managerId: "2",
        aText: ""
        },
        {questionId: "2",
        employeeId: "",
        managerId: "2",
        aText: ""
        },
        {questionId: "3",
        employeeId: "",
        managerId: "2",
        aText: ""
        }
      ]);
    });
};
