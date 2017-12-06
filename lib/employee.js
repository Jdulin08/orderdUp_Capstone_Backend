const knex = require("../knex");

module.exports = {
  findByPhone,
  getOne,
  getAll,
  create,
  update,
  remove,
}

function getOne({id}) {
  return knex.select('*')
    .from('employee')
    .where('id', id)
    .then(getFirst)
}

function getAll() {
  return knex.select('*')
    .from('employee')
}

function create(data) {
  return knex('employee')
    .insert(data)
}

function update(data) {
  let {id} = data
  // delete data.id
  return knex('employee')
    .update(data)
    .where('id', id)
}

function remove({id}) {
  return knex('employee')
    .where('id', id)
    .del()
}

function findByPhone(phone) {
  return knex
    .select('*')
    .from('employee')
    .where('phone', phone)
    .then(getFirst)
}

function getFirst(data) {
  return Array.isArray(data) && data.length >= 1 ? data[0] : null
}
