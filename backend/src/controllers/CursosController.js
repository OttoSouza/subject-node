const connection = require("../config/connection");
module.exports = {
  async listar_cursos(request, response) {
    const cursos = await connection("cursos").select("*");
    response.json(cursos);
  },

  async salvar_cursos(request, response) {
    const { nome, descricao, carga_horaria, certificacao } = request.body;
    const id_usuario = request.headers.authorization;

    await connection("cursos").insert({
      nome,
      descricao,
      carga_horaria,
      certificacao,
      id_usuario
    });
    return response.status(204).send();
  },

  async atualizar_curso(request, response) {
    const { nome, descricao, carga_horaria, certificacao } = request.body;
    const { id } = request.params;
    const id_usuario = request.headers.authorization;

    const usuario = await connection("usuarios")
      .where("id", id_usuario)
      .first();

    if (!usuario) {
      return response.status(401).send("Usuario nao existe");
    }

    await connection("cursos")
      .where("id", id)
      .select("id_usuario")
      .update({
        nome,
        descricao,
        carga_horaria,
        certificacao
      });

    return response.status(204).send();
  },

  async deletar_cursos(request, response) {
    const { id } = request.params;
    const id_usuario = request.headers.authorization;

    const usuario = await connection("usuarios")
      .where("id", id_usuario)
      .first();

    if (!usuario) {
      return response.status(401).json({ err: "Usuario não encontrado" });
    }

    await connection("cursos")
      .where("id", id)
      .delete();

    return response.status(204).send();
  }
};
