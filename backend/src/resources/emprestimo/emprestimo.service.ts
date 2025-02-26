import { PrismaClient, Emprestimo, SolicitacaoEquipamento } from "@prisma/client";

import { CreateEmprestimoDto, CreateSolicitacaoEquipamentoDto, UpdateEmprestimoDto } from "./emprestimo.types";

const prisma = new PrismaClient();

export const createEmprestimo = async (
    inputData: CreateEmprestimoDto
): Promise<Emprestimo> => {

    const requisitanteExiste = await prisma.usuario.findUnique({
        where: { id: inputData.requisitanteId },
      });
      
    if (!requisitanteExiste) {
    throw new Error("Usuário requisitante não encontrado!");
    }

    const solicitacao = await prisma.emprestimo.create({
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
): Promise<Emprestimo | null> => {
    return await prisma.emprestimo.findUnique({ where: { id } });
};

export const listEmprestimo = async(): Promise<Emprestimo[]> => {
    return await prisma.emprestimo.findMany();
}

export const removeSolicitacao = async(
    id: string
) =>{
    await prisma.emprestimo.delete({ where: { id } });
}

export const solicitacaoAlreadyExists = async (
    id: string,
  ): Promise<boolean> => {
    return !!(await prisma.emprestimo.findFirst({ where: { id } }));
};

export const updateSolicitacao = async (
    id: string,
    solicitacao: UpdateEmprestimoDto,
  ): Promise<Emprestimo> => {
    return await prisma.emprestimo.update({ where: { id }, data: solicitacao });
  };
