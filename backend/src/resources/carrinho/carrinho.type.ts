import { Produto } from '@prisma/client';

export interface CarrinhoItem {
  produto: Produto;
  quantidade: number;
}
