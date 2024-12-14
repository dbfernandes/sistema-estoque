import Joi from "joi";

const projetoSchema = Joi.object({
  nome: Joi.string().min(3).max(50).required().messages({
    "string.min": "O nome deve ter no mínimo {#limit} caracteres.",
    "string.max": "O nome pode ter no máximo {#limit} caracteres.",
    "string.empty": "O nome é obrigatório.",
    "any.required": "O nome é obrigatório.",
  }),
  descricao: Joi.string().min(3).max(200).required().messages({
    "string.min": "A descrição deve ter no mínimo {#limit} caracteres.",
    "string.max": "A descrição pode ter no máximo {#limit} caracteres.",
    "string.empty": "A descrição é obrigatória.",
    "any.required": "A descrição é obrigatória.",
  }),
  responsavel: Joi.string().min(10).max(40).required().messages({
    "string.min": "O responsável deve ter no mínimo {#limit} caracteres.",
    "string.max": "O responsável pode ter no máximo {#limit} caracteres.",
    "string.empty": "O responsável é obrigatório.",
    "any.required": "O responsável é obrigatório.",
  }),
});

export default projetoSchema;
