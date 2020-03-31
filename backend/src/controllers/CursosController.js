const connection = require("../config/connection");
module.exports = {
  async listar_cursos(request, response) {
    const offset = request.headers.offset;
    const cursos = await connection("cursos")
      .select("*")
      .limit(5)
      .offset(offset);
    response.json(cursos);
  },

  async salvar_cursos(request, response) {
    try {
      const { nome, descricao, carga_horaria, certificacao } = request.body;
      const id_usuario = request.headers.authorization;

      const cursos = await connection("cursos")
        .insert({
          nome,
          descricao,
          carga_horaria,
          certificacao,
          id_usuario
        })
        .returning("*");

      return response.status(201).send(cursos);
    } catch (error) {
      return response.status(400).send(error.message);
    }
  },

  async atualizar_curso(request, response) {
    try {
      const { nome, descricao, carga_horaria, certificacao } = request.body;
      const { id } = request.params;
      const id_usuario = request.headers.authorization;

      const cursos_atualizado = await connection("cursos")
        .where({ id: id, id_usuario: id_usuario })
        .update({
          nome,
          descricao,
          carga_horaria,
          certificacao
        })
        .returning("*");

      return response.status(200).send(cursos_atualizado);
    } catch (error) {
      return response.status(400).send(error.message);
    }
  },

  async deletar_cursos(request, response) {
    try {
      const { id } = request.params;
      const id_usuario = request.headers.authorization;

      const usuario_deletado = await connection("cursos")
        .where({ 'id': id, 'id_usuario': id_usuario })
        .delete()
        .returning("*");

      return response.status(204).send(usuario_deletado);
    } catch (error) {
      return response.status(400).send(erro.message);
    }
  }
};
