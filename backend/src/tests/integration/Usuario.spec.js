const request = require("supertest");
const app = require("../../app");
const connection = require("../../config/connection");

describe("Salvar Usuario", () => {
  // beforeEach(async () => {
  //   await connection.migrate.rollback();
  //   await connection.migrate.latest();
  // });
  // afterAll(async () => {
  //   await connection.destroy();
  // });
  it("Deve ser capaz de salvar um usuario", async () => {
    const response = await request(app)
      .post("/usuarios")
      .send({
        nome: "Aninha",
        senha: "123456"
      });
    expect(response.body).toHaveProperty("nome");
  });
});

describe("Listar Usuarios", () => {
  it("Deve ser capaz de listar os usuarios", async () => {
    const usuarios = await connection("usuarios").select("*");
    const response = await request(app).get("/usuarios");
    expect(response.body).toEqual(usuarios);
  });
});
