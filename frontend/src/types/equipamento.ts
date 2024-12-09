export interface Equipamento {
  id: string;
  nome: string;
  descricao: string;
  observacoes: string;
  origem: string;
  numSerie: string;
  statusEquip: "Laboratorio" | "Manutencao" | "Emprestado" | "Reservado";
  createdAt: Date;
  updateAt: Date;
}

export type CreateEquipamentoDto = Pick<
  Equipamento,
  "nome" | "descricao" | "observacoes" | "origem" | "numSerie" | "statusEquip"
>;

export type UpdateEquipamentoDto = Pick<
  Equipamento,
  "nome" | "descricao" | "observacoes" | "origem" | "numSerie" | "statusEquip"
>;
