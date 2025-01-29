import { PrismaClient, Solicitacao, SolicitacaoEquipamento } from "@prisma/client";

import { CreateEmprestimoDto, CreateSolicitacaoEquipamentoDto, UpdateEmprestimoDto } from "./emprestimo.types";

const prisma = new PrismaClient();

export const createEmprestimo = async (
    inputData: CreateEmprestimoDto
): Promise<Solicitacao> => {
    const solicitacao = await prisma.solicitacao.create({
        data: inputData
    });
    return solicitacao;
};

/*
export const createSolicitacaoEquipamento = async (
    inputData: CreateSolicitacaoEquipamentoDto
): Promise<SolicitacaoEquipamento> => {
    const solicitacaoEquipamento = await prisma.solicitacaoEquipamento.create({
        data: inputData
    });
    return solicitacaoEquipamento;
};*/

export const getEmprestimoById = async (
    id: string
): Promise<Solicitacao | null> => {
    return await prisma.solicitacao.findUnique({ where: { id } });
};

export const listEmprestimo = async(): Promise<Solicitacao[]> => {
    return await prisma.solicitacao.findMany();
}

export const removeSolicitacao = async(
    id: string
) =>{
    await prisma.solicitacao.delete({ where: { id } });
}

export const solicitacaoAlreadyExists = async (
    id: string,
  ): Promise<boolean> => {
    return !!(await prisma.solicitacao.findFirst({ where: { id } }));
};

export const updateSolicitacao = async (
    id: string,
    solicitacao: UpdateEmprestimoDto,
  ): Promise<Solicitacao> => {
    return await prisma.solicitacao.update({ where: { id }, data: solicitacao });
  };
