import Joi from 'joi';

const schemaProjeto = Joi.object({
    nome: Joi.string().min(3).max(50).required(),
    descricao: Joi.string().min(3).max(200).required(),
    responsavelId: Joi.string().min(10).max(40).required(),
  });

export default schemaProjeto;