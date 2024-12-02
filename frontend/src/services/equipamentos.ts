import { Equipamento } from "@/types/equipamento";
import api from "./api";

export async function listaEquipamentos(): Promise<Equipamento[]> {
  return (await api.get("/equipamento")).data;
}

export async function buscaEquipamento(id: string): Promise<Equipamento> {
  return (await api.get(`/equipamento/${id}`)).data;
}
