const router = (module.exports = require("express").Router());
var knex = require("../knex");
const fetch = require('node-fetch')

// Get all employees
router.get("/", function(req, res) {
  knex.select("id", "fName", "lName", "email")
    .from("restaurant")
    .then(data => {
      res.json(data);
    });
});

// Get message by id
router.get('/:id', function (req, res) {
  let managerId = req.params.id
  knex.select("id", "fName", "lName", "email")
    .from('restaurant')
    .where('id', managerId)
    .then( function (data) {
      res.json(data)
    })
})

// Create a new employee
router.post('/', function (req, res) {
    var row = req.body
    knex.select('email')
        .from('restaurant')
        .where('phone', row.email)
        .then( (dat) => {
            if (dat[0] == undefined) {
            var bcrypt = require('bcrypt')
            const saltRounds = 10
            const prepass = row.password
            const leagueid = row.league_id
            fetch(`http://games.espn.com/ffl/api/v2/leagueSettings?leagueId=${leagueid}&year=2017`)
                .then( (response) => response.json())
                .then( (response) => {
                    let members = response.leaguesettings.leagueMembers
                    let check = members.filter( (member) => member.userName === row.username)
                    if (check[0] === undefined) {
                        res.status(500).send('no user matches the phone number')
                    }
                    let ownerId = check[0].userProfileId
                    check = check[0].userName
                    let teams = response.leaguesettings.teams
                    let teamcheck = Object.keys(teams).filter( (team) => response.leaguesettings.teams[team].owners[0].ownerId === ownerId)
                    let teamId = teamcheck[0]
                    if (teamId !== undefined) {
                        row['team_id'] = teamId
                        bcrypt.hash(prepass, saltRounds, function(err, hash) {
                            row['password'] = hash
                            knex('users')
                                .insert(row)
                                .returning('*')
                                .then( (data) => {
                                    res.json(data)
                                })
                        })
                    } else {
                        res.status(404).send('errrorrrrrrr')
                    }
                })
            } else {
                res.status(501).send('already exists')
            }
        })
})

// Delete a user
router.delete('/:id', function (req, res) {
  let managerId = req.params.id
  knex('restaurant')
    .where('restaurant.id', managerId)
    .del()
    .then( (data) => {
      res.json(data)
    })
})
