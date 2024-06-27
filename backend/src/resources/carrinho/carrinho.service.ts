// carrinho.service.ts
import { PrismaClient } from '@prisma/client';
import { CarrinhoItem } from './carrinho.type';

const prisma = new PrismaClient();

export const adicionarProdutoAoCarrinho = async (
  produto: CarrinhoItem,
): Promise<void> => {
  // Verificar se o produto já existe no carrinho
  const carrinhoExistente = await prisma.carrinho.findFirst({
    where: {
      produtoId: produto.produto.id,
    },
  });

  if (carrinhoExistente) {
    // Atualizar a quantidade se o produto já estiver no carrinho
    await prisma.carrinho.update({
      where: {
        id: carrinhoExistente.id,
      },
      data: {
        quantidade: carrinhoExistente.quantidade + produto.quantidade,
      },
    });
  } else {
    // Adicionar o produto ao carrinho se ele não existir
    await prisma.carrinho.create({
      data: {
        produtoId: produto.produto.id,
        quantidade: produto.quantidade,
      },
    });
  }
};

export const limparCarrinho = async (): Promise<void> => {
  await prisma.carrinho.deleteMany({});
};

export const getCarrinho = async (): Promise<CarrinhoItem[]> => {
  const carrinho = await prisma.carrinho.findMany({
    include: {
      produto: true,
    },
  });
  return carrinho.map((item) => ({
    produto: item.produto,
    quantidade: item.quantidade,
  }));
};
