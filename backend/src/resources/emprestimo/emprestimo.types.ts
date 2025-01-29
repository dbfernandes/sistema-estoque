import { Solicitacao, SolicitacaoEquipamento } from "@prisma/client";

export type CreateEmprestimoDto = Pick<
    Solicitacao,
    'requisitanteId' | 'aprovadorId' | 'observacoes' | 'statusSolic'
>;

export type CreateSolicitacaoEquipamentoDto = Pick<
    SolicitacaoEquipamento,
    'solicitacaoId' | 'equipamentoId' | 'projetoId'
>

export type UpdateEmprestimoDto = Pick<
    Solicitacao,
    'aprovadorId' | 'observacoes' | 'statusSolic'
>