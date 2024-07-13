import { PrismaClient, Usuario } from '@prisma/client';
import createUsuarioDto from './usuario.types';
import { genSalt, hash } from 'bcryptjs';

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
