import { PrismaClient, Usuario } from '@prisma/client';
import { compare } from 'bcryptjs';

const prisma = new PrismaClient();

export const checkCredentials = async (
  email: string,
  senha: string,
): Promise<false | Usuario> => {
  const usuario = await prisma.usuario.findUnique({ where: { email } });
  if (!usuario) return false;
  const ok = await compare(senha, usuario.senha);
  if (ok) return usuario;
  return false;
};
