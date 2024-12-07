import { atualizaEquipamento } from "@/services/equipamentos";
import { UpdateEquipamentoDto } from "@/types/equipamento";
import { useMutation } from "@tanstack/react-query";

export function useAtualizaEquipamento() {
  const { mutate, isPending } = useMutation({
    mutationFn: (equipamento: UpdateEquipamentoDto) =>
      atualizaEquipamento(equipamento),
  });

  return { mutate, isPending };
}
