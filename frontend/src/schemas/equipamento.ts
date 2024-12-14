import Joi from "joi";

enum StatusEquipamento {
  Laboratorio = "Laboratorio",
  Manutencao = "Manutencao",
  Emprestado = "Emprestado",
  Reservado = "Reservado",
}

const equipamentoSchema = Joi.object({
  nome: Joi.string().min(3).max(50).required().messages({
    "string.empty": "O nome é obrigatório.",
    "string.min": "O nome deve ter no mínimo {#limit} caracteres.",
    "string.max": "O nome pode ter no máximo {#limit} caracteres.",
    "any.required": "O nome é obrigatório.",
  }),
  origem: Joi.string().min(3).max(50).required().messages({
    "string.empty": "A origem é obrigatória.",
    "string.min": "A origem deve ter no mínimo {#limit} caracteres.",
    "string.max": "A origem pode ter no máximo {#limit} caracteres.",
    "any.required": "A origem é obrigatória.",
  }),
  numSerie: Joi.string().min(3).max(50).required().messages({
    "string.empty": "O número de série é obrigatório.",
    "string.min": "O número de série deve ter no mínimo {#limit} caracteres.",
    "string.max": "O número de série pode ter no máximo {#limit} caracteres.",
    "any.required": "O número de série é obrigatório.",
  }),
  statusEquip: Joi.string()
    .valid(...Object.values(StatusEquipamento))
    .required()
    .messages({
      "any.required": "O status do equipamento é obrigatório.",
    }),
  descricao: Joi.string().messages({
    "string.empty": "A descrição é obrigatória.",
  }),
  observacoes: Joi.string().allow("").messages({
    "string.base": "As observações devem ser um texto.",
  }),
});

export default equipamentoSchema;
