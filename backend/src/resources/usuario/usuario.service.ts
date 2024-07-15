import { PrismaClient, Usuario } from '@prisma/client';
import createUsuarioDto from './usuario.dto';
import { genSalt, hash } from 'bcryptjs';
import { error } from 'console';
import { UUID } from 'crypto';

const prisma = new PrismaClient();

export const createUsuario = async (
  usuario: createUsuarioDto,
): Promise<Usuario> => {
  const salt = await genSalt(parseInt(process.env.SALT_ROUNDS!));
  const senha = await hash(usuario.senha, salt);
  return await prisma.usuario.create({
    data: { ...usuario, senha },
  });
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
