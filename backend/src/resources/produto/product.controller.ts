import { Request, Response } from 'express';
import {
  createProduto,
  listProdutos,
  produtoAlreadyExists,
  readProduto,
  updateProduto,
  removeProduto,
} from './product.service';
import { createProdutoDto, updateProdutoDto } from './product.types';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const index = async function (req: Request, res: Response) {
  try {
    const produtos = await listProdutos();
    res.status(StatusCodes.OK).json(produtos);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const create = async function (req: Request, res: Response) {
  const produto: createProdutoDto = req.body;
  try {
    if (await produtoAlreadyExists(produto.nome)) {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    } else {
      const novoProduto = await createProduto(produto);
      res.status(StatusCodes.CREATED).json(novoProduto);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const read = async function (req: Request, res: Response) {
  const { id } = req.params;
  try {
    const produto = await readProduto(id);
    if (!produto)
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    res.status(StatusCodes.OK).json(produto);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const update = async function (req: Request, res: Response) {
  const { id } = req.params;
  const produto: updateProdutoDto = req.body;
  try {
    if (await produtoAlreadyExists(produto.nome)) {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    } else {
      const produtoAtualizado = await updateProduto(id, produto);
      res.status(StatusCodes.OK).json(produtoAtualizado);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const remove = async function (req: Request, res: Response) {
  const { id } = req.params;
  try {
    const produtoApagado = await removeProduto(id);
    res.status(StatusCodes.OK).json(produtoApagado);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export default { index, create, read, update, remove };
