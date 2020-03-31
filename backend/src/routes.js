const express = require("express");
const {
  usuario_validacao_post,
  usuario_validacao_put
} = require("./validation/UsuarioValidacao");
const {
  cursos_validacao_post,
  cursos_validacao_put
} = require("./validation/CursosValidacao");

const UsuarioController = require("./controllers/UsuarioController");
const CursosController = require("./controllers/CursosController");
const CursosUsuariosController = require("./controllers/CursosUsuariosController");
const SessionController = require("./controllers/SessionController");
const routes = express.Router();

//Sessions
routes.post("/sessions", SessionController.authentication);

//Cursos
routes.get("/cursos", CursosController.listar_cursos);
routes.post("/cursos", cursos_validacao_post, CursosController.salvar_cursos);
routes.put(
  "/atualizar_cursos/:id",
  cursos_validacao_put,
  CursosController.atualizar_curso
);
routes.delete("/deletar_cursos/:id", CursosController.deletar_cursos);

//Cursos_Usuarios
routes.get(
  "/listar_cursos_usuarios",
  CursosUsuariosController.listar_cursos_usuarios
);

//Usuarios
routes.get("/usuarios", UsuarioController.listar_usuarios);
routes.post(
  "/usuarios",
  usuario_validacao_post,
  UsuarioController.salvar_usuario
);
routes.put(
  "/usuarios/:id",
  usuario_validacao_put,
  UsuarioController.atualizar_usuario
);
routes.delete("/usuarios/:id", UsuarioController.deletar_usuario);

module.exports = routes;
