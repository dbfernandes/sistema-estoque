import { Projeto } from '@prisma/client';

export type CreateProjetoDto = Pick<
  Projeto,
  'nome' | 'descricao' | 'responsavelId'
>;

export default CreateProjetoDto;