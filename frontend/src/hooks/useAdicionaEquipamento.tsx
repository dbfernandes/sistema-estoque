import { adicionaEquipamento } from "@/services/equipamentos";
import { CreateEquipamentoDto } from "@/types/equipamento";
import { useMutation } from "@tanstack/react-query";

export function useAdicionaEquipamento(equipamento: CreateEquipamentoDto) {
  const { mutate } = useMutation({
    mutationFn: () => adicionaEquipamento(equipamento),
  });

  return mutate;
}
