exports.up = function(knex) {
  return knex.schema.createTable("usuarios", table => {
    table.increments("id");
    table.string("nome").notNullable();
    table.string("senha").notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTable("usuarios");
};
