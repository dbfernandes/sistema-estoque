import Joi from 'joi';

const adicionarProdutoSchema = Joi.object({
  produto: Joi.object().required(),
  quantidade: Joi.number().integer().min(1).required(),
});

export default adicionarProdutoSchema;
