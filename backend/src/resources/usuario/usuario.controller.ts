import { Request, Response } from 'express';
import { createUsuario, getUser } from './usuario.service';
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

const getUserById = async (req: Request, res: Response) => {
  const id = req.params.id

  const user = await getUser(id)
  if(user === null) return res.status(404).send('Usuário não encontrado')
    return res.status(StatusCodes.ACCEPTED).json(user)
};

const update = async (req: Request, res: Response) => {};
const remove = async (req: Request, res: Response) => {};

export default { index, create, getUserById, update, remove };
