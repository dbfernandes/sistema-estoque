import { Request, Response } from 'express';
import { createUsuario, getUser, listAllUsers, removeUser, updateUser } from './usuario.service';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const index = async (req: Request, res: Response) => {
  const usersDb = await listAllUsers()

  if(usersDb === null) return res.status(400).send('Não existem usuários cadastrados')
  return res.status(StatusCodes.ACCEPTED).json(usersDb)
};

const create = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    const newUser = await createUsuario(user);
    res.status(StatusCodes.CREATED).json(newUser);
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

const update = async (req: Request, res: Response) => {
  const id = req.params.id
  const userRequest = req.body

  const userDb = await getUser(id)
  if(!userDb) return res.status(StatusCodes.NOT_FOUND).send('Usuário não encontrado')
    const userUpdated = await updateUser(id, userRequest)
    return res.status(StatusCodes.ACCEPTED).json(userUpdated) 
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params

  const userDb = await getUser(id)

  if(!userDb) return res.status(StatusCodes.NOT_FOUND).send('Usuário não encontrado')
  const userRemoved = await removeUser(id)
  return res.status(StatusCodes.NO_CONTENT)
  };

export default { index, create, getUserById, update, remove };
