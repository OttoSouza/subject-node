const connection = require("../config/connection");
module.exports = {
  async listar_usuarios(request, response) {
    const usuarios = await connection("usuarios").select('*');

    return response.json(usuarios);
  },

  async salvar_usuario(request, response) {
    const { nome, senha } = request.body;

    await connection("usuarios").insert({
      nome,
      senha
    });

    return response.json({nome});
  },

  async atualizar_usuario(request, response){
      const { id } = request.params;
      const {nome, senha} = request.body;
      const usuario = await connection('usuarios').where("id", id).first();

      if(!usuario) {
        return response.status(401).json({err: 'Usuario não existe'})
      }

      await connection('usuarios').where('id', id).update({nome, senha}); 
      return response.status(200).send('Usuário modificado com sucesso')
  },
  
  async deletar_usuario(request, response) {
      const { id } = request.params;
      const usuario = await connection('usuarios').where("id", id).first();

      if(!usuario) {
        return response.status(401).json({err: 'Usuario não nao existe'})
      }

      await connection('usuarios').where('id', id).delete();
      return response.status(204).send(); 
  }


};
