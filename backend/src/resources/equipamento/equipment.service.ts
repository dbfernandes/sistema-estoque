import { PrismaClient, Equipamento } from '@prisma/client';
import { createEquipamentoDto, updateEquipamentoDto } from './equipment.types';

const prisma = new PrismaClient();

export const createEquipamento = async (
  Equipamento: createEquipamentoDto,
): Promise<Equipamento> => {
  return await prisma.equipamento.create({ data: Equipamento });
};

export const listEquipamentos = async (): Promise<Equipamento[]> => {
  return await prisma.equipamento.findMany();
};
export const EquipamentoAlreadyExists = async (
  nome: string,
): Promise<boolean> => {
  return !!(await prisma.equipamento.findUnique({ where: { nome } }));
};

export const readEquipamento = async (
  id: string,
): Promise<Equipamento | null> => {
  return await prisma.equipamento.findUnique({ where: { id } });
};

export const updateEquipamento = async (
  id: string,
  Equipamento: updateEquipamentoDto,
): Promise<Equipamento> => {
  return await prisma.equipamento.update({ where: { id }, data: Equipamento });
};

export const removeEquipamento = async (id: string): Promise<Equipamento> => {
  return await prisma.equipamento.delete({ where: { id } });
};
