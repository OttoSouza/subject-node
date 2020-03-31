const connection = require("../config/connection")
module.exports = {

    async authentication(request, response) {
        const {nome, senha} = request.body;

        const usuario = await connection('usuarios').where('nome', nome).first();
        
        if(!usuario){
            return response.status(400).json({err: "Usuario nao encontrado"})
        }  
        if(usuario.senha !== senha){
            return response.status(400).json({err: "Senha Invalida"})
        }

        return response.json(usuario);
    }
}