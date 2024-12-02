import { adicionaEquipamento } from "@/services/equipamentos";
import { CreateEquipamentoDto } from "@/types/equipamento";
import { useMutation } from "@tanstack/react-query";

export function useAdicionaEquipamento() {
  const { mutate, isPending } = useMutation({
    mutationFn: (equipamento: CreateEquipamentoDto) =>
      adicionaEquipamento(equipamento),
  });

  return { mutate, isPending };
}
