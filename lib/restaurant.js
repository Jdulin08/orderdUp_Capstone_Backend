const knex = require("../knex");

module.exports = {
  getOne,
  getAll,
  create,
  update,
  remove,
  getByEmail,
}

function getOne({id}) {
  return knex.select('*')
    .from('restaurant')
    .where('id', id)
    .then(getFirst)
}

function getAll() {
  return knex.select('*')
    .from('restaurant')
}

function create(data) {
  return knex.select('*')
    .from('restaurant')
      .insert(data)
}

function update(data) {
  let {id} = data
  delete data.id
  return knex('restaurant')
    .update(data)
    .where('id', id)
}

function remove({id}) {
  return knex('restaurant')
    .where('id', id)
    .del()
}

function getFirst(data) {
  return Array.isArray(data) && data.length >= 1 ? data[0] : null
}

function getByEmail({email}) {
  return knex.select('*')
    .from('restaurant')
    .where('email', email)
  }
// function findByPhone(phone) {
//   return knex
//     .select('*')
//     .from('employee')
//     .where('phone', phone)
//     .then(getFirst)
// }
