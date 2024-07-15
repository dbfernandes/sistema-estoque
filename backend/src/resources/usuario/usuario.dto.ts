import { Usuario } from '@prisma/client';

export type createUsuarioDto = Pick<
  Usuario,
  'nome' | 'email' | 'senha' | 'tipoUsuarioId'
>;
export type updateUsuarioDto = Pick<
  Usuario,
  'nome' | 'email' | 'senha' | 'tipoUsuarioId'
>;
export default createUsuarioDto;
