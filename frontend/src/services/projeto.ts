import { CreateProjetoDto, Projeto } from "@/types/projeto";
import api from "./api";

export async function adicionaProjeto(projeto: CreateProjetoDto): Promise<Projeto> {
  return (await api.post("/projeto", projeto)).data;
}
