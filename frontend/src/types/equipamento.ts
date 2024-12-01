export interface Equipamento {
  id: string;
  nome: string;
  descricao: string;
  observacoes: string;
  origem: string;
  numSerie: string;
  createdAt: Date;
  updateAt: Date;
}

export type CreateEquipamentoDto = Pick<
  Equipamento,
  "nome" | "descricao" | "observacoes" | "origem" | "numSerie"
>;

// export type CreateEquipamentoDto = Pick<
//   Equipamento,
//   "nome" | "preco" | "estoque"
// >;
// export type UpdateEquipamentoDto = Pick<
//   Equipamento,
//   "nome" | "preco" | "estoque"
// >;
