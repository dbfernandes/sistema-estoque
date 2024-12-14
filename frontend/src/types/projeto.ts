export interface Projeto {
  id: string;
  nome: string;
  descricao: string;
  responsavel: string;
  createdAt: Date;
  updateAt: Date;
}

export type CreateProjetoDto = Pick<
  Projeto,
  "nome" | "responsavel" | "descricao"
>;
