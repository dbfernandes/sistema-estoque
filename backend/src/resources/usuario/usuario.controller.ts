import { Request, Response } from 'express';
import { createUsuario } from './usuario.service';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const index = async (req: Request, res: Response) => {};
const create = async (req: Request, res: Response) => {
  const usuario = req.body;
  try {
    const novoUsuario = await createUsuario(usuario);
    res.status(StatusCodes.CREATED).json(novoUsuario);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const read = async (req: Request, res: Response) => {};
const update = async (req: Request, res: Response) => {};
const remove = async (req: Request, res: Response) => {};

export default { index, create, read, update, remove };
