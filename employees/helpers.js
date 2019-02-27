const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('auth_ii').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('auth_ii').where(filter);
}

async function add(user) {
  const [id] = await db('auth_ii').insert(user);

  return findById(id);
}

function findById(id) {
  return db('auth_ii')
    .where({ id })
    .first();
}
