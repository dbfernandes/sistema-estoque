export interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
}

export type CreateProdutoDto = Pick<Produto, "nome" | "preco" | "estoque">;
export type UpdateProdutoDto = Pick<Produto, "nome" | "preco" | "estoque">;
