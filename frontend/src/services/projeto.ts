import { CreateProjetoDto, Projeto } from "@/types/projeto";
import api from "./api";

export async function adicionaProjeto(
  projeto: CreateProjetoDto
): Promise<Projeto> {
  return (await api.post("/projeto", projeto)).data;
}

export async function listaProjetos(): Promise<Projeto[]> {
  return (await api.get("/projeto")).data;
}

export async function removeProjeto(id: string): Promise<Projeto> {
  return (await api.delete(`/projeto/${id}`)).data;
}
