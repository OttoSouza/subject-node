const connection = require("../config/connection");
const excepions = require("../messages/exceptions");

const messagesEx = require("../messages/exceptionsMessages");

module.exports = {
  async listar_usuarios(request, response) {
    try {
      const usuarios = await connection("usuarios").select("*");
      return response.status(200).json(usuarios);
    } catch (error) {
      return response.status(200).send({ err: messagesEx.erro_listar_usuario });
    }
  },

  async salvar_usuario(request, response) {
    try {
      const { nome, senha } = request.body;
      const usuario = await connection("usuarios")
        .insert({
          nome,
          senha
        })
        .returning("*");

      return response.status(201).send(usuario);
    } catch (error) {
      return response.status(400).send({ err: messagesEx.erro_salvar_usuario });
    }
  },

  async atualizar_usuario(request, response) {
    try {
      const { id } = request.params;
      const { nome, senha } = request.body;

      const usuario = await connection("usuarios")
        .update({
          nome,
          senha
        })
        .where("id", id)
        .returning("*");

      return response.status(200).send(usuario);
    } catch (error) {
      return response
        .status(401)
        .send({ err: messagesEx.erro_atualizar_usuario });
    }
  },

  async deletar_usuario(request, response) {
    try {
      const { id } = request.params;

      await connection("usuarios")
        .select("id")
        .where("id", id)
        .delete();

      return response.status(204).send("Usuario deletado com sucesso");
    } catch (error) {
      return response
        .status(400)
        .send({ err: messagesEx.erro_deletar_usuario });
    }
  }
};
