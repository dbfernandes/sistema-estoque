import {
  CreateEquipamentoDto,
  Equipamento,
  UpdateEquipamentoDto,
} from "@/types/equipamento";
import api from "./api";

export async function listaEquipamentos(): Promise<Equipamento[]> {
  return (await api.get("/equipamento")).data;
}

export async function buscaEquipamento(id: string): Promise<Equipamento> {
  return (await api.get(`/equipamento/${id}`)).data;
}

export async function adicionaEquipamento(
  equipamento: CreateEquipamentoDto
): Promise<Equipamento> {
  return (await api.post("/equipamento", equipamento)).data;
}

export async function removeEquipamento(id: string): Promise<Equipamento> {
  return (await api.delete(`equipamento/${id}`)).data;
}

export async function atualizaEquipamento(
  id: string,
  equipamento: UpdateEquipamentoDto
): Promise<Equipamento> {
  return (await api.put(`equipamento/${id}`, equipamento)).data;
}
