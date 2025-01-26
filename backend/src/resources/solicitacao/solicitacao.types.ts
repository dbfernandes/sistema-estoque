import { Solicitacao, SolicitacaoEquipamento } from "@prisma/client";

export type CreateSolicitacaoDto = Pick<
    Solicitacao,
    'requisitanteId' | 'aprovadorId' | 'observacoes' | 'statusSolic'
>;

export type CreateSolicitacaoEquipamentoDto = Pick<
    SolicitacaoEquipamento,
    'solicitacaoId' | 'equipamentoId' | 'projetoId'
>

export type UpdateSolicitacaoDto = Pick<
    Solicitacao,
    'aprovadorId' | 'observacoes' | 'statusSolic'
>