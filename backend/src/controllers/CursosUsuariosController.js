const connection = require("../config/connection");

module.exports = {
  async listar_cursos_usuarios(request, response) {
    const id_usuario = request.headers.authorization;
    const cursos = await connection("cursos")
      .where("id_usuario", id_usuario)
      .select("*");
    return response.json(cursos);
  }
};
