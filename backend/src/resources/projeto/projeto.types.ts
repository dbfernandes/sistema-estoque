import { Projeto } from '@prisma/client';

export type CreateProjetoDto = Pick<
  Projeto,
  'nome' | 'descricao' | 'responsavel'
>;

export default CreateProjetoDto;