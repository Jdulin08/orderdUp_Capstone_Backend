const knex = require("../knex");

module.exports = {
  findMatches,
  getOne,
  getAll,
  create,
}

function getOne({id}) {
  return knex.select("id", "questionId", "parentId", "aText")
    .from('answer')
    .where('id', id)
}

function getAll() {
  return knex.select("id", "questionId", "parentId", "aText")
    .from('answer')
}

function create(data) {
  return knex('answer')
    .insert(data)
}


function findMatches(qText) {
  return knex
    .select('*')
    .from('answer')
    .where('aText', aText)
}


// function getFirst(data) {
//   return Array.isArray(data) && data.length >= 1 ? data[0] : null
// }
