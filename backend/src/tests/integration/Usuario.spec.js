const request = require("supertest");
const app = require("../../app");
const connection = require("../../config/connection");

describe("Salvar Usuario", () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });

  it("Deve ser capaz de salvar um usuario", async () => {
    const response = await request(app)
      .post("/usuarios")
      .send({
        nome: "Aninha",
        senha: "123456"
      })
      expect(response.body).toHaveProperty('nome');
  });
});
