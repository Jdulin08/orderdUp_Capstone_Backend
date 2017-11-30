exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('question').del()
    .then(function () {
      // Inserts seed entries
      return knex('question').insert([
        {qText: "Say something interesting about yourself",
        type: "Employee",
        category: "Experience",
        ansDetail: ""
        },
        {qText: "What is the last or current restaurant you worked at?",
        type: "Employee",
        category: "Experience",
        ansDetail: ""
        },
        {qText: "From what years did you work at this location?",
        type: "Employee",
        category: "Experience",
        ansDetail: ""
        },
        {qText: "What was your highest title / role at this establishment?",
        type: "Employee",
        category: "Experience",
        ansDetail: ""
        },
        {qText: "Do you have experience working in fine dining?",
        type: "Employee",
        category: "Experience",
        ansDetail: ""
        },
        {qText: "Can you work Monday?",
        type: "Employee",
        category: "Wage & Schedule",
        ansDetail: ""
        },
        {qText: "Can you work Tuesday?",
        type: "Employee",
        category: "Wage & Schedule",
        ansDetail: ""
        },
        {qText: "Can you work Wednesday?",
        type: "Employee",
        category: "Wage & Schedule",
        ansDetail: ""
        },
        {qText: "Can you work Thursday?",
        type: "Employee",
        category: "Wage & Schedule",
        ansDetail: ""
        },
        {qText: "Can you work Friday?",
        type: "Employee",
        category: "Wage & Schedule",
        ansDetail: ""
        },
        {qText: "Can you work Saturday?",
        type: "Employee",
        category: "Wage & Schedule",
        ansDetail: ""
        },
        {qText: "Can you work Sunday?",
        type: "Employee",
        category: "Wage & Schedule",
        ansDetail: ""
        },
        {qText: "How far will you travel to work?",
        type: "Employee",
        category: "Wage & Schedule",
        ansDetail: ""
        },
        {qText: "What is your desired wage type?",
        type: "Employee",
        category: "Wage & Schedule",
        ansDetail: ""
        },
        {qText: "What is your desired wage per hour?",
        type: "Employee",
        category: "Wage & Schedule",
        ansDetail: ""
        }
      ]);
    });
};
