import { Equipamento } from '@prisma/client';

export type createEquipamentoDto = Pick<
  Equipamento,
  'nome' | 'descricao' | 'observacoes' | 'origem' | 'numSerie' | 'statusEquip' | 'tombamento' | 'tipoEquipamento'
>;
export type updateEquipamentoDto = Pick<
  Equipamento,
  'nome' | 'descricao' | 'observacoes' | 'origem' | 'numSerie' | 'statusEquip'
>;

export default createEquipamentoDto;
