import { PrismaClient, Usuario } from '@prisma/client';
import createUsuarioDto, { updateUsuarioDto } from './usuario.dto';
import { genSalt, hash } from 'bcryptjs';
import { error } from 'console';
import { UUID } from 'crypto';

const prisma = new PrismaClient();

export const createUsuario = async (
  usuario: createUsuarioDto,
): Promise<Usuario> => {
  try {
    const salt = await genSalt(parseInt(process.env.SALT_ROUNDS!));
    const senha = await hash(usuario.senha, salt);
    return await prisma.usuario.create({
      data: { ...usuario, senha },
    });
  } catch (err) {
    console.error('Error creating user:', err);
    throw err;
  }
};

export const getUser = async (
  id: string
): Promise<Usuario|null> => {
  const usuarioDb = await prisma.usuario.findUnique({
    where: {
      id: id
    }
  })
  return usuarioDb
}

export const listAllUsers = async (
): Promise<Usuario[]|null> => {

  const usersDb = await prisma.usuario.findMany()
  return usersDb
}

export const updateUser = async ( 
  id: string,
  usuario: updateUsuarioDto
): Promise<Usuario> => {
  const userDb = await prisma.usuario.update({
    where:{
      id: id
    }, data: usuario
  })
  return userDb
}

export const removeUser = async(
  id: string
): Promise<Usuario> => {
  return await prisma.usuario.delete({
    where:{
      id: id
    }
  })
}
