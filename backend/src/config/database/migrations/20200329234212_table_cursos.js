exports.up = function(knex) {
  return knex.schema.createTable("cursos", table => {
    table.increments("id");
    table.string("nome").notNullable();
    table.string("descricao").notNullable();
    table.decimal("carga_horaria").notNullable();
    table.string("certificacao").notNullable();

    table.integer("id_usuario").notNullable();

    table
      .foreign("id_usuario")
      .references("id")
      .inTable("usuarios");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("cursos");
};
