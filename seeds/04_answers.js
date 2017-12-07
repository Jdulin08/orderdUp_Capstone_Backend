exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('answer').del()
    .then(function () {
      // Inserts seed entries
      return knex('answer').insert([
        {questionId: "1",
        phone: "8478140847",
        email: "",
        aText: ""
        },
        {questionId: "2",
        phone: "8478140847",
        email: "",
        aText: ""
        },
        {questionId: "3",
        phone: "8478140847",
        email: "",
        aText: ""
        },
        {questionId: "1",
        phone: "9703195045",
        email: "",
        aText: ""
        },
        {questionId: "2",
        phone: "9703195045",
        email: "",
        aText: ""
        },
        {questionId: "3",
        phone: "9703195045",
        email: "",
        aText: ""
        },
        {questionId: "1",
        phone: "7203235635",
        email: "",
        aText: ""
        },
        {questionId: "2",
        phone: "7203235635",
        email: "",
        aText: ""
        },
        {questionId: "3",
        phone: "7203235635",
        email: "",
        aText: ""
        },
        {questionId: "1",
        phone: "",
        email: "bob@gmail.com",
        aText: ""
        },
        {questionId: "2",
        phone: "",
        email: "bob@gmail.com",
        aText: ""
        },
        {questionId: "3",
        phone: "",
        email: "bob@gmail.com",
        aText: ""
        },
        {questionId: "1",
        phone: "",
        email: "joel@gmail.com",
        aText: ""
        },
        {questionId: "2",
        phone: "",
        email: "joel@gmail.com",
        aText: ""
        },
        {questionId: "3",
        phone: "",
        email: "joel@gmail.com",
        aText: ""
        }
      ]);
    });
};
