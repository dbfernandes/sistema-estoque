import { Request, Response } from 'express';
import { CarrinhoItem } from './carrinho.type';
import {
  adicionarProdutoAoCarrinho,
  limparCarrinho,
  getCarrinho,
} from './carrinho.service';

export const adicionarProduto = async (req: Request, res: Response) => {
  try {
    const produto: CarrinhoItem = req.body;
    await adicionarProdutoAoCarrinho(produto);
    res.status(200).json(await getCarrinho());
  } catch (error) {
    console.error('Erro ao adicionar produto ao carrinho:', error);
    res.status(500).json({ error: 'Erro ao adicionar produto ao carrinho.' });
  }
};

export const concluirCompra = async (req: Request, res: Response) => {
  try {
    // Aqui você pode adicionar lógica adicional antes de concluir a compra, se necessário

    // Limpar o carrinho após concluir a compra
    await limparCarrinho();

    res.status(200).json({ message: 'Compra concluída com sucesso!' });
  } catch (error) {
    console.error('Erro ao concluir a compra:', error);
    res.status(500).json({ error: 'Erro ao concluir a compra.' });
  }
};
