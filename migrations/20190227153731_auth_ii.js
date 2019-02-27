exports.up = function(knex) {
  return knex.schema.createTable("auth_ii", auth_ii => {
    auth_ii.increments();

    auth_ii.string("username", 128).notNullable().unique;

    auth_ii.string("password", 128).notNullable();

    auth_ii.string("department", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists(employees)
};
