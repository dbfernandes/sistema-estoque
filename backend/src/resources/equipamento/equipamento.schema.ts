import Joi from 'joi';

enum StatusEquipamento {
  Laboratorio = 'Laboratorio',
  Manutencao = 'Manutencao',
  Emprestado = 'Emprestado',
  Reservado = 'Reservado',
}

const schemaEquipamento = Joi.object({
  nome: Joi.string().min(3).max(50).required(),
  origem: Joi.string().min(3).max(50).required(),
  numSerie: Joi.string().min(3).max(50).required(),
  statusEquip: Joi.string()
    .valid(...Object.values(StatusEquipamento))
    .required(),
  descricao: Joi.string(),
  observacoes: Joi.string().allow(''),
  tombamento: Joi.string().allow(''),
  tipoEquipamento: Joi.string().allow(''),
});

export default schemaEquipamento;
