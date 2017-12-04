const knex = require("../knex");

module.exports = {
  findMatches,
  getOne,
  getAll,
}

function getOne({id}) {
  return knex.select("id", "qText", "type", "category", "ansDetail")
    .from('question')
    .where('id', id)
    .then(getFirst)
}

function getAll() {
  return knex.select("id", "qText", "type", "category", "ansDetail")
    .from('question')
}

// function create(data) {
//   return knex('question')
//     .insert(data)
// }

// function update(data) {
//   let {id} = data
//   delete data.id
//   return knex('question')
//     .update(data)
//     .where('id', id)
// }

// function remove({id}) {
//   return knex('question')
//     .where('id', id)
//     .del()
// }


function findMatches(qText) {
  return knex
    .select('*')
    .from('question')
    .where('qText', qText)
    .then(getFirst)
}


function getFirst(data) {
  return Array.isArray(data) && data.length >= 1 ? data[0] : null
}
