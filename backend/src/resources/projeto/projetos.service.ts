import { PrismaClient, Projeto } from "@prisma/client";

import { CreateProjetoDto } from "./projeto.types";

const prisma = new PrismaClient()

export const createProjeto = async (
    projetoInput: CreateProjetoDto,
): Promise<Projeto> => {
    return await prisma.projeto.create({data: projetoInput});
}

export const listProjeto = async(): Promise<Projeto[]> => {
    return await prisma.projeto.findMany();
}

export const getProjetoById = async(
    id: string
): Promise<Projeto|null> => {
    return await prisma.projeto.findUnique({
        where: { id }
    })
}

export const removeProjeto = async(
    id: string
) =>{
    await prisma.projeto.delete({ where: { id } });
}

export const projetoAlreadyExist = async(
    nome: string
): Promise<boolean> =>{
    const existe = await prisma.projeto.count({ where: { nome } })
    if(existe > 0) return true
    return false
}