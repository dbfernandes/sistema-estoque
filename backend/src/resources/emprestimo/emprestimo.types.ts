import { Emprestimo, SolicitacaoEquipamento } from "@prisma/client";

export type CreateEmprestimoDto = Pick<
    Emprestimo,
    'requisitanteId' | 'aprovadorId' | 'observacoes' | 'statusSolic'
>;

export type CreateSolicitacaoEquipamentoDto = Pick<
    SolicitacaoEquipamento,
    'equipamentoId' | 'equipamentoId' | 'projetoId'
>

export type UpdateEmprestimoDto = Pick<
    Emprestimo,
    'aprovadorId' | 'observacoes' | 'statusSolic'
>