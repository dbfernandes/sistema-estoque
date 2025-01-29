import Joi from 'joi';

enum statusSolicitacao {
    Solicitado = 'solicitado',
    Emprestado = 'emprestado',
    Atraso = 'atraso',
    Devolvido = 'devolvido',
}

const schemaSolicitacao = Joi.object({
    requisitanteId: Joi.string().min(32).max(36).required(),
    aprovadorId: Joi.string().min(32).max(36).required(),
    statusSolicitacao: Joi.string().optional().default(statusSolicitacao.Solicitado),
    equipamentos: Joi.array().items(Joi.object({
        equipamentoId: Joi.string().min(32).max(36).required(),
        projetoId: Joi.string().min(32).max(36).required()
    })),
    observacoes: Joi.string().max(200).optional(),
});

export default schemaSolicitacao;