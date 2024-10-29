import { PrismaClient, Equipamento } from '@prisma/client';
import {
  createEquipamentoDto,
  updateEquipamentoDto,
} from './equipamento.types';

const prisma = new PrismaClient();

export const createEquipamento = async (
  equipamento: createEquipamentoDto,
): Promise<Equipamento> => {
  return await prisma.equipamento.create({ data: equipamento });
};

export const listEquipamentos = async (): Promise<Equipamento[]> => {
  return await prisma.equipamento.findMany();
};

export const EquipamentoAlreadyExists = async (
  numSerie: string,
): Promise<boolean> => {
  return !!(await prisma.equipamento.findFirst({ where: { numSerie } }));
};

export const readEquipamento = async (
  id: string,
): Promise<Equipamento | null> => {
  return await prisma.equipamento.findUnique({ where: { id } });
};

export const updateEquipamento = async (
  id: string,
  equipamento: updateEquipamentoDto,
): Promise<Equipamento> => {
  return await prisma.equipamento.update({ where: { id }, data: equipamento });
};

export const removeEquipamento = async (id: string): Promise<Equipamento> => {
  return await prisma.equipamento.delete({ where: { id } });
};
