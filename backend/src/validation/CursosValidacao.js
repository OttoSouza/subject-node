const { celebrate, Segments, Joi } = require("celebrate");

const cursos_validacao_post = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.number().required()
  }).unknown(),

  [Segments.BODY]: Joi.object().keys({
    nome: Joi.string()
      .required()
      .empty(""),
    descricao: Joi.string()
      .required()
      .empty(""),
    carga_horaria: Joi.number()
      .required()
      .min(10),
    certificacao: Joi.string()
      .required()
      .empty("")
  })
});

const cursos_validacao_put = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.number().required()
  }).unknown(),

  [Segments.BODY]: Joi.object().keys({
    nome: Joi.string()
      .required()
      .empty(""),
    descricao: Joi.string()
      .required()
      .empty(""),
    carga_horaria: Joi.number()
      .required()
      .min(10),
    certificacao: Joi.string()
      .required()
      .empty("")
  }),
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required() 
  }),
});

module.exports = { cursos_validacao_post, cursos_validacao_put };
