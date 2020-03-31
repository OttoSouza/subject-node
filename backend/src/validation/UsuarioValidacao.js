const { celebrate, Segments, Joi } = require("celebrate");

const usuario_validacao_post = celebrate({
  [Segments.BODY]: Joi.object().keys({
    nome: Joi.string()
      .required()
      .min(4)
      .max(10)
      .empty(""),
    senha: Joi.string()
      .required()
      .min(6)
      .empty("")
  })
});

const usuario_validacao_put = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  }),
  [Segments.BODY]: Joi.object().keys({
    nome: Joi.string()
      .required()
      .min(4)
      .max(10)
      .empty(""),
    senha: Joi.string()
      .required()
      .min(6)
      .empty("")
  })
});

module.exports = { usuario_validacao_post, usuario_validacao_put };
