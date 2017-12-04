exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('question').del()
    .then(function () {
      // Inserts seed entries
      return knex('question').insert([
        {qText: "What is your desired wage type?",
        type: "Employee",
        category: "Wage & Schedule",
        ansDetail: "Dropdown"
        },
        {qText: "What is your desired wage per hour?",
        type: "Employee",
        category: "Wage & Schedule",
        ansDetail: "Dropdown"
        },
        {qText: "What is your desired salary per year?",
        type: "Employee",
        category: "Wage & Schedule",
        ansDetail: "Dropdown"
        },
        {qText: "Wage type offered?",
        type: "Employer",
        category: "Wage & Schedule",
        ansDetail: "Dropdown"
        },
        {qText: "Wage per hour offered?",
        type: "Employer",
        category: "Wage & Schedule",
        ansDetail: "Dropdown"
        },
        {qText: "Salary per year offered?",
        type: "Employer",
        category: "Wage & Schedule",
        ansDetail: "Dropdown"
        }
      ]);
    });
};
